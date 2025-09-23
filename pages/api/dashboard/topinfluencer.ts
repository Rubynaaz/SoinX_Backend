import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const mostCalledGroup = await prisma.groupUserCountsWebhookTest.groupBy({
      by: ["Username", "GroupName"],
      _sum: { CallCount: true },
      orderBy: { _sum: { CallCount: "desc" } },
      take: 5,
    });

    const formattedGroups = mostCalledGroup.map((g) => ({
      username: g.Username,
      groupName: g.GroupName,
      callCount: g._sum.CallCount || 0,
    }));


   return res.status(200).json({
  mostCalledGroup: formattedGroups || null,
});
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default allowCors(handler);
