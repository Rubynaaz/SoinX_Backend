import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const sortBy = (req.query.sort_by as string) || "memberCount"; // memberCount | totalContractAddresses | groupName | username | lastMessageAt | recent
    const order = req.query.order === "asc" ? "asc" : "desc";

    // console.log('calling API /group/getallgroup')

      try {
        // Fetch rows with DexscreenerData for token information
        const rows = await prisma.groupUserCountsWebhookTest.findMany({
          where: {
            GroupName: {
              not: undefined,
            },
          },
          select: {
            GroupName: true,
            Username: true,
            GroupUserCount: true,
            ContractAddress: true,
            MessageDateTime: true,
            DexscreenerData: true,
          },
          orderBy: {
            MessageDateTime: 'desc',
          },
        });

        // Get all unique contract addresses to fetch cache
        const allContractAddresses = Array.from(
          new Set(rows.map(r => r.ContractAddress).filter((c): c is string => !!c && c.trim().length > 0))
        );

        // Fetch Dexscreener cache for all contracts
        const dexCache = await prisma.dexscreenerCacheNew.findMany({
          where: {
            contractAddress: { in: allContractAddresses },
          },
        });
        const dexCacheMap = new Map(dexCache.map(dc => [dc.contractAddress, dc]));

        // Collect all calls from entire database for last 4 calls
        type LastCall = {
          tokenName: string | null;
          tokenSymbol: string | null;
          tokenImage: string | null;
          price: string | null;
          marketCap: number | null;
          contractAddress: string | null;
          messageDateTime: string | null;
        };

        // Get all calls from all rows
        const allCalls: Array<{ contractAddress: string; messageDateTime: Date; dexData: any }> = [];
        for (const r of rows) {
          if (r.ContractAddress && r.ContractAddress.trim().length > 0 && 
              r.MessageDateTime && r.DexscreenerData && r.DexscreenerData.length > 0) {
            allCalls.push({
              contractAddress: r.ContractAddress.trim(),
              messageDateTime: r.MessageDateTime,
              dexData: r.DexscreenerData[0], // Use first Dex entry
            });
          }
        }

        // Get last 4 unique calls globally (by contract address, most recent first)
        const uniqueCalls = new Map<string, { contractAddress: string; messageDateTime: Date; dexData: any }>();
        for (const call of allCalls) {
          if (!uniqueCalls.has(call.contractAddress) || 
              call.messageDateTime > uniqueCalls.get(call.contractAddress)!.messageDateTime) {
            uniqueCalls.set(call.contractAddress, call);
          }
        }
        
        // Sort by messageDateTime descending and take first 4
        const sortedCalls = Array.from(uniqueCalls.values())
          .sort((a, b) => b.messageDateTime.getTime() - a.messageDateTime.getTime())
          .slice(0, 4);

        // Build recentContractData array with token data
        const recentContractData: LastCall[] = sortedCalls.map(call => {
          const cachedDex = dexCacheMap.get(call.contractAddress);
          const dexData = call.dexData;
          
          return {
            tokenName: dexData?.baseToken?.name ?? cachedDex?.baseToken?.name ?? null,
            tokenSymbol: dexData?.baseToken?.symbol ?? cachedDex?.baseToken?.symbol ?? null,
            tokenImage: dexData?.info?.imageUrl ?? cachedDex?.info?.imageurl ?? null,
            price: cachedDex?.priceUsd?.toString() ?? dexData?.priceUsd ?? null,
            marketCap: cachedDex?.marketCap ?? (dexData?.marketCap != null ? Number(dexData.marketCap) : null),
            contractAddress: call.contractAddress,
            messageDateTime: call.messageDateTime.toISOString(),
          };
        });

        // Aggregate by group (GroupName + Username)
        type Aggregated = {
          groupName: string;
          username: string | null;
          memberCount: number; // use max observed per group
          totalContractAddresses: number; // unique count
          lastMessageAt: string | null; // ISO string
          lastContractAddress: string | null;
        };

        const groupMap = new Map<string, { 
          groupName: string; 
          username: string | null; 
          memberCount: number; 
          contracts: Set<string>; 
          lastAt: Date | null; 
          lastAddress: string | null;
        }>();

        for (const r of rows) {
          const key = `${r.GroupName}::${r.Username ?? ''}`;
          if (!groupMap.has(key)) {
            groupMap.set(key, {
              groupName: r.GroupName,
              username: r.Username ?? null,
              memberCount: typeof r.GroupUserCount === 'number' ? r.GroupUserCount : 0,
              contracts: new Set<string>(),
              lastAt: r.MessageDateTime ?? null,
              lastAddress: r.ContractAddress ?? null,
            });
          }
          const agg = groupMap.get(key)!;
          if (typeof r.GroupUserCount === 'number' && r.GroupUserCount > agg.memberCount) {
            agg.memberCount = r.GroupUserCount;
          }
          if (r.ContractAddress && r.ContractAddress.trim().length > 0) {
            agg.contracts.add(r.ContractAddress.trim());
          }
          if (r.MessageDateTime) {
            if (!agg.lastAt || r.MessageDateTime > agg.lastAt) {
              agg.lastAt = r.MessageDateTime;
              agg.lastAddress = r.ContractAddress ?? agg.lastAddress;
            }
          }
        }

        let aggregated: Aggregated[] = Array.from(groupMap.values()).map(v => ({
          groupName: v.groupName,
          username: v.username,
          memberCount: v.memberCount,
          totalContractAddresses: v.contracts.size,
          lastMessageAt: v.lastAt ? v.lastAt.toISOString() : null,
          lastContractAddress: v.lastAddress ?? null,
        }));

        // Sorting
        aggregated.sort((a, b) => {
          const dir = order === 'asc' ? 1 : -1;
          switch (sortBy) {
            case 'groupName':
              return a.groupName.localeCompare(b.groupName) * dir;
            case 'username':
              return (a.username ?? '').localeCompare(b.username ?? '') * dir;
            case 'totalContractAddresses':
              return (a.totalContractAddresses - b.totalContractAddresses) * dir;
            case 'lastMessageAt':
            case 'recent':
              return ((new Date(a.lastMessageAt ?? 0).getTime()) - (new Date(b.lastMessageAt ?? 0).getTime())) * dir;
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
        if(res.statusCode === 404)
          return res.status(404).json({ message: "Groups not found" });
        return res.status(500).json({ message: "Internal server error" });
      }
}

export default allowCors(handler);
