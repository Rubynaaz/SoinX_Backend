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
        // Fetch only fields we need to compute aggregates
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
          },
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

        const groupMap = new Map<string, { groupName: string; username: string | null; memberCount: number; contracts: Set<string>; lastAt: Date | null; lastAddress: string | null; }>();

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
