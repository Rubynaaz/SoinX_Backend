import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

// Helper function to fetch dex data for a contract address with retry logic
async function fetchDexData(contractAddress: string, retries = 3): Promise<{ priceUsd: number | null; marketCap: number | null } | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(
        `https://api.dexscreener.com/latest/dex/search?q=${contractAddress}`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
          },
        }
      );

      // Handle rate limiting (429) with exponential backoff
      if (response.status === 429) {
        const retryAfter = response.headers.get("Retry-After");
        const waitTime = retryAfter 
          ? parseInt(retryAfter, 10) * 1000 
          : Math.min(1000 * Math.pow(2, attempt), 30000); // Max 30 seconds
        
        if (attempt < retries - 1) {
          console.log(`Rate limited for ${contractAddress}. Waiting ${waitTime}ms before retry ${attempt + 1}/${retries}`);
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          continue; // Retry
        } else {
          console.error(`Rate limited for ${contractAddress} after ${retries} attempts`);
          return null;
        }
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.pairs || data.pairs.length === 0) {
        return null;
      }

      // Get the first pair (most relevant)
      const pair = data.pairs[0];
      
      return {
        priceUsd: pair.priceUsd ? parseFloat(pair.priceUsd) : null,
        marketCap: pair.marketCap ? parseFloat(pair.marketCap.toString()) : null,
      };
    } catch (error) {
      if (attempt === retries - 1) {
        console.error(`Error fetching dex data for ${contractAddress} after ${retries} attempts:`, error);
        return null;
      }
      // Wait before retry (exponential backoff)
      const waitTime = Math.min(1000 * Math.pow(2, attempt), 10000);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
  return null;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verify that this is a cron job request
  // Vercel cron jobs can be protected with CRON_SECRET
  // If CRON_SECRET is set, require it; otherwise allow all requests (for testing)
  if (process.env.CRON_SECRET) {
    const authHeader = req.headers.authorization;
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }

  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Starting cron job: Update Dex Data");

    // Get contract limit from environment variable or query parameter (default: 0 = ALL contracts)
    const contractLimit = process.env.CRON_CONTRACT_LIMIT 
      ? parseInt(process.env.CRON_CONTRACT_LIMIT, 10) 
      : (req.query.limit ? parseInt(req.query.limit as string, 10) : 0);
    
    const isTestMode = contractLimit > 0 && contractLimit < 100;
    console.log(`Running in ${isTestMode ? 'TEST' : 'PRODUCTION'} mode with limit: ${contractLimit === 0 ? 'ALL' : contractLimit}`);

    // Get all unique contract addresses sorted by most recent first
    // This ensures we prioritize latest/recent contract calls
    const groupEntries = await prisma.groupUserCountsWebhookTest.findMany({
      where: {
        ContractAddress: {
          not: null,
        },
      },
      select: {
        ContractAddress: true,
        MessageDateTime: true,
      },
      orderBy: {
        MessageDateTime: "desc", // Most recent first - latest contracts will be processed first
      },
      ...(contractLimit > 0 && { take: contractLimit * 10 }), // Only limit if testing with small number
    });

    // Extract unique contract addresses, keeping the most recent ones first
    const contractAddressMap = new Map<string, Date>();
    for (const entry of groupEntries) {
      if (entry.ContractAddress && entry.ContractAddress.trim().length > 0) {
        const existingDate = contractAddressMap.get(entry.ContractAddress);
        if (!existingDate || entry.MessageDateTime > existingDate) {
          contractAddressMap.set(entry.ContractAddress, entry.MessageDateTime);
        }
        // Stop once we have enough unique addresses (only if limit is set)
        if (contractLimit > 0 && contractAddressMap.size >= contractLimit) {
          break;
        }
      }
    }

    // Sort by most recent MessageDateTime (latest contracts first)
    // This ensures the most recently called contracts are processed first
    let contractAddresses = Array.from(contractAddressMap.entries())
      .sort((a, b) => b[1].getTime() - a[1].getTime()) // Sort by date descending - latest first
      .map(([address]) => address);

    // Apply limit if specified (for testing)
    if (contractLimit > 0) {
      contractAddresses = contractAddresses.slice(0, contractLimit);
    }

    console.log(`Found ${contractAddresses.length} unique contract addresses (sorted by most recent first)`);
    if (isTestMode) {
      console.log(`Test mode: Processing only ${contractAddresses.length} contract(s):`, contractAddresses.slice(0, 5));
    } else {
      console.log(`Production mode: Processing ALL ${contractAddresses.length} contracts (latest first)`);
      if (contractAddresses.length > 0) {
        console.log(`First 5 contracts to process:`, contractAddresses.slice(0, 5));
      }
    }

    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];
    let rateLimitHit = false;

    // Dexscreener API rate limit: 300 requests per minute
    // To stay safe, we'll aim for ~250 requests per minute (1 request every 240ms)
    // This gives us a buffer to avoid hitting the limit
    const requestsPerMinute = 250;
    const delayBetweenRequests = Math.ceil((60 * 1000) / requestsPerMinute); // ~240ms between requests
    
    // Process contracts sequentially to respect rate limits
    // No batching needed since we're processing one at a time
    console.log(`Rate limit: ${requestsPerMinute} requests/minute (${delayBetweenRequests}ms delay between requests)`);
    
    // Process contracts sequentially, one at a time
    for (let i = 0; i < contractAddresses.length; i++) {
      // If we hit rate limit, wait longer before continuing
      if (rateLimitHit) {
        console.log("Rate limit detected. Waiting 60 seconds before continuing...");
        await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait 1 minute
        rateLimitHit = false;
      }

      const contractAddress = contractAddresses[i];
      
      // Log progress every 50 contracts
      if (i % 50 === 0 && i > 0) {
        console.log(`Progress: ${i}/${contractAddresses.length} contracts processed (${successCount} success, ${errorCount} errors)`);
      }
      
      try {
        const dexData = await fetchDexData(contractAddress);
        
        if (dexData && (dexData.priceUsd !== null || dexData.marketCap !== null)) {
          const timestamp = new Date();
          const newDataPoint = {
            priceUsd: dexData.priceUsd,
            marketCap: dexData.marketCap,
            timestamp: timestamp,
          };

          // Fetch existing record or create new one
          // Use select to avoid issues with null updatedAt in existing records
          const existing = await prisma.dexLatestData.findFirst({
            where: {
              contractAddress: contractAddress,
            },
            select: {
              id: true,
              contractAddress: true,
              historicalData: true,
            },
          });

          if (existing) {
            // Append to existing array
            const updatedHistoricalData = [...(existing.historicalData || []), newDataPoint];
            await prisma.dexLatestData.update({
              where: {
                id: existing.id,
              },
              data: {
                historicalData: updatedHistoricalData,
                updatedAt: timestamp,
              },
            });
          } else {
            // Create new record with first data point
            await prisma.dexLatestData.create({
              data: {
                contractAddress: contractAddress,
                historicalData: [newDataPoint],
              },
            });
          }
          successCount++;
        } else {
          errorCount++;
          errors.push(`No data returned for ${contractAddress}`);
        }
      } catch (error) {
        const errorMsg = `Error processing ${contractAddress}: ${error instanceof Error ? error.message : "Unknown error"}`;
        console.error(errorMsg);
        errors.push(errorMsg);
        errorCount++;
        
        // Check if it's a rate limit error
        if (error instanceof Error && error.message.includes("429")) {
          rateLimitHit = true;
        }
      }

      // Delay between each request to respect rate limits (300 requests/minute)
      // Only delay if there are more contracts to process
      if (i < contractAddresses.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, delayBetweenRequests));
      }
    }

    console.log(
      `Cron job completed. Success: ${successCount}, Errors: ${errorCount}`
    );

    return res.status(200).json({
      message: "Cron job completed",
      mode: isTestMode ? "TEST" : "PRODUCTION",
      contractLimit: contractLimit === 0 ? "ALL" : contractLimit,
      totalContracts: contractAddresses.length,
      successCount,
      errorCount,
      processedContracts: contractAddresses.slice(0, 10), // Show first 10 processed contracts
      errors: errors.slice(0, 10), // Return first 10 errors
    });
  } catch (error) {
    console.error("Error in cron job:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export default handler;

