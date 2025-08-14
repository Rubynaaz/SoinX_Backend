import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { username } = req.query;
    if (!username || typeof username !== "string") {
        return res.status(400).json({ message: "username query parameter is required" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("telegram_tokens");

        const messages = await db.collection("group_user_counts_webhook_test").aggregate([
            { $match: { "Username": username } },
            {
                $lookup: {
                    from: "dexscreener_cache_new",
                    localField: "Contract Address",
                    foreignField: "contract_address",
                    as: "cachedDex"
                }
            },
            { $match: { "cachedDex.0": { $exists: true } } },
            {
                $project: {
                    _id: 0,
                    contract: "$Contract Address",
                    message: "$Full Message",
                    messageDateTime: "$Message DateTime",
                    priceUsd: { $arrayElemAt: ["$Dexscreener Data.priceUsd", 0] },
                    dbMarketcap: { $arrayElemAt: ["$Dexscreener Data.marketCap", 0] },
                    chain: { $arrayElemAt: ["$Dexscreener Data.chainId", 0] },
                    cachedMarketcap: { $arrayElemAt: ["$cachedDex.marketCap", 0] },
                    tokenName: { $arrayElemAt: ["$Dexscreener Data.baseToken.name", 0] },
                    tokenSymbol: { $arrayElemAt: ["$Dexscreener Data.baseToken.symbol", 0] },
                    tokenImage: { $arrayElemAt: ["$Dexscreener Data.info.imageUrl", 0] }
                }
            }
        ]).toArray();

        const groupedByContract: any = {};
        const callPerformances: number[] = [];
        const marketCaps: number[] = [];
        let totalCallsTracked = 0;
        const contractAddresses = new Set<string>();
        let bestCall = { tokenName: "", tokenSymbol: "", multiplier: 0 };
        let lastCall: any = null;

        messages.forEach(msg => {
            if (!groupedByContract[msg.contract]) {
                const marketcapChangePercent = msg.cachedMarketcap
                    ? ((msg.dbMarketcap - msg.cachedMarketcap) / msg.cachedMarketcap) * 100
                    : 0;

                let multiplierX = 1.0;
                if (marketcapChangePercent > -100) {
                    multiplierX = (marketcapChangePercent / 100) + 1;
                }

                groupedByContract[msg.contract] = {
                    contract: msg.contract,
                    tokenName: msg.tokenName,
                    tokenSymbol: msg.tokenSymbol,
                    tokenImage: msg.tokenImage,
                    chain: msg.chain,
                    cachedMarketcap: msg.cachedMarketcap,
                    dbMarketcap: msg.dbMarketcap,
                    marketcapChangePercent,
                    multiplierX,
                    messages: []
                };
            }

            groupedByContract[msg.contract].messages.push({
                message: msg.message,
                messageDateTime: msg.messageDateTime
            });

            // Analytics tracking
            callPerformances.push(groupedByContract[msg.contract].multiplierX);
            if (msg.cachedMarketcap) marketCaps.push(msg.cachedMarketcap);
            totalCallsTracked++;
            contractAddresses.add(msg.contract);

            // Track best call
            if (groupedByContract[msg.contract].multiplierX > bestCall.multiplier) {
                bestCall = {
                    tokenName: msg.tokenName,
                    tokenSymbol: msg.tokenSymbol,
                    multiplier: groupedByContract[msg.contract].multiplierX
                };
            }

            // Track last call
            const msgDate = new Date(msg.messageDateTime);
            if (!lastCall || msgDate > new Date(lastCall.datetime)) {
                lastCall = {
                    tokenName: msg.tokenName,
                    tokenSymbol: msg.tokenSymbol,
                    multiplier: groupedByContract[msg.contract].multiplierX,
                    datetime: msgDate
                };
            }
        });

        // Calculate analytics
        const alphaCalls = callPerformances.filter(x => x >= 2).length;
        const profitableCalls = callPerformances.filter(x => x > 0.3).length;
        const consistencyPercentage = totalCallsTracked
            ? (profitableCalls / totalCallsTracked) * 100
            : 0;
        const avgXPerCall = callPerformances.length
            ? callPerformances.reduce((a, b) => a + b, 0) / callPerformances.length
            : 1;
        const avgMarketCap = marketCaps.length
            ? marketCaps.reduce((a, b) => a + b, 0) / marketCaps.length
            : 0;

        return res.status(200).json({
            username,
            messages: groupedByContract,
            analytics: {
                total_calls_tracked: totalCallsTracked,
                total_unique_contracts: contractAddresses.size,
                consistency_percentage: Math.round(consistencyPercentage * 10) / 10,
                number_of_alpha_calls: alphaCalls,
                best_call: { ...bestCall, multiplier: Math.round(bestCall.multiplier * 10) / 10 },
                last_call: lastCall
                    ? { ...lastCall, multiplier: Math.round(lastCall.multiplier * 10) / 10 }
                    : null,
                average_call_marketcap: Math.round(avgMarketCap * 100) / 100,
                average_x_per_call: Math.round(avgXPerCall * 10) / 10
            }
        });

    } catch (error) {
        console.error("Error fetching group data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
