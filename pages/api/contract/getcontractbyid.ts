import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

// Helper function to get Moralis chain name
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
      moralisUrl = `https://solana-gateway.moralis.io/token/mainnet/pairs/${pairAddress}/ohlcv?fromDate=${encodeURIComponent(fromDateISO)}&toDate=${encodeURIComponent(toDateISO)}&timeframe=1h&currency=usd&limit=168`;
    } else {
      // For other chains, use the standard Moralis API with pairs endpoint
      const moralisChainName = getMoralisChainName(chain);
      if (!moralisChainName) return null;
      
      // Calculate limit based on date range (1 hour intervals)
      const hoursDiff = Math.ceil((toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60));
      const limit = Math.min(hoursDiff, 168); // Max 168 (7 days)
      
      moralisUrl = `https://deep-index.moralis.io/api/v2.2/pairs/${pairAddress}/ohlcv?chain=${moralisChainName}&timeframe=1h&currency=usd&fromDate=${encodeURIComponent(fromDateISO)}&toDate=${encodeURIComponent(toDateISO)}&limit=${limit}`;
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
      console.log("🚀 ~ fetchMoralisHistoricalData ~ data:", data)
      
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
        return res.status(405).json({message: "Method not allowed"});
    }

    const { contract_address } = req.query;
    if (!contract_address || typeof contract_address !== "string") {
        return res.status(400).json({message: "id query parameter is required"});
    }

    try {
        const contract = await (prisma.telegramUserData.findUnique({
            where: { contract_address: contract_address },
            select: {
                contract_address: true,
                group_name: true,
                username: true,
                user_count: true,
                token_name: true,
                token_symbol: true,
                dex_url: true,
                full_message: true,
                chain: true,
                call_count: true,
                social_links: true,
                token_image: true,
                banner_image: true,
                price_usd: true,
                market_cap: true,
                message_datetime: true,
                // TODO: Once pair_address is added to Prisma schema, uncomment below and remove 'as any'
                // pair_address: true,
                ...({ pair_address: true } as any), // Temporarily using type assertion until schema is updated
            },
        }) as Promise<any>);

        if (!contract) {
            return res.status(404).json({message: "Contract not found"});
        }

        // Access pairAddress from contract
        const pairAddress = contract.pair_address || null;

        // Fetch historical OHLCV data from Moralis
        // Use message_datetime as fromDate and current time as toDate
        const toDate = new Date();
        const fromDate = contract.message_datetime || null;

        const historicalData = await fetchMoralisHistoricalData(
            pairAddress,
            contract.chain,
            fromDate,
            toDate
        );

        // Return contract data with historical data
        return res.status(200).json({
            ...contract,
            historicalData: historicalData || [],
        });
    } catch (error) {
        console.error("Error fetching contract:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);