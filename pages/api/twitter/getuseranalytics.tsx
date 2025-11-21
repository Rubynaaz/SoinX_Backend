import { PrismaClient as PrismaClientDb2 } from '../../../prisma/lib/generated/prisma/db2';
import type { NextApiRequest, NextApiResponse } from "next";
import allowCors from "@/lib/allowCors";

const db2 = new PrismaClientDb2();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { username } = req.query;
        
        if (!username || typeof username !== "string") {
            return res.status(400).json({ message: "Username is required" });
        }

        // First, try to find user by screen_name in UserAnalytics
        let userAnalytics = await db2.userAnalytics.findFirst({
            where: {
                screen_name: username,
            },
        });

        // If not found, try to find by user_id_str (in case username is actually a user_id)
        if (!userAnalytics) {
            userAnalytics = await db2.userAnalytics.findUnique({
                where: {
                    user_id_str: username,
                },
            });
        }

        // If still not found, try to find by profile_url or extract from user_profiles_test
        if (!userAnalytics) {
            // Try to find in user_profiles_test to get user_id_str
            const userProfile = await db2.userProfileTest.findFirst({
                where: {
                    OR: [
                        { screen_name: username },
                        { user_id_str: username },
                        { profile_url: { contains: username } },
                    ],
                },
                select: {
                    user_id_str: true,
                    screen_name: true,
                },
            });

            if (userProfile?.user_id_str) {
                // Try to find analytics by user_id_str
                userAnalytics = await db2.userAnalytics.findUnique({
                    where: {
                        user_id_str: userProfile.user_id_str,
                    },
                });
            }
        }

        if (!userAnalytics) {
            return res.status(404).json({ 
                message: "User analytics not found. Please run the analytics processing script first." 
            });
        }

        // Fetch additional user profile data
        const userProfile = await db2.userProfileTest.findFirst({
            where: {
                user_id_str: userAnalytics.user_id_str,
            },
        });

        // Prepare time-series data for charts
        const tweets = userAnalytics.tweets || [];
        
        // Chart 1: Engagement over time (daily aggregation)
        const engagementOverTime = tweets.reduce((acc: any[], tweet) => {
            if (!tweet.tweet_date) return acc;
            
            const dateKey = new Date(tweet.tweet_date).toISOString().split('T')[0];
            const existing = acc.find(item => item.date === dateKey);
            
            const engagement = (tweet.likes || 0) + (tweet.replies || 0) + 
                              (tweet.retweets || 0) + (tweet.quotes || 0);
            
            if (existing) {
                existing.engagement += engagement;
                existing.likes += (tweet.likes || 0);
                existing.replies += (tweet.replies || 0);
                existing.retweets += (tweet.retweets || 0);
                existing.quotes += (tweet.quotes || 0);
                existing.views += parseFloat(tweet.views || '0');
                existing.tweetCount += 1;
            } else {
                acc.push({
                    date: dateKey,
                    engagement: engagement,
                    likes: tweet.likes || 0,
                    replies: tweet.replies || 0,
                    retweets: tweet.retweets || 0,
                    quotes: tweet.quotes || 0,
                    views: parseFloat(tweet.views || '0'),
                    tweetCount: 1,
                });
            }
            
            return acc;
        }, []).sort((a, b) => a.date.localeCompare(b.date));

        // Chart 2: Performance metrics over time
        const performanceOverTime = tweets.map(tweet => ({
            date: tweet.tweet_date ? new Date(tweet.tweet_date).toISOString().split('T')[0] : null,
            likes: tweet.likes || 0,
            replies: tweet.replies || 0,
            retweets: tweet.retweets || 0,
            views: parseFloat(tweet.views || '0'),
            engagement: (tweet.likes || 0) + (tweet.replies || 0) + 
                       (tweet.retweets || 0) + (tweet.quotes || 0),
        })).sort((a, b) => {
            if (!a.date || !b.date) return 0;
            return a.date.localeCompare(b.date);
        });

        // Chart 3: Monthly aggregation
        const monthlyData = tweets.reduce((acc: any[], tweet) => {
            if (!tweet.tweet_date) return acc;
            
            const date = new Date(tweet.tweet_date);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            const existing = acc.find(item => item.month === monthKey);
            
            const engagement = (tweet.likes || 0) + (tweet.replies || 0) + 
                              (tweet.retweets || 0) + (tweet.quotes || 0);
            
            if (existing) {
                existing.engagement += engagement;
                existing.likes += (tweet.likes || 0);
                existing.replies += (tweet.replies || 0);
                existing.retweets += (tweet.retweets || 0);
                existing.views += parseFloat(tweet.views || '0');
                existing.tweetCount += 1;
            } else {
                acc.push({
                    month: monthKey,
                    engagement: engagement,
                    likes: tweet.likes || 0,
                    replies: tweet.replies || 0,
                    retweets: tweet.retweets || 0,
                    views: parseFloat(tweet.views || '0'),
                    tweetCount: 1,
                });
            }
            
            return acc;
        }, []).sort((a, b) => a.month.localeCompare(b.month));

        // Chart 4: Top performing tweets
        const topTweets = tweets
            .map(tweet => ({
                tweet_id: tweet.tweet_id_str,
                text: tweet.text,
                date: tweet.tweet_date ? new Date(tweet.tweet_date).toISOString() : null,
                likes: tweet.likes || 0,
                replies: tweet.replies || 0,
                retweets: tweet.retweets || 0,
                views: parseFloat(tweet.views || '0'),
                quotes: tweet.quotes || 0,
                engagement: (tweet.likes || 0) + (tweet.replies || 0) + 
                           (tweet.retweets || 0) + (tweet.quotes || 0),
                url: tweet.url,
            }))
            .sort((a, b) => b.engagement - a.engagement)
            .slice(0, 10);

        // Chart 5: Engagement distribution (pie chart data)
        const engagementDistribution = {
            likes: userAnalytics.total_likes,
            replies: userAnalytics.total_replies,
            retweets: userAnalytics.total_retweets,
            quotes: userAnalytics.total_quotes,
        };

        // Chart 6: Average metrics comparison
        const averageMetrics = {
            likes: userAnalytics.avg_likes_per_tweet,
            replies: userAnalytics.avg_replies_per_tweet,
            retweets: userAnalytics.avg_retweets_per_tweet,
            views: userAnalytics.avg_views_per_tweet,
            engagement: userAnalytics.avg_engagement_per_tweet,
        };

        // Prepare response data
        const response = {
            user: {
                user_id_str: userAnalytics.user_id_str,
                name: userAnalytics.name,
                screen_name: userAnalytics.screen_name,
                description: userAnalytics.description,
                profile_image_url_https: userAnalytics.profile_image_url_https,
                profile_banner_url: userAnalytics.profile_banner_url,
                profile_url: userAnalytics.profile_url,
                verified: userAnalytics.verified,
                location: userAnalytics.location,
                created_at: userAnalytics.created_at,
                followers_count: userAnalytics.followers_count,
                friends_count: userAnalytics.friends_count,
                statuses_count: userAnalytics.statuses_count,
                favourites_count: userAnalytics.favourites_count,
                listed_count: userAnalytics.listed_count,
                media_count: userAnalytics.media_count,
            },
            analytics: {
                // Basic metrics
                total_tweets: userAnalytics.total_tweets,
                total_likes: userAnalytics.total_likes,
                total_replies: userAnalytics.total_replies,
                total_retweets: userAnalytics.total_retweets,
                total_views: userAnalytics.total_views,
                total_quotes: userAnalytics.total_quotes,
                
                // Average metrics
                averages: averageMetrics,
                
                // Engagement metrics
                total_engagement: userAnalytics.total_engagement,
                avg_engagement_per_tweet: userAnalytics.avg_engagement_per_tweet,
                engagement_rate: userAnalytics.engagement_rate,
                engagement_rate_by_followers: userAnalytics.engagement_rate_by_followers,
                
                // Mindshare metrics
                mindshare_score: userAnalytics.mindshare_score,
                reach_score: userAnalytics.reach_score,
                influence_score: userAnalytics.influence_score,
                conversation_score: userAnalytics.conversation_score,
                virality_score: userAnalytics.virality_score,
                
                // Timestamps
                first_tweet_date: userAnalytics.first_tweet_date,
                last_tweet_date: userAnalytics.last_tweet_date,
                updated_at: userAnalytics.updated_at,
            },
            charts: {
                // Time-series data for line charts
                engagementOverTime: engagementOverTime,
                performanceOverTime: performanceOverTime,
                
                // Monthly aggregation for bar charts
                monthlyData: monthlyData,
                
                // Top performing tweets
                topTweets: topTweets,
                
                // Distribution data for pie charts
                engagementDistribution: engagementDistribution,
                
                // Summary statistics
                summary: {
                    totalTweets: userAnalytics.total_tweets,
                    totalEngagement: userAnalytics.total_engagement,
                    avgEngagementPerTweet: userAnalytics.avg_engagement_per_tweet,
                    engagementRate: userAnalytics.engagement_rate,
                    mindshareScore: userAnalytics.mindshare_score,
                },
            },
            // Raw tweets data (limited to recent for performance)
            recentTweets: tweets
                .filter(t => t.tweet_date)
                .sort((a, b) => {
                    if (!a.tweet_date || !b.tweet_date) return 0;
                    return new Date(b.tweet_date).getTime() - new Date(a.tweet_date).getTime();
                })
                .slice(0, 50)
                .map(tweet => ({
                    id: tweet.tweet_id_str,
                    text: tweet.text,
                    date: tweet.tweet_date ? new Date(tweet.tweet_date).toISOString() : null,
                    likes: tweet.likes,
                    replies: tweet.replies,
                    retweets: tweet.retweets,
                    views: tweet.views,
                    quotes: tweet.quotes,
                    url: tweet.url,
                })),
        };

        return res.status(200).json(response);

    } catch (error) {
        console.error("Error fetching user analytics:", error);
        return res.status(500).json({ 
            message: "Internal server error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
}

export default allowCors(handler);

