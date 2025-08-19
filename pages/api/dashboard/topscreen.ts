import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
      }

    try {
        const totalCallsAgg = await prisma.groupUserCountsWebhookTest.aggregate({
      _sum: {
        CallCount: true,
      },
    });
    const totalCalls = totalCallsAgg._sum.CallCount || 0;

    const uniqueGroups = await prisma.groupUserCountsWebhookTest.findMany({
      distinct: ["GroupName"],
      select: { GroupName: true },
    });

    const uniqueContracts = await prisma.groupUserCountsWebhookTest.findMany({
      distinct: ["ContractAddress"],
      select: { ContractAddress: true },
    });

    const totalMessages = await prisma.groupUserCountsWebhookTest.count();

    console.log('totalCalls', totalCalls);
    console.log('uniqueGroups', uniqueGroups);
    console.log('totalMessages', totalMessages);
    console.log('uniqueContracts', uniqueContracts);
    return res.status(200).json({
      totalCalls,
      totalUniqueContracts: uniqueContracts.length,
      totalMessages,
      totalUniqueGroups: uniqueGroups.length,
    });
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);
