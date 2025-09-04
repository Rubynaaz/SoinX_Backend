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
    const sortBy = (req.query.sort_by as string) || "avgMarketCap";
    const order = req.query.order === "asc" ? "asc" : "desc";

    // console.log('calling API /group/getallgroup')

      try {
        const groups = await prisma.groupAnalytics.findMany({
          where:{
            groupUser: {
              not: undefined
            },
          },
          orderBy: {
            [sortBy]: order
          },
          skip: (page - 1) * limit,
          take: limit,
        });
        console.log('groups', groups.length);
        console.log('order', order);  
        console.log('sortBy', sortBy)
        console.log("groups", groups);
        const cleanedGroups = groups.map((group) => {
      if (!group.top_contract) return group;

      return {
        ...group,
        top_contract: Array.isArray(group.top_contract)
          ? group.top_contract.map((contract) => {
              if (!contract || typeof contract !== 'object') return contract;
              const { historicalData, ...rest } = contract as Record<string, any>;
              return rest;
            })
          : (() => {
              const { historicalData, ...rest } = group.top_contract as any;
              return rest;
            })(),
      };
    });
    console.log('cleanedGroups', cleanedGroups.length);
        return res.status(200).json(cleanedGroups);
      } catch (error) {
        console.error("Error fetching groups:", error);
        if(res.statusCode === 404)
          return res.status(404).json({ message: "Groups not found" });
        return res.status(500).json({ message: "Internal server error" });
      }
}

export default allowCors(handler);
