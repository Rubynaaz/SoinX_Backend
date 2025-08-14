import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const sortBy = (req.query.sort_by as string) || "avg_change";
    const order = req.query.order === "asc" ? 1 : -1;

    try {
        const client = await clientPromise;
        const db = client.db("telegram_tokens");

        const pipeline = [
            {
                $match: {
                    "Group Name": { $exists: true, $nin: [null, ""] },
                    "Contract Address": { $exists: true, $nin: [null, ""] }
                }
            },
            {
                $group: {
                    _id: { username: "$Username", group_name: "$Group Name" },
                    group_user_count: { $first: "$Group User Count" },
                    total_calls: { $sum: 1 },
                    unique_contracts: { $addToSet: "$Contract Address" },
                    latest_message: { $max: "$Message DateTime" },
                    contracts: { $push: { contract: "$Contract Address", dex_data: "$Dexscreener Data" } }
                }
            },
            { $unwind: { path: "$contracts", preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: "dexscreener_cache_new",
                    localField: "contracts.contract",
                    foreignField: "contract_address",
                    as: "cache_doc"
                }
            },
            { $unwind: { path: "$cache_doc", preserveNullAndEmptyArrays: true } },
            {
                $addFields: {
                    historical_price: { $toDouble: { $arrayElemAt: ["$contracts.dex_data.priceUsd", 0] } },
                    historical_marketCap: { $toDouble: { $arrayElemAt: ["$contracts.dex_data.marketCap", 0] } },
                    cached_price: { $toDouble: "$cache_doc.priceUsd" },
                    cached_marketCap: { $toDouble: "$cache_doc.marketCap" }
                }
            },
            {
                $addFields: {
                    change_percent: {
                        $cond: [
                            { $gt: ["$historical_marketCap", 0] },
                            { $multiply: [{ $divide: [{ $subtract: ["$historical_marketCap", "$cached_marketCap"] }, "$cached_marketCap"] }, 100] },
                            {
                                $cond: [
                                    { $gt: ["$historical_price", 0] },
                                    { $multiply: [{ $divide: [{ $subtract: ["$historical_price", "$cached_price"] }, "$cached_price"] }, 100] },
                                    0
                                ]
                            }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: "$_id",
                    username: { $first: "$_id.username" },
                    group_name: { $first: "$_id.group_name" },
                    group_user_count: { $first: "$group_user_count" },
                    total_calls: { $first: "$total_calls" },
                    unique_contracts: { $first: { $size: "$unique_contracts" } },
                    latest_message: { $first: "$latest_message" },
                    avg_change: { $avg: "$change_percent" },
                    contracts: {
                        $push: {
                            contract: "$contracts.contract",
                            change_percent: "$change_percent",
                            cache_doc: "$cache_doc"
                        }
                    },
                    max_change: { $max: "$change_percent" }
                }
            },
            {
                $addFields: {
                    top_performer: {
                        $arrayElemAt: [
                            {
                                $filter: {
                                    input: "$contracts",
                                    as: "c",
                                    cond: { $eq: ["$$c.change_percent", "$max_change"] }
                                }
                            },
                            0
                        ]
                    }
                }
            },
            { $project: { contracts: 0, max_change: 0 } }
        ];

        const allGroups = await db.collection("group_user_counts_webhook_test").aggregate(pipeline).toArray();

        // Sort in JS (small dataset after aggregation, fast)
        allGroups.sort((a, b) => {
            let cmp = 0;
            switch (sortBy) {
                case "group_user_count": cmp = a.group_user_count - b.group_user_count; break;
                case "total_calls": cmp = a.total_calls - b.total_calls; break;
                case "unique_contracts": cmp = a.unique_contracts - b.unique_contracts; break;
                case "avg_change": cmp = a.avg_change - b.avg_change; break;
                case "latest_message": cmp = new Date(a.latest_message).getTime() - new Date(b.latest_message).getTime(); break;
            }
            return order === 1 ? cmp : -cmp;
        });

        const totalGroups = allGroups.length;
        const start = (page - 1) * limit;
        const pagedGroups = allGroups.slice(start, start + limit);

        return res.status(200).json({
            data: pagedGroups,
            pagination: { page, limit, total: totalGroups, total_pages: Math.ceil(totalGroups / limit) },
            sort_options: ["group_user_count", "total_calls", "unique_contracts", "avg_change", "latest_message"]
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
