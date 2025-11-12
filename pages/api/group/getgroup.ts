import {PrismaClient} from "@prisma/client";
import type {NextApiRequest, NextApiResponse}
from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({message: "Method not allowed"});
    }

    const {username} = req.query;
    if (!username || typeof username !== "string") {
        return res.status(400).json({message: "username query parameter is required"});
    }

    try { 
        // Fetch all messages for the user including DexscreenerData
        const messages = await prisma.groupUserCountsWebhookTest.findMany({
            where: {
                Username: username
            },
            include: {
                DexscreenerData: true
            },
            orderBy: {
                MessageDateTime: "desc"
            }
        });

        if (! messages.length) {
            return res.status(404).json({message: "No messages found for this user"});
        }

        console.log('first message', messages[0])

        const groupedByContract: Record<string, any> = {};
        const callPerformances: number[] = [];
        const marketCaps: number[] = [];
        const contractAddresses = new Set<string>();
        let bestCall = {
            tokenName: "",
            tokenSymbol: "",
            multiplier: 0
        };
        let lastCall: any = null;
        const groupname = messages[0].GroupName;
        const groupMembers = messages[0].GroupUserCount;

        // Fetch group analytics from GroupAnalyticsDetailed for this username and groupName
        const groupAnalytics = await prisma.groupAnalyticsDetailed.findFirst({
            where: {
                username: username,
                groupName: groupname
            },
            select: {
                totalCalls: true,
                totalUniqueContracts: true,
            },
        });

        // Get totalCalls from GroupAnalyticsDetailed (same logic as getallgroup.ts)
        const totalCallsTracked = groupAnalytics?.totalCalls || 0;
        const totalUniqueContracts = groupAnalytics?.totalUniqueContracts || 0;

        // Get all unique contract addresses from messages
        const uniqueContracts = Array.from(new Set(messages.map(m => m.ContractAddress).filter((c) : c is string => !!c)));

        // Step 1: Try to get from dexscreener_cache_new first
        const latestDataMap = new Map<string, { priceUsd: number | null; marketCap: number | null; timestamp: Date }>();

        // Batch fetch all cache entries for unique contracts
        const cacheEntries = await prisma.dexscreenerCacheNew.findMany({
            where: {
                contractAddress: {
                    in: uniqueContracts
                }
            },
            select: {
                contractAddress: true,
                priceUsd: true,
                marketCap: true,
                updatedAt: true,
                historicalData: true
            },
            orderBy: {
                updatedAt: 'desc'
            }
        });

        // Group by contractAddress and get the most recent entry for each
        const cacheByContract = new Map<string, typeof cacheEntries[0]>();
        for (const entry of cacheEntries) {
            if (! cacheByContract.has(entry.contractAddress)) {
                cacheByContract.set(entry.contractAddress, entry);
            }
        }

        // Process each contract to get latest data from cache
        for (const contractAddress of uniqueContracts) {
            const entry = cacheByContract.get(contractAddress);
            if (entry) { // Try to get from historicalData first (most recent entry)
                if (entry.historicalData && entry.historicalData.length > 0) {
                    const latestHist = entry.historicalData[entry.historicalData.length - 1];
                    latestDataMap.set(contractAddress, {
                        priceUsd: latestHist.priceUsd ?? entry.priceUsd,
                        marketCap: latestHist.marketCap ?? entry.marketCap,
                        timestamp: latestHist.timestamp ?? entry.updatedAt ?? new Date()
                    });
                } else if (entry.priceUsd !== null || entry.marketCap !== null) { // Fallback to direct fields
                    latestDataMap.set(contractAddress, {
                        priceUsd: entry.priceUsd,
                        marketCap: entry.marketCap,
                        timestamp: entry.updatedAt ?? new Date()
                    });
                }
            }
        }

        // Step 2: For contracts not found in cache, try to get from dexLatestData
        const missingContracts = uniqueContracts.filter(addr => ! latestDataMap.has(addr));

        if (missingContracts.length > 0) {
            const latestDexData = await prisma.dexLatestData.findMany({
                where: {
                    contractAddress: {
                        in: missingContracts
                    }
                },
                select: {
                    contractAddress: true,
                    historicalData: true
                }
            });

            for (const ld of latestDexData) {
                const hist = ld.historicalData || [];
                const last = hist.length > 0 ? hist[hist.length - 1] : null;
                if (last) {
                    latestDataMap.set(ld.contractAddress, {
                        priceUsd: last.priceUsd ?? null,
                        marketCap: last.marketCap ?? null,
                        timestamp: last.timestamp ?? new Date()
                    });
                }
            }
        }

        // Process each message
        messages.forEach(msg => { // Skip if contract address is null or undefined
            if (!msg.ContractAddress) 
                return;
            


            // Get latest data from either cache or dexLatestData
            const latestPoint = latestDataMap.get(msg.ContractAddress);
            // Skip if contract doesn't have data in either cache or latest data
            if (! latestPoint) 
                return;
            


            // Pick the first Dex entry for this message (based on pairCreatedAt)
            const firstDex = msg.DexscreenerData ?. sort((a, b) => Number(b.pairCreatedAt || 0) - Number(a.pairCreatedAt || 0))[0];

            if (! firstDex || ! firstDex.marketCap || ! latestPoint.marketCap) 
                return;
            


            const marketcapChangePercent = ((firstDex.marketCap - latestPoint.marketCap) / latestPoint.marketCap) * 100;
            let multiplierX = marketcapChangePercent > -100 ? marketcapChangePercent / 100 + 1 : 1;

            if (! groupedByContract[msg.ContractAddress]) { // Use CallCount from database for star rating system
                const callCount = msg.CallCount || 1;
                let starRating: number;
                if (callCount <= 3) {
                    starRating = callCount;
                } else { // For 4+ calls, reset to 1 star
                    starRating = 1;
                } groupedByContract[msg.ContractAddress] = {
                    contract: msg.ContractAddress,
                    tokenName: firstDex.baseToken ?. name,
                    tokenSymbol: firstDex.baseToken ?. symbol,
                    tokenImage: firstDex.info ?. imageUrl,
                    dexUrl: firstDex.url,
                    chain: firstDex.chainId,
                    cachedMarketcap: latestPoint.marketCap,
                    dbMarketcap: firstDex.marketCap,
                    marketcapChangePercent,
                    multiplierX,
                    callCount: callCount,
                    starRating: starRating,
                    messages: []
                };
            }

            groupedByContract[msg.ContractAddress].messages.push({message: msg.FullMessage, messageDateTime: msg.MessageDateTime, messageLink: msg.MessageLink});

            callPerformances.push(multiplierX);
            if (latestPoint.marketCap) 
                marketCaps.push(latestPoint.marketCap);
            

            contractAddresses.add(msg.ContractAddress);

            if (multiplierX > bestCall.multiplier) {
                bestCall = {
                    tokenName: firstDex.baseToken ?. name || "",
                    tokenSymbol: firstDex.baseToken ?. symbol || "",
                    multiplier: multiplierX
                };
            }

            const msgDate = new Date(msg.MessageDateTime);
            if (! lastCall || msgDate > new Date(lastCall.datetime)) {
                lastCall = {
                    tokenName: firstDex.baseToken ?. name,
                    tokenSymbol: firstDex.baseToken ?. symbol,
                    multiplier: multiplierX,
                    datetime: msgDate
                };
            }
        });

        // Calculate alpha calls and profitable calls based on unique contracts
        const alphaContracts = new Set<string>();
        const profitableContracts = new Set<string>();

        messages.forEach(msg => {
            if (!msg.ContractAddress) 
                return;
            


            // Get latest data from either cache or dexLatestData
            const latestPoint = latestDataMap.get(msg.ContractAddress);
            // Skip if contract doesn't have data in either cache or latest data
            if (! latestPoint) 
                return;
            


            const firstDex = msg.DexscreenerData ?. sort((a, b) => Number(b.pairCreatedAt || 0) - Number(a.pairCreatedAt || 0))[0];

            if (! firstDex || ! firstDex.marketCap || ! latestPoint.marketCap) 
                return;
            


            const marketcapChangePercent = ((firstDex.marketCap - latestPoint.marketCap) / latestPoint.marketCap) * 100;
            let multiplierX = marketcapChangePercent > -100 ? marketcapChangePercent / 100 + 1 : 1;

            if (multiplierX >= 2) {
                alphaContracts.add(msg.ContractAddress);
            }
            if (multiplierX > 0.3) {
                profitableContracts.add(msg.ContractAddress);
            }
        });

        const alphaCalls = alphaContracts.size;
        const profitableCalls = profitableContracts.size;
        const consistencyPercentage = contractAddresses.size ? (profitableCalls / contractAddresses.size) * 100 : 0;
        const avgXPerCall = callPerformances.length ? callPerformances.reduce((a, b) => a + b, 0) / callPerformances.length : 1;
        const avgMarketCap = marketCaps.length ? marketCaps.reduce((a, b) => a + b, 0) / marketCaps.length : 0;

        // Sort contracts by latest message date (most recent first)
        const sortedContracts = Object.entries(groupedByContract).sort((a, b) => {
            const contractA = a[1];
            const contractB = b[1];
            
            // Get the latest message date from each contract's messages array
            const latestDateA = contractA.messages && contractA.messages.length > 0
                ? Math.max(...contractA.messages.map((m: any) => new Date(m.messageDateTime).getTime()))
                : 0;
            
            const latestDateB = contractB.messages && contractB.messages.length > 0
                ? Math.max(...contractB.messages.map((m: any) => new Date(m.messageDateTime).getTime()))
                : 0;
            
            // Sort descending (latest first)
            return latestDateB - latestDateA;
        });

        // Convert back to object maintaining the sorted order
        const sortedGroupedByContract: Record<string, any> = {};
        for (const [contractAddress, contractData] of sortedContracts) {
            sortedGroupedByContract[contractAddress] = contractData;
        }

        return res.status(200).json({
            username,
            groupMembers,
            groupname,
            analytics: {
                total_calls_tracked: totalCallsTracked,
                total_unique_contracts: totalUniqueContracts,
                consistency_percentage: Math.round(consistencyPercentage * 10) / 10,
                number_of_alpha_calls: alphaCalls,
                best_call: {
                    ... bestCall,
                    multiplier: Math.round(bestCall.multiplier * 10) / 10
                },
                last_call: lastCall ? {
                    ... lastCall,
                    multiplier: Math.round(lastCall.multiplier * 10) / 10
                } : null,
                average_call_marketcap: Math.round(avgMarketCap * 100) / 100,
                average_x_per_call: Math.round(avgXPerCall * 10) / 10
            },
            messages: sortedGroupedByContract

        });

    } catch (error) {
        console.error("Error fetching group data:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export default allowCors(handler);
