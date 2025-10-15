import { PrismaClient as PrismaClientDb2 } from '../../../prisma/lib/generated/prisma/db2';
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const db2 = new PrismaClientDb2();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        const { id } = req.query;
        if (!id || typeof id !== "string") {
            return res.status(400).json({ message: "ID is required" });
        }

        const tweetsData = await db2.tweetsData.findMany({
            where: {
                user_id_str: id,
            },
        });

        const followersData = await db2.followerFollowingData.findMany({
            where: {
                target_username: "CryptoWizardd",
            },
        });

        const userData = await db2.userProfile.findMany({
            where: {
                id_str: "user_CryptoWizardd",
            },
        });

        console.log('userData', userData);

        const userProfile = userData.map(user => ({
            id: user.id,
            profile_banner_url: user.profile_banner_url,
            description: user.description,
            statuses_count: user.statuses_count,
            translator_type: user.translator_type,
            profile_url: user.profile_url,
            fast_followers_count: user.fast_followers_count,
            followers_count: user.followers_count,
            friends_count: user.friends_count,
            favourites_count: user.favourites_count,
            media_count: user.media_count,
            normal_followers_count: user.normal_followers_count,
            possibly_sensitive: user.possibly_sensitive,
            created_at: user.updated_time,
        }));

        const filterFollowersData = followersData.map(follower => ({
            id: follower.id,
            followers_count: follower.followers_count,
            friends_count: follower.friends_count,
            favourites_count: follower.favourites_count,
            created_at: follower.created_at,
            statuses_count: follower.statuses_count,
            verified: follower.verified,
            media_count: follower.media_count,
            lang: follower.lang,
            can_media_tag: follower.can_media_tag,
            advertiser_account_type: follower.advertiser_account_type,
            advertiser_account_service_levels: follower.advertiser_account_service_levels,
            analytics_type: follower.analytics_type,
            listed_count: follower.listed_count,
            screen_name: follower.screen_name,
            name: follower.name,
            profile_image_url: follower.profile_image_url,
        }));

        console.log('followersData', filterFollowersData);

        const Top10Followers = filterFollowersData.sort((a, b) => (b.followers_count || 0) - (a.followers_count || 0)).slice(0, 10);
        console.log('Top10Followers', Top10Followers);

        if (tweetsData.length === 0) {
            return res.status(404).json({ message: "Data not found" });
        }

        const filterTweetsData = tweetsData.map(tweet => ({
            id: tweet.id,
            bookmark_count: tweet.bookmark_count,
            favorite_count: tweet.favorite_count,
            reply_count: tweet.reply_count,
            retweet_count: tweet.retweet_count,
            created_at: tweet.created_at,
            tweetText: tweet.full_text,
        }));

        const averageLikeCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.favorite_count || 0), 0) / filterTweetsData.length;
        const averageReplyCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.reply_count || 0), 0) / filterTweetsData.length;
        const averageRetweetCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.retweet_count || 0), 0) / filterTweetsData.length;
        const averageBookmarkCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.bookmark_count || 0), 0) / filterTweetsData.length;

        console.log('averageLikeCount', averageLikeCount);
        console.log('averageReplyCount', averageReplyCount);
        console.log('averageRetweetCount', averageRetweetCount);
        console.log('averageBookmarkCount', averageBookmarkCount);

        const mostLikedTweet = filterTweetsData.sort((a, b) => (b.favorite_count || 0) - (a.favorite_count || 0))[0];
        const mostRepliedTweet = filterTweetsData.sort((a, b) => (b.reply_count || 0) - (a.reply_count || 0))[0];
        const mostRetweetedTweet = filterTweetsData.sort((a, b) => (b.retweet_count || 0) - (a.retweet_count || 0))[0];
        const mostBookmarkedTweet = filterTweetsData.sort((a, b) => (b.bookmark_count || 0) - (a.bookmark_count || 0))[0];

        return res.status(200).json({
            userProfile,
            analytics: {
                averageLikeCount: averageLikeCount,
                averageReplyCount: averageReplyCount,
                averageRetweetCount: averageRetweetCount,
                averageBookmarkCount: averageBookmarkCount,
            },
            tweets: {
                mostLikedTweet: mostLikedTweet,
                mostRepliedTweet: mostRepliedTweet,
                mostRetweetedTweet: mostRetweetedTweet,
                mostBookmarkedTweet: mostBookmarkedTweet,
            },
            followers: {
                Top10Followers: Top10Followers,
            },
        });
    } catch (error) {
        console.error("Error fetching groups:", error);
        if (res.statusCode === 404)
            return res.status(404).json({ message: "Groups not found" });
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);
