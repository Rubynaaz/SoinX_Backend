import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {

        const mostCalledContractAddress = await prisma.groupUserCountsWebhookTest.groupBy({
            by: ["GroupName", "ContractAddress"],
            _sum: { CallCount: true },
            orderBy: { _sum: { CallCount: "desc" } },
            take: 5,
            where: {
                ContractAddress: { not: null },
                // GroupName: { not: null },
            },
        });

        const formattedContractAddress = mostCalledContractAddress
            .filter((c) => c.ContractAddress !== null && c.GroupName !== null) // remove nulls
            .map((c) => ({
                groupName: c.GroupName,
                contractAddress: c.ContractAddress,
                callCount: c._sum.CallCount || 0,
            }));


        return res.status(200).json({
            mostCalledGroup: formattedContractAddress || null,
        });
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);
