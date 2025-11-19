import { PrismaClient as PrismaClientDb2 } from '../../../prisma/lib/generated/prisma/db2';
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";
import { use } from 'react';

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

        const tweetsData = await db2.tweetsDataTest.findMany({
            where: {
                user_id_str: id,
            },
        });

        const followersData = await db2.followersDataTest.findMany({
            where: {
                target_username: id,
            },
        });

        const userProfile = await db2.userProfileTest.findMany({
            where: {
                user_id_str: id,
            },
        });

        console.log('userProfile', userProfile);

        const graphData = tweetsData.map(tweet => ({
            date: tweet.created_at,
            likes: tweet.favorite_count || 0,
            retweets: tweet.retweet_count || 0,
            replies: tweet.reply_count || 0,
            views: tweet.views_count || 0,
        }));

        const filterUserProfile = userProfile.map(user => ({
            id: user.id,
            name: user.name,
            description: user.description,
            url: user.url,
            location: user.location,
            verified: user.verified,
            followers_count: user.followers_count,
            friends_count: user.friends_count,
            fast_followers_count: user.fast_followers_count,
            listed_count: user.listed_count,
            favourites_count: user.favourites_count,
            statuses_count: user.statuses_count,
            media_count: user.media_count,
            normal_followers_count: user.normal_followers_count,
            profile_banner_url: user.profile_banner_url,
            profile_image_url_https: user.profile_image_url_https,
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
            email: follower.email,
            geo_enabled: follower.geo_enabled,
            location: follower.location,
        }));
// this is the top 10 followers
        const top10Followers = filterFollowersData.sort((a, b) => (b.followers_count || 0) - (a.followers_count || 0)).slice(0, 10);

        const filterTweetsData = tweetsData.map(tweet => ({
            id: tweet.id_str,
            tweetText: tweet.full_text,
            created_at: tweet.created_at,
            bookmark_count: tweet.bookmark_count,
            views_count: tweet.views_count || 0,
            favorite_count: tweet.favorite_count,
            reply_count: tweet.reply_count,
            retweet_count: tweet.retweet_count,
            twitterUrl: tweet.twitterUrl,
            media_url_https: tweet.extended_entities?.media[0]?.media_url_https,
            lang: tweet.lang,
            quote_count: tweet.quote_count,
        }));

        const TweetsData = {
            filterTweetsData: filterTweetsData
                .slice(0, 4) // <-- Take only first 10 items
                .map(tweet => ({
                    ...tweet,
                    userProfile: userProfile[0]?.profile_image_url_https || null,
                    userId: userProfile[0]?.id || null,
                    userName: userProfile[0]?.name || null,
                }))
        };

        console.log('filterTweetsData', filterTweetsData);

        const top10Tweets = filterTweetsData.sort((a, b) => (b.favorite_count || 0) - (a.favorite_count || 0)).slice(0, 1000);

        const averageLikeCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.favorite_count || 0), 0) / filterTweetsData.length;
        const averageViewCount = filterTweetsData.reduce((acc, tweet) => acc + (Number(tweet.views_count) || 0), 0) / filterTweetsData.length;
        console.log('averageViewCount', averageViewCount);
        const averageReplyCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.reply_count || 0), 0) / filterTweetsData.length;
        console.log('averageReplyCount', averageReplyCount);
        const averageRetweetCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.retweet_count || 0), 0) / filterTweetsData.length;
        console.log('averageRetweetCount', averageRetweetCount);
        const averageQuoteCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.quote_count || 0), 0) / filterTweetsData.length;
        const totalLikesCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.favorite_count || 0), 0)
        console.log('totalLikesCount', totalLikesCount);
        const totalReplyCount = filterTweetsData.reduce((acc, tweet) => acc + (tweet.retweet_count || 0), 0)
        const totalViewCount = filterTweetsData.reduce((acc, tweet) => acc + (Number(tweet.views_count) || 0), 0)
        console.log('totalLikesCount', totalLikesCount);


        return res.status(200).json({
            userProfile: filterUserProfile,
            analytics: {
                averageLikeCount: averageLikeCount,
                averageReplyCount: averageReplyCount,
                averageRetweetCount: averageRetweetCount,
                averageQuoteCount: averageQuoteCount,
                totalLikesCount: totalLikesCount,
                totalReplyCount: totalReplyCount,
                totalViewCount: totalViewCount,
                averageViewCount: averageViewCount,
            },
            tweetsData: TweetsData,
            followersData: top10Followers,
            graphData: graphData,
        });
    } catch (error) {
        console.error("Error fetching groups:", error);
        if (res.statusCode === 404)
            return res.status(404).json({ message: "Groups not found" });
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default allowCors(handler);
