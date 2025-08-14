import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const {
        page = "1",
        limit = "10",
        sortBy = "Message DateTime",
        order = "desc",
        filterChain,
        minGroups
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const sortOrder = order === "asc" ? 1 : -1;
    const minGroupsNum = minGroups ? parseInt(minGroups as string, 10) : 0;

    try {
        const client = await clientPromise;
        const db = client.db("telegram_tokens");

        const pipeline = [
            { $sort: { "Message DateTime": -1 } }, // latest first
            {
                $group: {
                    _id: "$Contract Address",
                    firstMessageDateTime: { $first: "$Message DateTime" },
                    firstGroupName: { $first: "$Group Name" },
                    firstDex: { $first: "$Dexscreener Data" },
                    groupNames: { $addToSet: "$Group Name" }
                }
            },
            {
                $lookup: {
                    from: "dexscreener_cache_new",
                    localField: "_id",
                    foreignField: "contract_address",
                    as: "cachedDex"
                }
            },
            { $match: { cachedDex: { $ne: [] } } },
            {
                $project: {
                    _id: 0,
                    "Contract Address": "$_id",
                    "Group Name": "$firstGroupName",
                    "Message DateTime": "$firstMessageDateTime",
                    groupNames: 1,
                    totalGroups: { $size: "$groupNames" },
                    chain: { $arrayElemAt: ["$firstDex.chainId", 0] },
                    tokenName: { $arrayElemAt: ["$firstDex.baseToken.name", 0] },
                    tokenSymbol: { $arrayElemAt: ["$firstDex.baseToken.symbol", 0] },
                    tokenImage: { $arrayElemAt: ["$firstDex.info.imageUrl", 0] },
                    dbMarketcap: { $arrayElemAt: ["$firstDex.marketCap", 0] },
                    priceUsd: { $arrayElemAt: ["$firstDex.priceUsd", 0] },
                    cachedMarketcap: { $arrayElemAt: ["$cachedDex.marketCap", 0] }
                }
            }
        ];

        let contracts = await db.collection("group_user_counts_webhook_test")
            .aggregate(pipeline)
            .toArray();

        // Calculate marketcap change
        contracts = contracts.map(item => {
            const dbCap = Number(item.dbMarketcap) || 0;
            const cachedCap = Number(item.cachedMarketcap) || 0;
            const marketcapChange = cachedCap
                ? ((cachedCap - dbCap) / dbCap) * 100
                : 0;

            return { ...item, marketcapChange: parseFloat(marketcapChange.toFixed(2)) };
        });

        // Apply filtering
        contracts = contracts.filter(item => {
            if (filterChain && item.chain != filterChain) return false;
            if (item.totalGroups < minGroupsNum) return false;
            return true;
        });

        // Sort in code
        contracts.sort((a, b) => {
            const fieldA = a[sortBy as string];
            const fieldB = b[sortBy as string];
            if (fieldA < fieldB) return sortOrder * -1;
            if (fieldA > fieldB) return sortOrder * 1;
            return 0;
        });

        // Pagination
        const totalContracts = contracts.length;
        const paginatedContracts = contracts.slice((pageNum - 1) * limitNum, pageNum * limitNum);

        return res.status(200).json({
            page: pageNum,
            limit: limitNum,
            totalContracts,
            totalPages: Math.ceil(totalContracts / limitNum),
            contracts: paginatedContracts
        });

    } catch (error) {
        console.error("Error fetching contracts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
