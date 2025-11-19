import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

// Helper function to convert Dexscreener chain names to Moralis API chain names
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
    'solana': 'solana',
  };

  // Convert chain name to Moralis API format
  const lowerChainId = chainId.toLowerCase();
  return chainMap[lowerChainId] || lowerChainId; // Return as-is if not in map
}

// Helper function to fetch historical OHLCV data from Moralis
async function fetchMoralisHistoricalData(
  pairAddress: string | null | undefined,
  chain: string | null | undefined,
  fromDate: Date | null | undefined,
  toDate: Date
): Promise<any[] | null> {
  if (!chain || !process.env.MORALIS_API_KEY || !pairAddress) {
    return null;
  }

  if (!fromDate) {
    return null;
  }

  const lowerChain = chain.toLowerCase();
  
  const fromDateISO = fromDate.toISOString();
  const toDateISO = toDate.toISOString();

  try {
    let moralisUrl: string;

    // Use Solana gateway for Solana tokens
    if (lowerChain === 'solana') {
      moralisUrl = `https://solana-gateway.moralis.io/token/mainnet/pairs/${pairAddress}/ohlcv?fromDate=${encodeURIComponent(fromDateISO)}&toDate=${encodeURIComponent(toDateISO)}&timeframe=1h&currency=usd&limit=1000`;
    } else {
      // For other chains, use the standard Moralis API with pairs endpoint
      const moralisChainName = getMoralisChainName(chain);
      if (!moralisChainName) return null;
      
      // Calculate limit based on date range (1 hour intervals)
      const hoursDiff = Math.ceil((toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60));
      const limit = Math.min(hoursDiff, 168); // Max 168 (7 days)
      
      moralisUrl = `https://deep-index.moralis.io/api/v2.2/pairs/${pairAddress}/ohlcv?chain=${moralisChainName}&timeframe=1h&currency=usd&fromDate=${encodeURIComponent(fromDateISO)}&toDate=${encodeURIComponent(toDateISO)}&limit=1000`;
    }

    const moralisResponse = await fetch(moralisUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-Key': process.env.MORALIS_API_KEY,
      },
    });

    if (moralisResponse.ok) {
      const data = await moralisResponse.json();
      console.log("🚀 ~ fetchMoralisHistoricalData ~ data:", data);
      
      // Return the data array (adjust based on actual Moralis response structure)
      return Array.isArray(data) ? data : data.data || data.result || null;
    } else {
      const errorText = await moralisResponse.text();
      console.error('Moralis Historical Data API error:', moralisResponse.status, errorText);
      return null;
    }
  } catch (moralisError) {
    console.error('Moralis Historical Data API error:', moralisError);
    return null;
  }
}

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
        include: {
          DexscreenerData: {
            select: {
              marketCap: true,
              priceUsd: true,
              chainId: true,
              url: true,
              pairAddress: true,
              info: {
                select: {
                  imageUrl: true,
                  header: true,
                  socials: true,
                },
              },
              baseToken: {
                select: {
                  name: true,
                  symbol: true,
                },
              },

            },

          }
        },
        orderBy: { MessageDateTime: "desc" },
      }),
      prisma.dexLatestData.findFirst({
        where: { contractAddress: contractId },
        select: {
          historicalData: true,
        },
      }),
    ]);

    if (!groups.length) {
      return res.status(404).json({ message: "Contract not found" });
    }

    console.log('contractId', contractId);
    const response = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${contractId}`, {
      method: 'GET',
      headers: {
        "Accept": "*/*"
      },
    });

    const data = await response.json();
    // console.log('dexscreener data', data);
    // console.log('Price Usd', data.pairs?.[0]?.priceUsd);
    // console.log('Market Cap', data.pairs?.[0]?.marketCap);

    // Check if Dexscreener API returned valid data
    const currentPair = data.pairs && data.pairs.length > 0 ? data.pairs[0] : null;
    const currentMarketcap = currentPair?.marketCap || 0;
    const currentPrice = Number(currentPair?.priceUsd) || 0;
    
    if (!currentPair) {
      console.warn('Dexscreener API did not return valid pair data for contract:', contractId);
    }

    // Check if cached historical data is available
    const hasCachedHistoricalData = cachedDex && cachedDex.historicalData && cachedDex.historicalData.length > 0;
    
    // Fetch historical OHLCV data from Moralis if cached data is not available
    const toDate = new Date();
    const earliestMessage = groups.reduce((earliest, group) => {
      return !earliest || group.MessageDateTime < earliest ? group.MessageDateTime : earliest;
    }, groups[0]?.MessageDateTime || null);
    const fromDate = earliestMessage || null;
    const pairAddress = groups[0].DexscreenerData[0]?.pairAddress || null;
    const chain = groups[0].DexscreenerData[0]?.chainId || null;

    let moralisHistoricalData: any[] | null = null;
    if (!hasCachedHistoricalData && pairAddress && chain && fromDate) {
      console.log('Cached historical data not available, fetching from Moralis...');
      moralisHistoricalData = await fetchMoralisHistoricalData(
        pairAddress,
        chain,
        fromDate,
        toDate
      );
    }

    // Helper function to find closest historical data point for a given datetime
    const findHistoricalDataPoint = (messageDateTime: Date): { priceUsd?: number; marketCap?: number } | null => {
      // First try cached data
      if (hasCachedHistoricalData && cachedDex) {
        // Find closest historical data point
        const closest = cachedDex.historicalData.reduce((closest, point) => {
          if (!closest) return point;
          const closestDiff = Math.abs(closest.timestamp.getTime() - messageDateTime.getTime());
          const currentDiff = Math.abs(point.timestamp.getTime() - messageDateTime.getTime());
          return currentDiff < closestDiff ? point : closest;
        }, null as typeof cachedDex.historicalData[0] | null);
        
        if (closest) {
          return {
            priceUsd: closest.priceUsd || undefined,
            marketCap: closest.marketCap || undefined,
          };
        }
      }

      // If no cached data, use Moralis data
      if (moralisHistoricalData && moralisHistoricalData.length > 0) {
        // Find closest data point from Moralis (assuming it has timestamp and close/price fields)
        const closest = moralisHistoricalData.reduce((closest, point) => {
          if (!closest) return point;
          const pointTime = point.timestamp ? new Date(point.timestamp).getTime() : 0;
          const closestTime = closest.timestamp ? new Date(closest.timestamp).getTime() : 0;
          const messageTime = messageDateTime.getTime();
          
          const closestDiff = Math.abs(closestTime - messageTime);
          const currentDiff = Math.abs(pointTime - messageTime);
          return currentDiff < closestDiff ? point : closest;
        }, null as any);

        if (closest) {
          // Moralis OHLCV data structure may vary, adjust based on actual response
          // Common fields: close, open, high, low, volume, timestamp
          // For marketcap, we might need to calculate it or use a different endpoint
          const price = closest.close || closest.price || closest.priceUsd;
          return {
            priceUsd: price ? Number(price) : undefined,
            marketCap: closest.marketCap || undefined, // May not be available in OHLCV
          };
        }
      }

      return null;
    };

    // Map group messages with marketcap change
    const groupsWithChange = groups
      .map(group => {
        const firstDex = group.DexscreenerData[0];

        const dbMarketcap = firstDex?.marketCap || 0;
        const cachedMarketcap = currentMarketcap;
        const cachedPrice = currentPrice;
        const dbPrice = Number(firstDex?.priceUsd) || 0;

        // Get historical data point for this message's datetime
        const historicalPoint = findHistoricalDataPoint(group.MessageDateTime);
        const historicalMarketcap = historicalPoint?.marketCap || dbMarketcap || 0;
        const historicalPrice = historicalPoint?.priceUsd || dbPrice || 0;

        // Use historical data if available, otherwise fall back to db values
        const marketcapAtCallTime = historicalMarketcap || dbMarketcap;
        const priceAtCallTime = historicalPrice || dbPrice;

        if (!marketcapAtCallTime || !cachedMarketcap) return null;

        const marketcapChange = ((cachedMarketcap - marketcapAtCallTime) / marketcapAtCallTime) * 100;
        const priceChange = ((cachedPrice - priceAtCallTime) / priceAtCallTime) * 100;
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
          priceChange: parseFloat(priceChange.toFixed(2)),
          xmultiply: parseFloat(xmultiply.toFixed(2)),
        };
      })
      .filter((g): g is NonNullable<typeof g> => g != null); // Remove null entries


    // Fetch Moralis token analytics using direct API call
    console.log('tokenAddress', contractId);
    console.log('chain', groups[0].DexscreenerData[0]?.chainId);

    const moralisChainName = getMoralisChainName(groups[0].DexscreenerData[0]?.chainId);
    let moralisAnalytics = null;

    if (moralisChainName && process.env.MORALIS_API_KEY) {
      try {
        const moralisUrl = `https://deep-index.moralis.io/api/v2.2/tokens/${contractId}/analytics?chain=${moralisChainName}`;

        const moralisResponse = await fetch(moralisUrl, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-API-Key': process.env.MORALIS_API_KEY,
          },
        });



        if (moralisResponse.ok) {
          moralisAnalytics = await moralisResponse.json();
          console.log('Moralis Analytics:', moralisAnalytics.pricePercentChange);
        } else {
          const errorText = await moralisResponse.text();
          console.error('Moralis API error:', moralisResponse.status, errorText);
        }
      } catch (moralisError) {
        console.error('Moralis API error:', moralisError);
        // Continue without Moralis data
      }
    } else {
      console.warn(`Skipping Moralis API: chain=${moralisChainName}, hasKey=${!!process.env.MORALIS_API_KEY}`);
    }
    // Calculate average marketcap change
    const avgMarketcapChange =
      groupsWithChange.reduce((sum, g) => sum + g.marketcapChange, 0) / groupsWithChange.length;

    const avgPriceChange =
      groupsWithChange.reduce((sum, g) => sum + g.priceChange, 0) / groupsWithChange.length;



    console.log('Moralis Analytics Total Buy Volume:', moralisAnalytics?.totalBuyVolume);
    console.log('Total Volume:', Number(moralisAnalytics?.totalBuyVolume?.["24h"]) + Number(moralisAnalytics?.totalSellVolume?.["24h"]));
    console.log('Social Media Links:', groups[0].DexscreenerData[0]?.info?.socials);

    // Fetch historical OHLCV data from Moralis if not already fetched
    if (hasCachedHistoricalData && pairAddress && chain && fromDate) {
      // Fetch for display purposes even if we have cached data
      moralisHistoricalData = await fetchMoralisHistoricalData(
        pairAddress,
        chain,
        fromDate,
        toDate
      );
    }

    // Get cached marketcap from historical data (first entry or from Moralis)
    let cachedMarketcap = 0;
    if (hasCachedHistoricalData && cachedDex && cachedDex.historicalData[0]) {
      cachedMarketcap = cachedDex.historicalData[0]?.marketCap || 0;
    } else if (moralisHistoricalData && moralisHistoricalData.length > 0) {
      // Use first Moralis data point if available
      const firstPoint = moralisHistoricalData[0];
      cachedMarketcap = firstPoint.marketCap || 0;
    }

    // Return final response
    return res.status(200).json({
      coin: {
        contract_address: contractId,
        symbol: groups[0].DexscreenerData[0]?.baseToken?.symbol,
        socialMediaLinks: groups[0].DexscreenerData[0]?.info?.socials,
        averageMarketcapChange: avgMarketcapChange,
        averagePriceChange: avgPriceChange,
        name: groups[0].DexscreenerData[0]?.baseToken?.name,
        chain: groups[0].DexscreenerData[0]?.chainId,
        CurrentDexScreenerPriceUsd: currentPrice,
        CurrentDexScreenerMarketcap: currentMarketcap,
        marketCapAtCallTime: groups[0].DexscreenerData[0]?.marketCap,
        priceUsdAtCallTime: Number(groups[0].DexscreenerData[0]?.priceUsd),
        cachedMarketcap: cachedMarketcap,
        dexUrl: groups[0].DexscreenerData[0]?.url,
        tokenImage: groups[0].DexscreenerData[0]?.info?.imageUrl,
        tokenBackgroundImage: groups[0].DexscreenerData[0]?.info?.header,
        historicalData: cachedDex?.historicalData || [],
        moralisHistoricalData: moralisHistoricalData || [], // Moralis OHLCV historical data
        pricePercentChange: moralisAnalytics?.pricePercentChange || null, // Moralis token analytics data
        fdv: Number(moralisAnalytics?.totalFullyDilutedValuation) || 0,
        totalLiquidity: Number(moralisAnalytics?.totalLiquidityUsd) || 0,
        totalVolume: Number(moralisAnalytics?.totalBuyVolume?.["24h"]) + Number(moralisAnalytics?.totalSellVolume?.["24h"]) || 0,
      },
      messages: groupsWithChange
    });
  } catch (error) {
    console.error("Error fetching contract:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default allowCors(handler);
