import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({message: "Method not allowed"});
    }

    const {
        page = "1",
        limit = "10",
        sortBy = "group_count", // group_count | message_datetime | market_cap | contract_address
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    try {
        // Fetch all records to aggregate by contract_address
        const allContracts = await prisma.telegramUserData.findMany({
            select: {
                contract_address: true,
                group_name: true,
                token_name: true,
                token_symbol: true,
                dex_url: true,
                chain: true,
                call_count: true,
                // social_links: true,
                token_image: true,
                // banner_image: true,
                price_usd: true,
                market_cap: true,
                message_datetime: true,
            },
        });

        // Group by contract_address and count unique groups, also store first contract record and latest datetime
        const contractGroupMap = new Map<string, { 
            groups: Set<string>; 
            firstRecord: typeof allContracts[0];
            latestDatetime: Date | null;
        }>();
        
        for (const contract of allContracts) {
            if (!contractGroupMap.has(contract.contract_address)) {
                contractGroupMap.set(contract.contract_address, {
                    groups: new Set(),
                    firstRecord: contract,
                    latestDatetime: contract.message_datetime
                });
            }
            const data = contractGroupMap.get(contract.contract_address)!;
            data.groups.add(contract.group_name);
            
            // Track latest datetime
            if (contract.message_datetime) {
                if (!data.latestDatetime || contract.message_datetime > data.latestDatetime) {
                    data.latestDatetime = contract.message_datetime;
                }
            }
        }

        // Convert to array with contract_address, group_count, latest_datetime, and contract details
        const aggregatedContracts = Array.from(contractGroupMap.entries()).map(([contract_address, data]) => {
            const { group_name, contract_address: _addr, message_datetime: _dt, ...contractData } = data.firstRecord;
            return {
                contract_address,
                group_count: data.groups.size,
                latest_datetime: data.latestDatetime,
                ...contractData,
            };
        });

        

        // Sorting
        const sortOrder = req.query.order === "asc" ? 1 : -1;
        aggregatedContracts.sort((a, b) => {
            switch (sortBy) {
                case "contract_address":
                    return a.contract_address.localeCompare(b.contract_address) * sortOrder;
                case "message_datetime":
                case "latest_datetime":
                    const dateA = a.latest_datetime ? new Date(a.latest_datetime).getTime() : 0;
                    const dateB = b.latest_datetime ? new Date(b.latest_datetime).getTime() : 0;
                    return (dateA - dateB) * sortOrder;
                case "market_cap":
                    const marketCapA = a.market_cap ?? 0;
                    const marketCapB = b.market_cap ?? 0;
                    return (marketCapA - marketCapB) * sortOrder;
                case "group_count":
                default:
                    return (a.group_count - b.group_count) * sortOrder;
            }
        });

        // Pagination
        const total = aggregatedContracts.length;
        const start = (pageNum - 1) * limitNum;
        const paginatedContracts = aggregatedContracts.slice(start, start + limitNum);

        // Fetch Dexscreener data only for paginated contracts (parallel with batching for speed)
        // Rate limit: 300 requests/minute = 5 requests/second, so we batch 5 at a time
        const BATCH_SIZE = 5;
        const DELAY_BETWEEN_BATCHES = 1200; // 1.2 seconds between batches to stay under 300/min
        
        const contractsWithDexData = [];
        
        // Process in batches
        for (let i = 0; i < paginatedContracts.length; i += BATCH_SIZE) {
            const batch = paginatedContracts.slice(i, i + BATCH_SIZE);
            
            // Fetch all contracts in batch in parallel
            const batchPromises = batch.map(async (contract) => {
                try {
                    const dexdata = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${contract.contract_address}`, {
                        method: 'GET',
                        headers: {
                            "Accept": "*/*"
                        },
                    });

                    if (dexdata.ok) {
                        const dexdataJson = await dexdata.json();
                        
                        // Check if pairs array exists and has data
                        if (dexdataJson.pairs && dexdataJson.pairs.length > 0) {
                            const pair = dexdataJson.pairs[0];
                            const currentPriceUsd = pair.priceUsd ? parseFloat(pair.priceUsd) : null;
                            const currentMarketCap = pair.marketCap ? parseFloat(pair.marketCap.toString()) : null;
                            const dbPriceUsd = contract.price_usd ? parseFloat(contract.price_usd.toString()) : null;
                            const dbMarketCap = contract.market_cap ? parseFloat(contract.market_cap.toString()) : null;

                            // Calculate percentage changes
                            let priceChangePercent: number | null = null;
                            if (currentPriceUsd !== null && dbPriceUsd !== null && dbPriceUsd !== 0) {
                                priceChangePercent = ((currentPriceUsd - dbPriceUsd) / dbPriceUsd) * 100;
                            }

                            let marketCapChangePercent: number | null = null;
                            if (currentMarketCap !== null && dbMarketCap !== null && dbMarketCap !== 0) {
                                marketCapChangePercent = ((currentMarketCap - dbMarketCap) / dbMarketCap) * 100;
                            }

                            return {
                                ...contract,
                                price_usd: currentPriceUsd,
                                market_cap: currentMarketCap,
                                price_change_percent: priceChangePercent,
                                market_cap_change_percent: marketCapChangePercent,
                            };
                        } else {
                            // No pairs found, use original contract data
                            return {
                                ...contract,
                                price_change_percent: null,
                                market_cap_change_percent: null,
                            };
                        }
                    } else {
                        console.error(`Dexscreener API error for ${contract.contract_address}:`, dexdata.status);
                        return {
                            ...contract,
                            price_change_percent: null,
                            market_cap_change_percent: null,
                        };
                    }
                } catch (error) {
                    console.error(`Error fetching Dexscreener data for ${contract.contract_address}:`, error);
                    return {
                        ...contract,
                        price_change_percent: null,
                        market_cap_change_percent: null,
                    };
                }
            });

            // Wait for batch to complete
            const batchResults = await Promise.all(batchPromises);
            contractsWithDexData.push(...batchResults);

            // Delay between batches (except for the last batch)
            if (i + BATCH_SIZE < paginatedContracts.length) {
                await new Promise((resolve) => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
            }
        }

        // Sort by market cap change percentage after fetching all data
        contractsWithDexData.sort((a, b) => {
            const marketCapChangeA = a.market_cap_change_percent ?? -Infinity;
            const marketCapChangeB = b.market_cap_change_percent ?? -Infinity;
            // Sort descending (highest change first)
            return marketCapChangeB - marketCapChangeA;
        });

        return res.status(200).json({
            page: pageNum,
            limit: limitNum,
            total: total,
            contracts: contractsWithDexData,
        });
    } catch (error) {
        console.error("Error fetching contracts:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export default allowCors(handler);