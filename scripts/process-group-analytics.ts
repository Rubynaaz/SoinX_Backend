import {PrismaClient} from "@prisma/client";
import {getDb} from "../lib/mongodb";

const prisma = new PrismaClient();

// Helper function to fetch dex data for a contract address with retry logic
async function fetchDexData(contractAddress: string, retries = 3): Promise<{ priceUsd: number | null; marketCap: number | null } | null> {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${contractAddress}`, {
                method: "GET",
                headers: {
                    Accept: "*/*"
                }
            });

            // Handle rate limiting (429) with exponential backoff
            if (response.status === 429) {
                const retryAfter = response.headers.get("Retry-After");
                const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : Math.min(1000 * Math.pow(2, attempt), 30000); // Max 30 seconds

                if (attempt < retries - 1) {
                    console.log(`  ⚠️  Rate limited for ${contractAddress}. Waiting ${waitTime}ms before retry ${
                        attempt + 1
                    }/${retries}`);
                    await new Promise((resolve) => setTimeout(resolve, waitTime));
                    continue; // Retry
                } else {
                    console.error(`  ❌ Rate limited for ${contractAddress} after ${retries} attempts`);
                    return null;
                }
            }

            if (! response.ok) {
                throw new Error(`HTTP error! status: ${
                    response.status
                }`);
            }

            const data = await response.json();

            if (! data.pairs || data.pairs.length === 0) {
                return null;
            }

            // Get the first pair (most relevant)
            const pair = data.pairs[0];

            return {
                priceUsd: pair.priceUsd ? parseFloat(pair.priceUsd) : null,
                marketCap: pair.marketCap ? parseFloat(pair.marketCap.toString()) : null
            };
        } catch (error) {
            if (attempt === retries - 1) {
                console.error(`  ❌ Error fetching dex data for ${contractAddress} after ${retries} attempts:`, error);
                return null;
            }
            // Wait before retry (exponential backoff)
            const waitTime = Math.min(1000 * Math.pow(2, attempt), 10000);
            await new Promise((resolve) => setTimeout(resolve, waitTime));
        }
    }
    return null;
}

// Function to get latest data from dexscreener_cache_new
async function getFromDexscreenerCache(contractAddress: string): Promise<{ priceUsd: number | null; marketCap: number | null; timestamp: Date } | null> {
    try { // Get all entries for this contract address (since unique constraint is on contractAddress + groupUser)
        const cacheEntries = await prisma.dexscreenerCacheNew.findMany({
            where: {
                contractAddress: contractAddress
            },
            select: {
                priceUsd: true,
                marketCap: true,
                updatedAt: true,
                historicalData: true
            },
            orderBy: {
                updatedAt: 'desc'
            },
            take: 1, // Get the most recent one
        });

        if (cacheEntries.length > 0) {
            const entry = cacheEntries[0];

            // Try to get from historicalData first (most recent entry)
            if (entry.historicalData && entry.historicalData.length > 0) {
                const latestHist = entry.historicalData[entry.historicalData.length - 1];
                return {
                    priceUsd: latestHist.priceUsd ?? entry.priceUsd,
                    marketCap: latestHist.marketCap ?? entry.marketCap,
                    timestamp: latestHist.timestamp ?? entry.updatedAt ?? new Date()
                };
            }

            // Fallback to direct fields
            if (entry.priceUsd !== null || entry.marketCap !== null) {
                return {
                    priceUsd: entry.priceUsd,
                    marketCap: entry.marketCap,
                    timestamp: entry.updatedAt ?? new Date()
                };
            }
        }

        return null;
    } catch (error) {
        console.error(`  ⚠️  Error fetching from dexscreener_cache_new for ${contractAddress}:`, error);
        return null;
    }
}

// Function to fetch and store missing contract data
async function fetchAndStoreMissingContract(contractAddress: string): Promise<{ priceUsd: number | null; marketCap: number | null; timestamp: Date } | null> {
    try {
        const dexData = await fetchDexData(contractAddress);

        if (dexData && (dexData.priceUsd !== null || dexData.marketCap !== null)) {
            const timestamp = new Date();
            const newDataPoint = {
                priceUsd: dexData.priceUsd,
                marketCap: dexData.marketCap,
                timestamp: timestamp
            };

            // Fetch existing record or create new one
            const existing = await prisma.dexLatestData.findFirst({
                where: {
                    contractAddress: contractAddress
                },
                select: {
                    id: true,
                    contractAddress: true,
                    historicalData: true
                }
            });

            if (existing) { // Append to existing array
                const updatedHistoricalData = [
                    ...(existing.historicalData || []),
                    newDataPoint
                ];
                await prisma.dexLatestData.update({
                    where: {
                        id: existing.id
                    },
                    data: {
                        historicalData: updatedHistoricalData,
                        updatedAt: timestamp
                    }
                });
            } else { // Create new record with first data point
                await prisma.dexLatestData.create({
                    data: {
                        contractAddress: contractAddress,
                        historicalData: [newDataPoint]
                    }
                });
            }

            return newDataPoint;
        }
        return null;
    } catch (error) {
        console.error(`  ❌ Error storing dex data for ${contractAddress}:`, error);
        return null;
    }
}

interface ContractPerformance {
    contractAddress: string;
    tokenName: string | null;
    tokenSymbol: string | null;
    tokenImage: string | null;
    chain: string | null;
    initialPrice: number | null;
    initialMarketCap: number | null;
    currentPrice: number | null;
    currentMarketCap: number | null;
    priceChange: number | null;
    marketCapChange: number | null;
    multiplierX: number | null;
    callCount: number;
    firstCallDateTime: Date | null;
    lastCallDateTime: Date | null;
    performance: "positive" | "negative" | "neutral" | null;
}

interface GroupData {
    groupName: string;
    username: string | null;
    groupUserCount: number;
    messages: Array < {
        ContractAddress: string | null;
        MessageDateTime: Date;
        DexscreenerData: any[];
        CallCount: number | null;
    } >;
}

async function processGroupAnalytics() {
    try {
        console.log("🚀 Starting group analytics processing...");

        // Get MongoDB database instance
        const db = await getDb();
        const collection = db.collection("telegram_influencer_data");

        // Get all unique group+username combinations
        const groupUserCombinations = await collection.aggregate([
            {
                $match: {
                    "Group Name": {
                        $exists: true,
                        $ne: null,
                        $type: "string"
                    }
                }
            }, {
                $group: {
                    _id: {
                        groupName: "$Group Name",
                        username: "$Username"
                    },
                    groupUserCount: {
                        $max: "$Group User Count"
                    }
                }
            },
        ]).toArray();

        console.log(`📈 Found ${
            groupUserCombinations.length
        } unique groups...`);

        // Get all unique contract addresses across all groups using aggregation
        const allUniqueContractsResult = await collection.aggregate([
            {
                $match: {
                    "Contract Address": {
                        $exists: true,
                        $ne: null
                    }
                }
            }, {
                $group: {
                    _id: "$Contract Address"
                }
            }, {
                $match: {
                    _id: {
                        $ne: null
                    }
                }
            }, {
                $project: {
                    _id: 0,
                    contractAddress: "$_id"
                }
            },
        ]).toArray();

        const allContractAddresses = allUniqueContractsResult.map((r) => r.contractAddress);

        // Fetch latest dex data for all contracts
        const latestDexData = await prisma.dexLatestData.findMany({
            where: {
                contractAddress: {
                    in: allContractAddresses
                }
            },
            select: {
                contractAddress: true,
                historicalData: true
            }
        });

        const latestDataMap = new Map(latestDexData.map((ld) => {
            const hist = ld.historicalData || [];
            const last = hist.length > 0 ? hist[hist.length - 1] : null;
            return [ld.contractAddress, last];
        }));

        // Process each group
        let processedCount = 0;
        for (const groupUser of groupUserCombinations) {
            processedCount++;
            const groupName = groupUser._id.groupName;
            const username = groupUser._id.username;
            const groupUserCount = groupUser.groupUserCount || 0;

            console.log(`\n[${processedCount}/${
                groupUserCombinations.length
            }] Processing: ${groupName} - ${
                username || 'N/A'
            }`);

            // Use aggregation pipeline to get unique contract addresses for this group
            const uniqueContractsResult = await collection.aggregate([
                {
                    $match: {
                        "Group Name": groupName,
                        Username: username,
                        "Contract Address": {
                            $exists: true,
                            $ne: null
                        }
                    }
                }, {
                    $group: {
                        _id: "$Contract Address"
                    }
                }, {
                    $match: {
                        _id: {
                            $ne: null
                        }
                    }
                }, {
                    $project: {
                        _id: 0,
                        ContractAddress: "$_id"
                    }
                },
            ]).toArray();

            const uniqueContractAddresses = uniqueContractsResult.map((r) => r.ContractAddress);

            if (uniqueContractAddresses.length === 0) {
                console.log(`  ⚠️  No contracts found for this group`);
                continue;
            }

            console.log(`  📋 Found ${
                uniqueContractAddresses.length
            } unique contract addresses from MongoDB`);

            // Check which contracts are missing from latestDataMap
            const missingContracts = uniqueContractAddresses.filter((addr) => ! latestDataMap.has(addr));

            if (missingContracts.length > 0) {
                console.log(`  🔍 Processing ${
                    missingContracts.length
                } missing contracts...`);

                // Step 1: Try to get from dexscreener_cache_new first
                console.log(`  📦 Step 1: Checking dexscreener_cache_new for ${
                    missingContracts.length
                } contracts...`);
                let fromCacheCount = 0;
                const stillMissing: string[] = [];

                for (const contractAddress of missingContracts) {
                    const cacheData = await getFromDexscreenerCache(contractAddress);

                    if (cacheData) { // Found in cache, add to latestDataMap
                        latestDataMap.set(contractAddress, {
                            priceUsd: cacheData.priceUsd,
                            marketCap: cacheData.marketCap,
                            timestamp: cacheData.timestamp
                        });
                        fromCacheCount++;
                    } else { // Not in cache, need to fetch from live API
                        stillMissing.push(contractAddress);
                    }
                }

                console.log(`  ✅ Found ${fromCacheCount} contracts in dexscreener_cache_new, ${
                    stillMissing.length
                } need live API fetch`);

                // Step 2: Fetch remaining contracts from live Dex API
                if (stillMissing.length > 0) {
                    console.log(`  🌐 Step 2: Fetching ${
                        stillMissing.length
                    } contracts from live Dex API...`);

                    // Fetch missing contracts with rate limiting (250 requests/minute = ~240ms delay)
                    const delayBetweenRequests = 240;
                    let fetchedCount = 0;
                    let failedCount = 0;

                    for (let i = 0; i < stillMissing.length; i++) {
                        const contractAddress = stillMissing[i];

                        // Log progress every 10 contracts
                        if (i % 10 === 0 && i > 0) {
                            console.log(`    Progress: ${i}/${
                                stillMissing.length
                            } contracts fetched (${fetchedCount} success, ${failedCount} failed)`);
                        }

                        const fetchedData = await fetchAndStoreMissingContract(contractAddress);

                        if (fetchedData) { // Add to latestDataMap so we can use it immediately
                            latestDataMap.set(contractAddress, {
                                priceUsd: fetchedData.priceUsd,
                                marketCap: fetchedData.marketCap,
                                timestamp: fetchedData.timestamp
                            });
                            fetchedCount++;
                        } else {
                            failedCount++;
                        }

                        // Rate limiting: delay between requests (except for the last one)
                        if (i < stillMissing.length - 1) {
                            await new Promise((resolve) => setTimeout(resolve, delayBetweenRequests));
                        }
                    }

                    console.log(`  ✅ Fetched ${fetchedCount} contracts from live API, ${failedCount} failed`);
                }
            }

            // Fetch all messages for this group with these contracts
            const groupMessages = await prisma.groupUserCountsWebhookTest.findMany({
                where: {
                    GroupName: groupName,
                    Username: username,
                    ContractAddress: {
                        in: uniqueContractAddresses
                    }
                },
                select: {
                    ContractAddress: true,
                    MessageDateTime: true,
                    DexscreenerData: {
                        select: {
                            marketCap: true,
                            priceUsd: true,
                            chainId: true,
                            baseToken: {
                                select: {
                                    name: true,
                                    symbol: true
                                }
                            },
                            info: {
                                select: {
                                    imageUrl: true
                                }
                            }
                        }
                    },
                    CallCount: true
                },
                orderBy: {
                    MessageDateTime: 'asc'
                }
            });

            // Get unique contracts for this group
            const contractMap = new Map<string, ContractPerformance>();
            const callPerformances: number[] = [];
            const priceChanges: number[] = [];
            const marketCapChanges: number[] = [];
            let totalCalls = 0;
            let bestCall: any = null;
            let lastCall: any = null;
            let lastMessageDateTime: Date |null = null;

            for (const msg of groupMessages) {
                if (! msg.ContractAddress || msg.ContractAddress.trim().length === 0) {
                    continue;
                }

                const contractAddress = msg.ContractAddress.trim();
                let latestPoint = latestDataMap.get(contractAddress);

                // If still no latest data after fetching, skip this contract
                // (This can happen if the API call failed or contract doesn't exist on Dex)
                if (! latestPoint) {
                    continue;
                }

                // Get first Dex entry (when the call was made)
                const firstDex = msg.DexscreenerData ?. [0];
                if (! firstDex) {
                    continue;
                }

                const initialMarketCap = firstDex.marketCap != null ? Number(firstDex.marketCap) : null;
                const initialPrice = firstDex.priceUsd != null ? Number(firstDex.priceUsd) : null;
                const currentMarketCap = latestPoint.marketCap != null ? Number(latestPoint.marketCap) : null;
                const currentPrice = latestPoint.priceUsd != null ? Number(latestPoint.priceUsd) : null;

                let priceChange: number |null = null;
                let marketCapChange: number |null = null;
                let multiplierX: number |null = null;

                if (initialPrice && currentPrice) {
                    priceChange = ((currentPrice - initialPrice) / initialPrice) * 100;
                }

                if (initialMarketCap && currentMarketCap) {
                    marketCapChange = ((currentMarketCap - initialMarketCap) / initialMarketCap) * 100;
                    multiplierX = marketCapChange > -100 ? marketCapChange / 100 + 1 : 0;
                }

                // Determine performance
                let performance: "positive" | "negative" | "neutral" |null = null;
                if (marketCapChange !== null) {
                    if (marketCapChange > 0) {
                        performance = "positive";
                    } else if (marketCapChange < 0) {
                        performance = "negative";
                    } else {
                        performance = "neutral";
                    }
                }

                // Update or create contract performance
                if (! contractMap.has(contractAddress)) {
                    contractMap.set(contractAddress, {
                        contractAddress,
                        tokenName: firstDex.baseToken ?. name ?? null,
                        tokenSymbol: firstDex.baseToken ?. symbol ?? null,
                        tokenImage: firstDex.info ?. imageUrl ?? null,
                        chain: firstDex.chainId ?? null,
                        initialPrice,
                        initialMarketCap,
                        currentPrice,
                        currentMarketCap,
                        priceChange,
                        marketCapChange,
                        multiplierX,
                        callCount: 0,
                        firstCallDateTime: msg.MessageDateTime,
                        lastCallDateTime: msg.MessageDateTime,
                        performance
                    });
                }

                const contractPerf = contractMap.get(contractAddress)!;
                contractPerf.callCount += msg.CallCount || 1;
                totalCalls += msg.CallCount || 1;

                // Update first/last call dates
                if (! contractPerf.firstCallDateTime || msg.MessageDateTime<contractPerf.firstCallDateTime
        ) {
          contractPerf.firstCallDateTime = msg.MessageDateTime;
        }
        if (
          !contractPerf.lastCallDateTime ||
          msg.MessageDateTime>contractPerf.lastCallDateTime) {
                    contractPerf.lastCallDateTime = msg.MessageDateTime;
                }

                // Track for averages
                if (multiplierX !== null) {
                    callPerformances.push(multiplierX);
                }
                if (priceChange !== null) {
                    priceChanges.push(priceChange);
                }
                if (marketCapChange !== null) {
                    marketCapChanges.push(marketCapChange);
                }

                // Track best call
                if (multiplierX !== null && (! bestCall || multiplierX > bestCall.multiplierX)) {
                    bestCall = {
                        contractAddress,
                        tokenName: firstDex.baseToken ?. name ?? null,
                        tokenSymbol: firstDex.baseToken ?. symbol ?? null,
                        tokenImage: firstDex.info ?. imageUrl ?? null,
                        chain: firstDex.chainId ?? null,
                        priceChange,
                        marketCapChange,
                        multiplierX,
                        messageDateTime: msg.MessageDateTime
                    };
                }

                // Track last call
                if (! lastCall || msg.MessageDateTime > lastCall.messageDateTime) {
                    lastCall = {
                        contractAddress,
                        tokenName: firstDex.baseToken ?. name ?? null,
                        tokenSymbol: firstDex.baseToken ?. symbol ?? null,
                        tokenImage: firstDex.info ?. imageUrl ?? null,
                        chain: firstDex.chainId ?? null,
                        priceChange,
                        marketCapChange,
                        multiplierX,
                        messageDateTime: msg.MessageDateTime
                    };
                }

                // Track last message datetime
                if (! lastMessageDateTime || msg.MessageDateTime > lastMessageDateTime) {
                    lastMessageDateTime = msg.MessageDateTime;
                }
            }

            // Calculate group performance metrics
            const contracts = Array.from(contractMap.values());
            const positiveCalls = contracts.filter((c) => c.performance === "positive").length;
            const negativeCalls = contracts.filter((c) => c.performance === "negative").length;
            const successRate = contracts.length > 0 ? (positiveCalls / contracts.length) * 100 : 0;

            const avgPriceChange = priceChanges.length > 0 ? priceChanges.reduce((a, b) => a + b, 0) / priceChanges.length : null;
            const avgMarketCapChange = marketCapChanges.length > 0 ? marketCapChanges.reduce((a, b) => a + b, 0) / marketCapChanges.length : null;
            const avgMultiplierX = callPerformances.length > 0 ? callPerformances.reduce((a, b) => a + b, 0) / callPerformances.length : null;

            // Prepare data for database
            const analyticsData = {
                groupName: groupName,
                username: username,
                groupUserCount: groupUserCount,
                totalCalls,
                totalUniqueContracts: contracts.length,
                positiveCalls,
                negativeCalls,
                successRate: successRate > 0 ? parseFloat(successRate.toFixed(2)) : null,
                avgPriceChange: avgPriceChange !== null ? parseFloat(avgPriceChange.toFixed(2)) : null,
                avgMarketCapChange: avgMarketCapChange !== null ? parseFloat(avgMarketCapChange.toFixed(2)) : null,
                avgMultiplierX: avgMultiplierX !== null ? parseFloat(avgMultiplierX.toFixed(2)) : null,
                bestCall: bestCall ? {
                    contractAddress: bestCall.contractAddress,
                    tokenName: bestCall.tokenName,
                    tokenSymbol: bestCall.tokenSymbol,
                    tokenImage: bestCall.tokenImage,
                    chain: bestCall.chain,
                    priceChange: bestCall.priceChange ? parseFloat(bestCall.priceChange.toFixed(2)) : null,
                    marketCapChange: bestCall.marketCapChange ? parseFloat(bestCall.marketCapChange.toFixed(2)) : null,
                    multiplierX: bestCall.multiplierX ? parseFloat(bestCall.multiplierX.toFixed(2)) : null,
                    messageDateTime: bestCall.messageDateTime
                } : null,
                lastCall: lastCall ? {
                    contractAddress: lastCall.contractAddress,
                    tokenName: lastCall.tokenName,
                    tokenSymbol: lastCall.tokenSymbol,
                    tokenImage: lastCall.tokenImage,
                    chain: lastCall.chain,
                    priceChange: lastCall.priceChange ? parseFloat(lastCall.priceChange.toFixed(2)) : null,
                    marketCapChange: lastCall.marketCapChange ? parseFloat(lastCall.marketCapChange.toFixed(2)) : null,
                    multiplierX: lastCall.multiplierX ? parseFloat(lastCall.multiplierX.toFixed(2)) : null,
                    messageDateTime: lastCall.messageDateTime
                } : null,
                contracts: contracts.map((c) => ({
                    contractAddress: c.contractAddress,
                    tokenName: c.tokenName,
                    tokenSymbol: c.tokenSymbol,
                    tokenImage: c.tokenImage,
                    chain: c.chain,
                    initialPrice: c.initialPrice,
                    initialMarketCap: c.initialMarketCap,
                    currentPrice: c.currentPrice,
                    currentMarketCap: c.currentMarketCap,
                    priceChange: c.priceChange ? parseFloat(c.priceChange.toFixed(2)) : null,
                    marketCapChange: c.marketCapChange ? parseFloat(c.marketCapChange.toFixed(2)) : null,
                    multiplierX: c.multiplierX ? parseFloat(c.multiplierX.toFixed(2)) : null,
                    callCount: c.callCount,
                    firstCallDateTime: c.firstCallDateTime,
                    lastCallDateTime: c.lastCallDateTime,
                    performance: c.performance
                })),
                lastMessageDateTime
            };

            // Upsert the analytics data (find first, then update or create)
            // Use GroupAnalyticsDetailed which matches the analyticsData structure
            const existing = await prisma.groupAnalyticsDetailed.findFirst({
                where: {
                    groupName: groupName,
                    username: username
                }
            });

            if (existing) {
                await prisma.groupAnalyticsDetailed.update({
                    where: {
                        id: existing.id
                    },
                    data: analyticsData
                });
            } else {
                await prisma.groupAnalyticsDetailed.create({data: analyticsData});
            }

            console.log(`  ✅ Processed: ${
                contracts.length
            } contracts, ${positiveCalls} positive, ${negativeCalls} negative, ${
                successRate.toFixed(1)
            }% success rate`);
        }

        console.log(`\n🎉 Successfully processed ${processedCount} groups!`);
    } catch (error) {
        console.error("❌ Error processing group analytics:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Run the script if executed directly
processGroupAnalytics().then(() => {
    console.log("✅ Script completed successfully");
    process.exit(0);
}).catch((error) => {
    console.error("❌ Script failed:", error);
    process.exit(1);
});

export default processGroupAnalytics;
