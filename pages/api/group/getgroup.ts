import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username } = req.query;
  if (!username || typeof username !== "string") {
    return res.status(400).json({ message: "username query parameter is required" });
  }

  try {
    // Fetch all messages for the user including DexscreenerData
    const messages = await prisma.groupUserCountsWebhookTest.findMany({
      where: { Username: username },
      include: { DexscreenerData: true },
      orderBy: { MessageDateTime: "desc" }
    });

    if (!messages.length) {
      return res.status(404).json({ message: "No messages found for this user" });
    }

    const groupedByContract: Record<string, any> = {};
    const callPerformances: number[] = [];
    const marketCaps: number[] = [];
    let totalCallsTracked = 0;
    const contractAddresses = new Set<string>();
    let bestCall = { tokenName: "", tokenSymbol: "", multiplier: 0 };
    let lastCall: any = null;
    const groupname = messages[0].GroupName;

    // Fetch cached Dex data for all unique contracts in messages
    const uniqueContracts = Array.from(
  new Set(messages.map(m => m.ContractAddress).filter((c): c is string => !!c))
);
    const cachedDexes = await prisma.dexscreenerCacheNew.findMany({
      where: { contractAddress: { in: uniqueContracts } }
    });
    const cachedDexMap = new Map(cachedDexes.map(d => [d.contractAddress, d]));

    // Process each message
    messages.forEach(msg => {
      // Skip if contract address is null or undefined
      if (!msg.ContractAddress) return;
      
      const cachedDex = cachedDexMap.get(msg.ContractAddress);
      if (!cachedDex) return;

      // Pick the first Dex entry for this message (based on pairCreatedAt)
      const firstDex = msg.DexscreenerData
        ?.sort((a, b) => Number(b.pairCreatedAt || 0) - Number(a.pairCreatedAt || 0))[0];

      if (!firstDex || !firstDex.marketCap || !cachedDex.marketCap) return;

      const marketcapChangePercent = ((firstDex.marketCap - cachedDex.marketCap) / cachedDex.marketCap) * 100;
      let multiplierX = marketcapChangePercent > -100 ? marketcapChangePercent / 100 + 1 : 1;

      if (!groupedByContract[msg.ContractAddress]) {
        groupedByContract[msg.ContractAddress] = {
          contract: msg.ContractAddress,
          tokenName: firstDex.baseToken?.name,
          tokenSymbol: firstDex.baseToken?.symbol,
          tokenImage: firstDex.info?.imageUrl,
          chain: firstDex.chainId,
          cachedMarketcap: cachedDex.marketCap,
          dbMarketcap: firstDex.marketCap,
          marketcapChangePercent,
          multiplierX,
          messages: []
        };
      }

      groupedByContract[msg.ContractAddress].messages.push({
        message: msg.FullMessage,
        messageDateTime: msg.MessageDateTime,
        messageLink: msg.MessageLink
      });

      callPerformances.push(multiplierX);
      if (cachedDex.marketCap) marketCaps.push(cachedDex.marketCap);
      totalCallsTracked++;
      contractAddresses.add(msg.ContractAddress);

      if (multiplierX > bestCall.multiplier) {
        bestCall = {
          tokenName: firstDex.baseToken?.name || "",
          tokenSymbol: firstDex.baseToken?.symbol || "",
          multiplier: multiplierX
        };
      }

      const msgDate = new Date(msg.MessageDateTime);
      if (!lastCall || msgDate > new Date(lastCall.datetime)) {
        lastCall = {
          tokenName: firstDex.baseToken?.name,
          tokenSymbol: firstDex.baseToken?.symbol,
          multiplier: multiplierX,
          datetime: msgDate
        };
      }
    });

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
      groupname,
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
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default allowCors(handler);
