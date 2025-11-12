import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

function getMoralisChainName(chainId: string | null | undefined): string | null {
  if (!chainId) return null;

  const chainMap: Record<string, string> = {
    // Dexscreener chain names to Moralis API chain names
    'bsc': 'bsc',
    'ethereum': 'eth',
    'polygon': 'polygon',
    'avalanche': 'avalanche',
    'fantom': 'fantom',
    'arbitrum': 'arbitrum',
    'optimism': 'optimism',
    'base': 'base',
    'cronos': 'cronos',
    'gnosis': 'gnosis',
  };

  // Convert chain name to Moralis API format
  const lowerChainId = chainId.toLowerCase();
  return chainMap[lowerChainId] || lowerChainId; // Return as-is if not in map
}

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
      where: {
        ContractAddress: { not: null }, // Uses Contract Address_1 index
      },
      select: { // Only fetch needed fields
        ContractAddress: true,
        MessageDateTime: true,
        GroupName: true,
        DexscreenerData: {
          select: {
            marketCap: true,
            priceUsd: true,
            chainId: true,
            baseToken: {
              select: { name: true, symbol: true },
            },
            info: {
              select: { imageUrl: true },
            },
          },
        },
      },
      orderBy: [
        { ContractAddress: 'asc' },
        { MessageDateTime: 'asc' }
      ],
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

    // Fetch Moralis token analytics using direct API call


    // Fetch latest dex data (historical series) for all contracts; we'll use the latest point
    const latestAll = await prisma.dexLatestData.findMany({
      where: {
        contractAddress: {
          in: contracts.map((item: any) => item.ContractAddress),
        },
      },
      select: {
        contractAddress: true,
        historicalData: true,
      },
    });
    const latestMap = new Map(
      latestAll.map((ld: any) => {
        const hist = ld.historicalData || [];
        const last = hist.length > 0 ? hist[hist.length - 1] : null;
        return [ld.contractAddress, last];
      })
    );


    // Map and calculate marketcapChange
    contracts = contracts
      .map(item => {
        const latestPoint = latestMap.get(item.ContractAddress);
        
        // Skip contracts that don't have data in dexLatestData
        if (!latestPoint) {
          return null;
        }
        
        // console.log("🚀 ~ handler ~ item.firstDex:", item.firstDex)
        const tokenImage = item.firstDex?.info?.imageUrl ?? null;
        const dbCap = item.firstDex?.marketCap != null ? Number(item.firstDex.marketCap) : null;
        const latestCap = latestPoint?.marketCap != null ? Number(latestPoint.marketCap) : null;
        const latestPrice = latestPoint?.priceUsd != null ? Number(latestPoint.priceUsd) : null;

        let marketcapChange: number | null = null;
        let multiplierX: number | null = null;
        if (dbCap && latestCap) {
          marketcapChange = ((latestCap - dbCap) / dbCap) * 100;
          multiplierX = marketcapChange > -100 ? marketcapChange / 100 + 1 : 0;
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
          tokenImage: tokenImage,
          dbMarketcap: dbCap,
          priceUsd: latestPrice ?? item.firstDex?.priceUsd ?? null,
          cachedMarketcap: latestCap ?? null,
          dexUrl: null,
          marketcapChange: marketcapChange != null ? parseFloat(marketcapChange.toFixed(2)) : null,
          multiplierX: multiplierX != null ? parseFloat(multiplierX.toFixed(2)) : null
        };
      })
      .filter(Boolean)
      .filter((item): item is NonNullable<typeof item> => item != null)
      .filter(item => {
        if (filterChain && item!.chain !== filterChain) return false;
        if (item!.totalGroups < minGroupsNum) return false;
        return true;
      }) as any[];

    // Sort
    contracts.sort((a, b) => {
      const fieldA = a[sortBy as string];
      const fieldB = b[sortBy as string];
      const aNull = fieldA === null || fieldA === undefined;
      const bNull = fieldB === null || fieldB === undefined;
      if (aNull && bNull) return 0;
      if (aNull) return 1;
      if (bNull) return -1;
      if (fieldA < fieldB) return sortOrder * -1;
      if (fieldA > fieldB) return sortOrder * 1;
      return 0;
    });


    const totalContracts = contracts.length;
    const paginatedContracts = contracts.slice(
      (pageNum - 1) * limitNum,
      pageNum * limitNum
    );

    // Initialize pricePercentChange24h for all contracts (set to null initially)
    paginatedContracts.forEach(contract => {
      contract.pricePercentChange24h = null;
      // contract.moralisAnalytics = null;
    });

    // Fetch Moralis token analytics for paginated contracts only (to avoid rate limits)
    const moralisApiKey = process.env.MORALIS_API_KEY;
    if (moralisApiKey && paginatedContracts.length > 0) {
      // Fetch analytics in parallel with rate limiting
      const analyticsPromises = paginatedContracts.map(async (contract, index) => {
        // Add small delay to respect rate limits (250ms between requests)
        if (index > 0) {
          await new Promise((resolve) => setTimeout(resolve, 250));
        }

        const moralisChainName = getMoralisChainName(contract.chain);
        if (!moralisChainName) {
          return { contractAddress: contract.ContractAddress, analytics: null };
        }

        try {
          const moralisUrl = `https://deep-index.moralis.io/api/v2.2/tokens/${contract.ContractAddress}/analytics?chain=${moralisChainName}`;

          const moralisResponse = await fetch(moralisUrl, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'X-API-Key': moralisApiKey,
            },
          });

          if (moralisResponse.ok) {
            const analytics = await moralisResponse.json();
            console.log('Moralis Analytics 24h:', analytics.pricePercentChange["24h"]);
            return { contractAddress: contract.ContractAddress, analytics };
          } else {
            console.error(`Moralis API error for ${contract.ContractAddress}:`, moralisResponse.status);
            return { contractAddress: contract.ContractAddress, analytics: null };
          }
        } catch (moralisError) {
          console.error(`Moralis API error for ${contract.ContractAddress}:`, moralisError);
          return { contractAddress: contract.ContractAddress, analytics: null };
        }
      });

      const analyticsResults = await Promise.all(analyticsPromises);
      const analyticsMap = new Map(
        analyticsResults.map(result => [result.contractAddress, result.analytics])
      );

      // Add analytics data to contracts
      paginatedContracts.forEach(contract => {
        const analytics = analyticsMap.get(contract.ContractAddress);
        if (analytics && analytics.pricePercentChange) {
          // Extract 24h price percent change
          const totalVolume = Number(analytics.totalBuyVolume?.["24h"]) + Number(analytics.totalSellVolume?.["24h"]) || 0;
          contract.totalVolume = totalVolume;
          contract.pricePercentChange24h = analytics.pricePercentChange["24h"] || null;
          // contract.moralisAnalytics = analytics;
        } else {
          contract.pricePercentChange24h = null;
          // contract.moralisAnalytics = null;
        }
      });
    }

    // Attach historicalData from dexLatestData for paginated contracts
    if (paginatedContracts.length > 0) {
      const latestData = await prisma.dexLatestData.findMany({
        where: {
          contractAddress: {
            in: paginatedContracts.map(c => c.ContractAddress)
          }
        },
        select: {
          contractAddress: true,
          historicalData: true
        }
      });
      const latestDataMap = new Map(latestData.map(ld => [ld.contractAddress, ld.historicalData]));
      paginatedContracts.forEach(contract => {
        (contract as any).historicalData = latestDataMap.get(contract.ContractAddress) || [];
      });
    }

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
