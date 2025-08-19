import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { contractId } = req.query;

  if (!contractId || typeof contractId !== "string") {
    return res.status(400).json({ message: "contractId query parameter is required" });
  }

  try {
    // Fetch group messages and Dexscreener cache in parallel
    const [groups, cachedDex] = await Promise.all([
      prisma.groupUserCountsWebhookTest.findMany({
        where: { ContractAddress: contractId },
        include: { DexscreenerData: true },
        orderBy: { MessageDateTime: "desc" }
      }),
      prisma.dexscreenerCacheNew.findUnique({
        where: { contractAddress: contractId }
      })
    ]);

    if (!groups.length || !cachedDex) {
      return res.status(404).json({ message: "Contract not found" });
    }

    // Map group messages with marketcap change
    const groupsWithChange = groups
      .map(group => {
        const firstDex = group.DexscreenerData[0];

        const dbMarketcap = firstDex?.marketCap || 0;
        const cachedMarketcap = cachedDex.marketCap || 0;

        if (!dbMarketcap || !cachedMarketcap) return null;

        const marketcapChange = ((cachedMarketcap - dbMarketcap) / dbMarketcap) * 100;
        const xmultiply = marketcapChange / 100 + 1;

        return {
          groupname: group.GroupName,
          message_link: group.MessageLink,
          call_count: group.CallCount,
          full_message: group.FullMessage,
          message_datetime: group.MessageDateTime,
          username: group.Username,
          groupmember: group.GroupUserCount,
          marketcapChange: parseFloat(marketcapChange.toFixed(2)),
          xmultiply: parseFloat(xmultiply.toFixed(2))
        };
      })
      .filter((g): g is NonNullable<typeof g> => g != null); // Remove null entries

    // Calculate average marketcap change
    const avgMarketcapChange =
      groupsWithChange.reduce((sum, g) => sum + g.marketcapChange, 0) / groupsWithChange.length;

    // Return final response
    return res.status(200).json({
      coin: {
        contract_address: contractId,
        symbol: groups[0].DexscreenerData[0]?.baseToken?.symbol,
        name: groups[0].DexscreenerData[0]?.baseToken?.name,
        chain: groups[0].DexscreenerData[0]?.chainId,
        priceUsd: groups[0].DexscreenerData[0]?.priceUsd,
        marketcap: groups[0].DexscreenerData[0]?.marketCap,
        cachedMarketcap: cachedDex.marketCap,
        dexUrl: groups[0].DexscreenerData[0]?.url,
        tokenImage: cachedDex.info?.imageurl,
        tokenBackgroundImage: groups[0].DexscreenerData[0]?.info?.header
      },
      messages: groupsWithChange,
      averageMarketcapChange: parseFloat(avgMarketcapChange.toFixed(2))
    });
  } catch (error) {
    console.error("Error fetching contract:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default allowCors(handler);
