import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    page = "1",
    limit = "10",
    sortBy = "marketcapChange",
    order = "desc",
    filterChain,
    minGroups
  } = req.query;

  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const sortOrder = order === "asc" ? 1 : -1;
  const minGroupsNum = minGroups ? parseInt(minGroups as string, 10) : 0;

  try {
    // Fetch all group entries and include Dexscreener cache
    const groupEntries = await prisma.groupUserCountsWebhookTest.findMany({
      include: {
        DexscreenerData: true
      }
    });

    // Group by ContractAddress
    const grouped: Record<string, any> = {};
    for (const entry of groupEntries) {
      const key = entry.ContractAddress || "";
      if (!grouped[key]) {
        grouped[key] = {
          ContractAddress: key,
          firstMessageDateTime: entry.MessageDateTime,
          firstGroupName: entry.GroupName,
          firstDex: entry.DexscreenerData[0],
          groupNames: new Set([entry.GroupName])
        };
      } else {
        grouped[key].groupNames.add(entry.GroupName);
      }
    }

    let contracts = Object.values(grouped);

    // Fetch Dexscreener cache
    const dexCache = await prisma.dexscreenerCacheNew.findMany();
    const dexCacheMap = new Map(dexCache.map(dc => [dc.contractAddress, dc]));

    // Map and calculate marketcapChange
    contracts = contracts
      .map(item => {
        const cachedDex = dexCacheMap.get(item.ContractAddress);
        if (!cachedDex) return null;

        const dbCap = Number(item.firstDex?.marketCap || 0);
        const cachedCap = Number(cachedDex.marketCap || 0);

        if (!dbCap || !cachedCap) return null;

        const marketcapChange = cachedCap ? ((cachedCap - dbCap) / dbCap) * 100 : 0;
        let multiplierX = 1.0;
        if (marketcapChange > -100) {
          multiplierX = marketcapChange / 100 + 1;
        }

        return {
          ContractAddress: item.ContractAddress,
          GroupName: item.firstGroupName,
          MessageDateTime: item.firstMessageDateTime,
          groupNames: Array.from(item.groupNames),
          totalGroups: item.groupNames.size,
          chain: item.firstDex?.chainId,
          tokenName: item.firstDex?.baseToken?.name,
          tokenSymbol: item.firstDex?.baseToken?.symbol,
          tokenImage: item.firstDex?.info?.imageUrl,
          dbMarketcap: dbCap,
          priceUsd: item.firstDex?.priceUsd,
          cachedMarketcap: cachedCap,
          dexUrl: cachedDex.dexUrl,
          marketcapChange: parseFloat(marketcapChange.toFixed(2)),
          multiplierX: parseFloat(multiplierX.toFixed(2))
        };
      })
      .filter(Boolean)
      .filter((item): item is NonNullable<typeof item> => item != null)
      .filter(item => item.marketcapChange != null && item.multiplierX != null)
      .filter(item => {
        if (filterChain && item!.chain !== filterChain) return false;
        if (item!.totalGroups < minGroupsNum) return false;
        return true;
      }) as any[];

    // Sort
    contracts.sort((a, b) => {
      const fieldA = a[sortBy as string];
      const fieldB = b[sortBy as string];
      if (fieldA < fieldB) return sortOrder * -1;
      if (fieldA > fieldB) return sortOrder * 1;
      return 0;
    });

    // Pagination
    const totalContracts = contracts.length;
    const paginatedContracts = contracts.slice(
      (pageNum - 1) * limitNum,
      pageNum * limitNum
    );

    return res.status(200).json({
      page: pageNum,
      limit: limitNum,
      totalContracts,
      totalPages: Math.ceil(totalContracts / limitNum),
      contracts: paginatedContracts
    });

  } catch (error) {
    console.error("Error fetching contracts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default allowCors(handler);
