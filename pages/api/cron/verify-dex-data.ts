import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";
import prisma from "@/lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { contractAddress, limit = "10" } = req.query;
    const limitNum = parseInt(limit as string, 10);

    let whereClause: any = {};
    if (contractAddress && typeof contractAddress === "string") {
      whereClause.contractAddress = contractAddress;
    }

    // Get all contract data
    const allContracts = await prisma.dexLatestData.findMany({
      where: whereClause,
      orderBy: { updatedAt: "desc" },
      take: limitNum,
    });

    // Calculate statistics
    const totalContracts = await prisma.dexLatestData.count(whereClause);
    let totalDataPoints = 0;
    const contractsWithStats = allContracts.map((contract) => {
      const dataPoints = contract.historicalData?.length || 0;
      totalDataPoints += dataPoints;
      const latestDataPoint = contract.historicalData && contract.historicalData.length > 0
        ? contract.historicalData[contract.historicalData.length - 1]
        : null;
      const firstDataPoint = contract.historicalData && contract.historicalData.length > 0
        ? contract.historicalData[0]
        : null;

      return {
        contractAddress: contract.contractAddress,
        totalDataPoints: dataPoints,
        latestDataPoint,
        firstDataPoint,
        createdAt: contract.createdAt,
        updatedAt: contract.updatedAt,
        // Show last 5 data points as sample
        recentDataPoints: contract.historicalData?.slice(-5) || [],
      };
    });

    return res.status(200).json({
      success: true,
      totalContracts,
      totalDataPoints,
      contracts: contractsWithStats,
    });
  } catch (error) {
    console.error("Error fetching dex data:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export default allowCors(handler);

