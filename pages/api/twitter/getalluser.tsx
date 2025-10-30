import { PrismaClient as PrismaClientDb2 } from '../../../prisma/lib/generated/prisma/db2';
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const db2 = new PrismaClientDb2();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        // --- 1️⃣ Fetch users ---
        const allUsers = await db2.userProfileTest.findMany({
            select: {
                user_id_str: true,
                name: true,
                followers_count: true,
                profile_image_url_https: true,
                verified: true,
            },
        });

        // --- 2️⃣ Fetch all tweets for those users ---
        const userIds = allUsers
            .map(u => u.user_id_str)
            .filter((id): id is string => id !== null);

        const tweetsData = await db2.tweetsDataTest.findMany({
            where: {
                user_id_str: { in: userIds },
            },
            select: {
                user_id_str: true,
                favorite_count: true,
                retweet_count: true,
                views_count: true,
                quote_count: true,
                reply_count: true,
            },
        });

        // --- 3️⃣ Group tweets by user_id_str ---
        const tweetsByUser: Record<string, typeof tweetsData> = {};
        for (const tweet of tweetsData) {
            const userIdStr = tweet.user_id_str ?? "";
            if (!userIdStr) continue; // skip if null or empty
            if (!tweetsByUser[userIdStr]) {
                tweetsByUser[userIdStr] = [];
            }
            tweetsByUser[userIdStr].push(tweet);
        }

        // --- 4️⃣ Calculate Engagement Score per user ---
        const engagementScores = allUsers.map(user => {
            const userIdStr = user.user_id_str ?? "";
            const userTweets = userIdStr ? (tweetsByUser[userIdStr] || []) : [];
            const T = userTweets.length;
            const F = user.followers_count || 0;

            if (T === 0 || F === 0) {
                return {
                    ...user,
                    engagement_score: 0,
                };
            }

            let totalLikes = 0, totalRetweets = 0, totalQuotes = 0, totalReplies = 0, totalViews = 0;

            userTweets.forEach(tweet => {
                totalLikes += tweet.favorite_count || 0;
                totalRetweets += tweet.retweet_count || 0;
                totalQuotes += tweet.quote_count || 0;
                totalReplies += tweet.reply_count || 0;
                totalViews += Number(tweet.views_count || 0);
            });

            // const engagementScore = ((totalLikes + totalRetweets + totalQuotes + totalReplies) / (T * (F + (totalViews/T)))) * 100;
            // const engagementScore = ((totalLikes + totalRetweets + totalQuotes + totalReplies) / (T * F)) * 100;
            // const engagementScore = ((totalLikes + totalRetweets + totalQuotes + totalReplies) / totalViews) * 100;
            // const engagementScore = (T / totalViews) * 100;
            const engagementScore = totalViews;

            return {
                ...user,
                total_tweets: T,
                // total_likes: totalLikes,
                // total_retweets: totalRetweets,
                // total_quotes: totalQuotes,
                // total_replies: totalReplies,
                engagement_score: Number(engagementScore.toFixed(2)), // Rounded to 4 decimals
            };
        });

        // --- 5️⃣ Return results ---
        return res.status(200).json(engagementScores);

    } catch (error) {
        console.error("Error calculating engagement scores:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);
