import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        const { id } = req.query;
        if (!id || typeof id !== "string") {
            return res.status(400).json({ message: "ID is required" });
        }

        const twitterData = await prisma.twitterData.findUnique({
            where: {
                id: id,
            },
        });

        if (!twitterData) {
            return res.status(404).json({ message: "Data not found" });
        }
        
        console.log('twitterData', twitterData);
        const filterTwitterData = {
            id: twitterData?.id,
            url: twitterData?.url,
            userId: twitterData?.user.id,
            userName: twitterData?.user?.core?.name,
            userDisplayName: twitterData?.user?.core?.screen_name,
            accountCreatedDate: twitterData?.user?.core?.created_at,
            userProfileImageUrl: twitterData?.user?.avatar?.image_url,
            affiliatesHighlightedLabel: twitterData?.user.affiliates_highlighted_label,
            isBlueVerified: twitterData?.user?.is_blue_verified,
            fastFollowersCount: twitterData?.user?.legacy?.fast_followers_count,
            followersCount: twitterData?.user?.legacy?.followers_count,
            friendCount: twitterData?.user?.legacy?.friends_count,
            iTranslator: twitterData?.user?.legacy?.is_translator,
            listedCount: twitterData?.user?.legacy?.listed_count,
            mediaCount: twitterData?.user?.legacy?.media_count,
            normalFollowerCount: twitterData?.user?.legacy?.normal_followers_count,
            sensitiveContentCreator: twitterData?.user?.legacy?.possibly_sensitive,
            profileUrl: twitterData?.user?.legacy?.profile_banner_url,
            statusCount: twitterData?.user?.legacy?.statuses_count,
            translatorType: twitterData?.user?.legacy?.translator_type,
            location: twitterData?.user?.location?.location,
            professionalType: twitterData?.user?.professional?.professional_type,
            isAccountProtected: twitterData?.user?.privacy?.protected,
            isAccountVerified: twitterData?.user?.verification?.verified,
            isHiddenSubscriberOnProfile: twitterData?.user?.has_hidden_subscriptions_on_profile,
            highlightedTweets: twitterData?.user?.highlights_info?.highlighted_tweets,
            creatorSubscriptionsCount: twitterData?.user?.creator_subscriptions_count,
        }
        console.log('filterTwitterData', filterTwitterData);
        return res.status(200).json(filterTwitterData);
    } catch (error) {
        console.error("Error fetching groups:", error);
        if (res.statusCode === 404)
            return res.status(404).json({ message: "Groups not found" });
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);
