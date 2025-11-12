import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

// function getMoralisChainName(chainId: string | null | undefined): string | null {
//   if (!chainId) return null;

//   const chainMap: Record<string, string> = {
//     // Dexscreener chain names to Moralis API chain names
//     'bsc': 'bsc',
//     'ethereum': 'eth',
//     'polygon': 'polygon',
//     'avalanche': 'avalanche',
//     'fantom': 'fantom',
//     'arbitrum': 'arbitrum',
//     'optimism': 'optimism',
//     'base': 'base',
//     'cronos': 'cronos',
//     'gnosis': 'gnosis',
//   };

//   // Convert chain name to Moralis API format
//   const lowerChainId = chainId.toLowerCase();
//   return chainMap[lowerChainId] || lowerChainId; // Return as-is if not in map
// }

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 100;
  const sortBy = (req.query.sort_by as string) || "memberCount"; // memberCount | totalCalls | username
  const order = req.query.order === "asc" ? "asc" : "desc";

  // console.log('calling API /group/getallgroup')

  try {
    // Fetch all group analytics from GroupAnalyticsDetailed
    const groupAnalytics = await prisma.groupAnalyticsDetailed.findMany({
      select: {
        username: true,
        groupUserCount: true,
        totalCalls: true,
        lastCall: true, // Only needed for recentContractData
      },
    });

    // Collect all last calls from groups for recentContractData
    type LastCall = {
      tokenName: string | null;
      tokenSymbol: string | null;
      tokenImage: string | null;
      price: string | null;
      marketCap: number | null;
      contractAddress: string | null;
      messageDateTime: string | null;
      chain: string | null;
      totalVolume?: number | null;
      pricePercentChange24h?: number | null;
    };

    // Get all last calls from all groups
    const allLastCalls: Array<{
      contractAddress: string;
      messageDateTime: Date;
      lastCall: any;
    }> = [];

    for (const group of groupAnalytics) {
      if (group.lastCall && group.lastCall.contractAddress && group.lastCall.messageDateTime) {
        allLastCalls.push({
          contractAddress: group.lastCall.contractAddress,
          messageDateTime: new Date(group.lastCall.messageDateTime),
          lastCall: group.lastCall,
        });
      }
    }

    // Get last 4 unique calls globally (by contract address, most recent first)
    const uniqueCalls = new Map<string, {
      contractAddress: string;
      messageDateTime: Date;
      lastCall: any;
    }>();

    for (const call of allLastCalls) {
      if (!uniqueCalls.has(call.contractAddress) ||
        call.messageDateTime > uniqueCalls.get(call.contractAddress)!.messageDateTime) {
        uniqueCalls.set(call.contractAddress, call);
      }
    }

    // Sort by messageDateTime descending and take first 4
    const sortedCalls = Array.from(uniqueCalls.values())
      .sort((a, b) => b.messageDateTime.getTime() - a.messageDateTime.getTime())
      .slice(0, 4);

    // Build recentContractData array with token data from lastCall
    const recentContractData: LastCall[] = sortedCalls.map(call => {
      const lastCall = call.lastCall;
      return {
        tokenName: lastCall?.tokenName ?? null,
        tokenSymbol: lastCall?.tokenSymbol ?? null,
        tokenImage: lastCall?.tokenImage ?? null,
        price: null, // Not available in lastCall
        marketCap: null, // Not available in lastCall
        contractAddress: call.contractAddress,
        messageDateTime: call.messageDateTime.toISOString(),
        chain: lastCall?.chain ?? null,
      };
    });

    // Fetch Moralis analytics for top 4 contracts
    // const moralisApiKey = process.env.MORALIS_API_KEY;
    // if (moralisApiKey && recentContractData.length > 0) {
    //   // Fetch analytics in parallel with rate limiting
    //   const analyticsPromises = recentContractData.map(async (contract, index) => {
    //     // Add small delay to respect rate limits (250ms between requests)
    //     if (index > 0) {
    //       await new Promise((resolve) => setTimeout(resolve, 250));
    //     }

    //     const moralisChainName = getMoralisChainName(contract.chain);
    //     if (!moralisChainName || !contract.contractAddress) {
    //       return { contractAddress: contract.contractAddress, analytics: null };
    //     }

    //     try {
    //       const moralisUrl = `https://deep-index.moralis.io/api/v2.2/tokens/${contract.contractAddress}/analytics?chain=${moralisChainName}`;

    //       const moralisResponse = await fetch(moralisUrl, {
    //         method: 'GET',
    //         headers: {
    //           accept: 'application/json',
    //           'X-API-Key': moralisApiKey,
    //         },
    //       });

    //       if (moralisResponse.ok) {
    //         const analytics = await moralisResponse.json();
    //         console.log('Moralis Analytics 24h:', analytics.pricePercentChange?.["24h"]);
    //         return { contractAddress: contract.contractAddress, analytics };
    //       } else {
    //         console.error(`Moralis API error for ${contract.contractAddress}:`, moralisResponse.status);
    //         return { contractAddress: contract.contractAddress, analytics: null };
    //       }
    //     } catch (moralisError) {
    //       console.error(`Moralis API error for ${contract.contractAddress}:`, moralisError);
    //       return { contractAddress: contract.contractAddress, analytics: null };
    //     }
    //   });

    //   const analyticsResults = await Promise.all(analyticsPromises);
    //   const analyticsMap = new Map(
    //     analyticsResults.map(result => [result.contractAddress, result.analytics])
    //   );

    //   // Add analytics data to recentContractData
    //   recentContractData.forEach(contract => {
    //     const analytics = analyticsMap.get(contract.contractAddress ?? '');
    //     if (analytics && analytics.pricePercentChange) {
    //       // Extract 24h price percent change and total volume
    //       const totalVolume = Number(analytics.totalBuyVolume?.["24h"] || 0) + Number(analytics.totalSellVolume?.["24h"] || 0);
    //       contract.totalVolume = totalVolume;
    //       contract.pricePercentChange24h = analytics.pricePercentChange["24h"] || null;
    //       contract.moralisAnalytics = analytics;
    //     } else {
    //       contract.pricePercentChange24h = null;
    //       contract.totalVolume = null;
    //       contract.moralisAnalytics = null;
    //     }
    //   });
    // }

    // Map GroupAnalyticsDetailed to Aggregated format
    type Aggregated = {
      username: string | null;
      memberCount: number;
      totalContractAddresses: number;
    };

    let aggregated: Aggregated[] = groupAnalytics.map(group => ({
      username: group.username,
      memberCount: group.groupUserCount,
      totalContractAddresses: group.totalCalls,
    }));

    // Sorting
    aggregated.sort((a, b) => {
      const dir = order === 'asc' ? 1 : -1;
      switch (sortBy) {
        case 'username':
          return (a.username ?? '').localeCompare(b.username ?? '') * dir;
        case 'totalCalls':
          return (a.totalContractAddresses - b.totalContractAddresses) * dir;
        case 'memberCount':
        default:
          return (a.memberCount - b.memberCount) * dir;
      }
    });

    // Pagination
    const start = (page - 1) * limit;
    const paged = aggregated.slice(start, start + limit);

    return res.status(200).json({
      page,
      limit,
      total: aggregated.length,
      recentContractData,
      data: paged,
    });
  } catch (error) {
    console.error("Error fetching groups:", error);
    if (res.statusCode === 404)
      return res.status(404).json({ message: "Groups not found" });
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default allowCors(handler);
