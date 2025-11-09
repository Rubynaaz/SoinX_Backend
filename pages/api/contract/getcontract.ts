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
  };

  // Convert chain name to Moralis API format
  const lowerChainId = chainId.toLowerCase();
  return chainMap[lowerChainId] || lowerChainId; // Return as-is if not in map
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

    if (!groups.length || !cachedDex) {
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
    // console.log('Price Usd', data.pairs[0].priceUsd);
    // console.log('Market Cap', data.pairs[0].marketCap);

    // Map group messages with marketcap change
    const groupsWithChange = groups
      .map(group => {
        const firstDex = group.DexscreenerData[0];

        const dbMarketcap = firstDex?.marketCap || 0;
        const cachedMarketcap = data.pairs[0].marketCap || 0;
        const cachedPrice = Number(data.pairs[0].priceUsd) || 0;
        const dbPrice = Number(firstDex?.priceUsd) || 0;
        const historicaldata = cachedDex.historicalData[0]?.marketCap || 0;

        if (!dbMarketcap || !cachedMarketcap) return null;

        const marketcapChange = ((cachedMarketcap - dbMarketcap) / dbMarketcap) * 100;
        const priceChange = ((dbPrice - cachedPrice) / cachedPrice) * 100;
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
        CurrentDexScreenerPriceUsd: Number(data.pairs[0].priceUsd),
        CurrentDexScreenerMarketcap: data.pairs[0].marketCap,
        marketCapAtCallTime: groups[0].DexscreenerData[0]?.marketCap,
        priceUsdAtCallTime: Number(groups[0].DexscreenerData[0]?.priceUsd),
        cachedMarketcap: cachedDex.historicalData[0]?.marketCap || 0,
        dexUrl: groups[0].DexscreenerData[0]?.url,
        tokenImage: groups[0].DexscreenerData[0]?.info?.imageUrl,
        tokenBackgroundImage: groups[0].DexscreenerData[0]?.info?.header,
        historicalData: cachedDex.historicalData,
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
