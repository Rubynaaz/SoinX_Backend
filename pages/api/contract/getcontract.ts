import clientPromise from "@/lib/mongodb";
import { group } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { contractId } = req.query;

    console.log('contractId', contractId)

    if (!contractId || typeof contractId !== "string") {
        return res.status(400).json({ message: "contractId query parameter is required" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("telegram_tokens");

        const [contract, cashContract] = await Promise.all([
            db.collection("group_user_counts_webhook_test").aggregate([
                { $match: { "Contract Address": contractId } },
                {
                    $project: {
                        _id: 0,
                        "Contract Address": 1,
                        "Group Name": 1,
                        "Message Link": 1,
                        "Call Count": 1,
                        "Full Message": 1,
                        "Message DateTime": 1,
                        "Username": 1,

                        firstDex: { $arrayElemAt: ["$Dexscreener Data", 0] }
                    }
                },
                {
                    $project: {
                        "Contract Address": 1,
                        "Group Name": 1,
                        "Message Link": 1,
                        "Call Count": 1,
                        "Full Message": 1,
                        "Message DateTime": 1,
                        "Username": 1,
                        "Chain": "$firstDex.chainId",
                        priceUsd: "$firstDex.priceUsd",
                        marketcap: "$firstDex.marketCap",
                        symbol: "$firstDex.baseToken.symbol",
                        name: "$firstDex.baseToken.name",
                        dexUrl: "$firstDex.url",
                        tokenImage: "$firstDex.info.imageUrl",
                        tokenBackgroundImage: "$firstDex.info.header"
                    }
                },
                { $sort: { "Message DateTime": -1 } }
            ])
                .toArray(),
            db.collection("dexscreener_cache_new").findOne({ contract_address: contractId })
        ]);
        if (!contract || !cashContract) {
            return res.status(404).json({ message: "Contract not found" });
        }

        console.log('contract', contract)
        console.log('cashContract', cashContract)

        const groupsWithChange = contract.map(group => {
            const change = ((cashContract.marketCap - group.marketcap) / group.marketcap) * 100;
            const xchange = (((cashContract.marketCap - group.marketcap) / group.marketcap) * 100) / 100 + 1;
            return { ...group, marketcapChange: change, xmultiply: xchange, cachedMarketcap: cashContract.marketCap, };
        })

        const avgMarketcapChange =
            groupsWithChange.reduce((sum, g) => sum + g.marketcapChange, 0) / groupsWithChange.length;

        const marketcapChange = (contract[0].marketcap - cashContract.marketCap) / cashContract.marketCap * 100

        console.log('marketcapChange', marketcapChange)
        console.log('avgMarketcapChange', avgMarketcapChange)
        console.log('groupsWithChange', groupsWithChange)


        //
        return res.status(200).json({
            groups: groupsWithChange,
            averageMarketcapChange: avgMarketcapChange
        });
    } catch (error) {
        console.error("Error fetching contract:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
