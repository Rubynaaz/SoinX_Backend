import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const sortBy = (req.query.sort_by as string) || "avg_change";
    const order = req.query.order === "asc" ? 1 : -1;

    // console.log('calling API /group/getallgroup')

      try {
        // 1️⃣ Fetch all messages
        const messages = await prisma.groupUserCountsWebhookTest.findMany({
          where: { ContractAddress: { not: null } },
          include: { DexscreenerData: true },
        });

        // 2️⃣ Get all unique contract addresses
        const contractAddresses = messages
          .map(m => m.ContractAddress)
          .filter((addr): addr is string => addr != null);

        // 3️⃣ Fetch all cached Dex data at once
        const cachedDexList = await prisma.dexscreenerCacheNew.findMany({
          where: { contractAddress: { in: contractAddresses } },
        });

        const cachedDexMap = new Map<string, typeof cachedDexList[0]>();
        cachedDexList.forEach(d => cachedDexMap.set(d.contractAddress, d));

        // 4️⃣ Group messages by username + group
        const groupMap = new Map<string, any>();

        for (const msg of messages) {
          if (!msg.ContractAddress) continue;
          const key = `${msg.Username}-${msg.GroupName}`;
          const cachedDex = cachedDexMap.get(msg.ContractAddress);
          const firstDex = msg.DexscreenerData?.[0];
          if (!firstDex || !cachedDex) continue;

          if (!groupMap.has(key)) {
            groupMap.set(key, {
              username: msg.Username,
              group_name: msg.GroupName,
              group_user_count: msg.GroupUserCount || 0,
              total_calls: 0,
              unique_contracts: new Set<string>(),
              latest_message: msg.MessageDateTime,
              contracts: [] as any[],
            });
          }

        //   const grouped = await prisma.groupUserCountsWebhookTest.groupBy({
        //     by: ["GroupName", "Username"],
        //     where: {ContractAddress: {not: null}},
        //     _count: {_all: true},
        //     _max: {MessageDateTime: true, GroupUserCount: true,},
        //   })

        //   console.log('grouped', grouped)

          const group = groupMap.get(key);
          group.total_calls += 1;
          group.unique_contracts.add(msg.ContractAddress);
          if (msg.MessageDateTime > group.latest_message) {
            group.latest_message = msg.MessageDateTime;
          }

          const historical_marketCap = firstDex.marketCap || 0;
          const cached_marketCap = cachedDex.marketCap || 0;
          const historical_price = parseFloat(firstDex.priceUsd || "0");
          const cached_price = cachedDex.priceUsd || 0;

          let change_percent = 0;
          if (historical_marketCap > 0 && cached_marketCap > 0) {
            change_percent = ((historical_marketCap - cached_marketCap) / cached_marketCap) * 100;
          } else if (historical_price > 0 && cached_price > 0) {
            change_percent = ((historical_price - cached_price) / cached_price) * 100;
          }

          group.contracts.push({
            contract: msg.ContractAddress,
            change_percent,
            token_name: msg.DexscreenerData[0]?.baseToken?.name,
            token_symbol: msg.DexscreenerData[0]?.baseToken?.symbol,
            token_image: msg.DexscreenerData[0]?.info?.imageUrl,
          });
        }

        // 5️⃣ Convert groups to array and calculate metrics
        const allGroups = Array.from(groupMap.values()).map(g => {
          const avg_change =
            g.contracts.length > 0
              ? g.contracts.reduce((sum: number, c: any) => sum + c.change_percent, 0) / g.contracts.length
              : 0;

          const max_change = g.contracts.length > 0
            ? Math.max(...g.contracts.map((c: any) => c.change_percent))
            : 0;

          const top_performer = g.contracts.find((c: any) => c.change_percent === max_change) || null;

          return {
            ...g,
            unique_contracts: g.unique_contracts.size,
            avg_change,
            top_performer,
            contracts: undefined
          };
        });

        // 6️⃣ Sort
        allGroups.sort((a, b) => {
          let cmp = 0;
          switch (sortBy) {
            case "group_user_count": cmp = a.group_user_count - b.group_user_count; break;
            case "total_calls": cmp = a.total_calls - b.total_calls; break;
            case "unique_contracts": cmp = a.unique_contracts - b.unique_contracts; break;
            case "avg_change": cmp = a.avg_change - b.avg_change; break;
            case "latest_message": cmp = new Date(a.latest_message).getTime() - new Date(b.latest_message).getTime(); break;
          }
          return order === 1 ? cmp : -cmp;
        });

        // 7️⃣ Apply pagination
        const totalGroups = allGroups.length;
        const start = (page - 1) * limit;
        const pagedGroups = allGroups.slice(start, start + limit);

        return res.status(200).json({
          data: pagedGroups,
          pagination: { page, limit, total: totalGroups, total_pages: Math.ceil(totalGroups / limit) },
          sort_options: ["group_user_count", "total_calls", "unique_contracts", "avg_change", "latest_message"],
        });
      } catch (error) {
        console.error("Error fetching groups:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
}

export default allowCors(handler);
