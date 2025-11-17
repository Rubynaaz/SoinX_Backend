import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({message: "Method not allowed"});
    }

    const { contract_address } = req.query;
    if (!contract_address || typeof contract_address !== "string") {
        return res.status(400).json({message: "id query parameter is required"});
    }

    const contract = await prisma.telegramUserData.findUnique({
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
        },
        
    });
    if (!contract) {
        return res.status(404).json({message: "Contract not found"});
    }
    return res.status(200).json(contract);
}


export default allowCors(handler);