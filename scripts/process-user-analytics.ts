import { PrismaClient as PrismaClientDb2 } from '../prisma/lib/generated/prisma/db2/index.js';

const db2 = new PrismaClientDb2();

interface TweetAnalytics {
    tweet_id_str: string;
    text: string | null;
    created_at: string | null;
    tweet_date: Date | null;
    likes: number | null;
    replies: number | null;
    retweets: number | null;
    views: string | null;
    quotes: number | null;
    url: string | null;
}

interface UserAnalyticsData {
    user_id_str: string;
    name: string | null;
    screen_name: string | null;
    description: string | null;
    profile_image_url_https: string | null;
    profile_banner_url: string | null;
    profile_url: string | null;
    verified: boolean | null;
    followers_count: number | null;
    friends_count: number | null;
    statuses_count: number | null;
    location: string | null;
    created_at: string | null;
    favourites_count: number | null;
    listed_count: number | null;
    media_count: number | null;
    normal_followers_count: number | null;
    pinned_tweet_ids_str: string[];
    possibly_sensitive: boolean | null;
    profile_interstitial_type: string | null;
    translator_type: string | null;
    withheld_in_countries: string[];
    
    // Aggregated tweet analytics
    total_tweets: number;
    total_likes: number;
    total_replies: number;
    total_retweets: number;
    total_views: number;
    total_quotes: number;
    avg_likes_per_tweet: number | null;
    avg_replies_per_tweet: number | null;
    avg_retweets_per_tweet: number | null;
    avg_views_per_tweet: number | null;
    
    // Engagement Metrics
    total_engagement: number;
    avg_engagement_per_tweet: number | null;
    engagement_rate: number | null;
    engagement_rate_by_followers: number | null;
    
    // Mindshare Metrics
    mindshare_score: number | null;
    reach_score: number | null;
    influence_score: number | null;
    conversation_score: number | null;
    virality_score: number | null;
    
    tweets: TweetAnalytics[];
    first_tweet_date: Date | null;
    last_tweet_date: Date | null;
}

// Helper function to parse views_count string to number
function parseViewsCount(views: string | null | undefined): number {
    if (!views) return 0;
    const parsed = parseInt(views, 10);
    return isNaN(parsed) ? 0 : parsed;
}

// Helper function to parse Twitter date string to Date
function parseTwitterDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    try {
        return new Date(dateStr);
    } catch {
        return null;
    }
}

// Helper function to extract screen_name from profile_url (fallback)
function extractScreenName(profileUrl: string | null | undefined): string | null {
    if (!profileUrl) return null;
    try {
        // Twitter profile URLs are like: https://twitter.com/username
        const match = profileUrl.match(/twitter\.com\/([^\/\?]+)/i);
        return match ? match[1] : null;
    } catch {
        return null;
    }
}

// Calculate engagement metrics
function calculateEngagementMetrics(
    totalLikes: number,
    totalReplies: number,
    totalRetweets: number,
    totalQuotes: number,
    totalViews: number,
    totalTweets: number,
    followersCount: number | null
) {
    const totalEngagement = totalLikes + totalReplies + totalRetweets + totalQuotes;
    const avgEngagementPerTweet = totalTweets > 0 ? totalEngagement / totalTweets : null;
    
    // Engagement rate based on views (how many people who viewed engaged)
    const engagementRate = totalViews > 0 ? (totalEngagement / totalViews) * 100 : null;
    
    // Engagement rate based on followers (how many followers engaged)
    const engagementRateByFollowers = followersCount && followersCount > 0 
        ? (totalEngagement / followersCount) * 100 
        : null;
    
    return {
        totalEngagement,
        avgEngagementPerTweet: avgEngagementPerTweet !== null ? parseFloat(avgEngagementPerTweet.toFixed(2)) : null,
        engagementRate: engagementRate !== null ? parseFloat(engagementRate.toFixed(4)) : null,
        engagementRateByFollowers: engagementRateByFollowers !== null ? parseFloat(engagementRateByFollowers.toFixed(4)) : null,
    };
}

// Calculate mindshare metrics
function calculateMindshareMetrics(
    totalViews: number,
    totalRetweets: number,
    totalQuotes: number,
    totalReplies: number,
    totalTweets: number,
    followersCount: number | null
) {
    // Normalize scores to 0-100 scale for comparison
    
    // Reach Score: Based on total views (normalized)
    // Assuming max views could be in millions, we'll use a logarithmic scale
    const reachScore = totalViews > 0 
        ? Math.min(100, Math.log10(totalViews + 1) * 10) 
        : 0;
    
    // Influence Score: Based on retweets and quotes (content sharing)
    // Measures how much others share/amplify the content
    const totalShares = totalRetweets + totalQuotes;
    const avgSharesPerTweet = totalTweets > 0 ? totalShares / totalTweets : 0;
    const influenceScore = Math.min(100, avgSharesPerTweet * 2); // Scale: 50 shares/tweet = 100 score
    
    // Conversation Score: Based on replies (conversations started)
    // Measures how much the content generates discussion
    const avgRepliesPerTweet = totalTweets > 0 ? totalReplies / totalTweets : 0;
    const conversationScore = Math.min(100, avgRepliesPerTweet * 5); // Scale: 20 replies/tweet = 100 score
    
    // Virality Score: Based on retweets/quotes ratio to views
    // Measures how shareable the content is
    const viralityScore = totalViews > 0 
        ? Math.min(100, (totalShares / totalViews) * 10000) // Scale: 1% share rate = 100 score
        : 0;
    
    // Mindshare Score: Composite weighted average
    // Weights: Reach (30%), Influence (30%), Conversation (20%), Virality (20%)
    const mindshareScore = (
        reachScore * 0.3 +
        influenceScore * 0.3 +
        conversationScore * 0.2 +
        viralityScore * 0.2
    );
    
    return {
        mindshareScore: parseFloat(mindshareScore.toFixed(2)),
        reachScore: parseFloat(reachScore.toFixed(2)),
        influenceScore: parseFloat(influenceScore.toFixed(2)),
        conversationScore: parseFloat(conversationScore.toFixed(2)),
        viralityScore: parseFloat(viralityScore.toFixed(2)),
    };
}

async function processUserAnalytics() {
    try {
        console.log("🚀 Starting user analytics processing...");
        console.log("=" .repeat(60));

        // Step 1: Fetch all users
        console.log("\n📊 Step 1: Fetching all users from user_profiles_test...");
        const allUsers = await db2.userProfileTest.findMany({
            select: {
                user_id_str: true,
                name: true,
                description: true,
                profile_image_url_https: true,
                profile_banner_url: true,
                screen_name: true,
                profile_url: true,
                verified: true,
                followers_count: true,
                friends_count: true,
                statuses_count: true,
                location: true,
                created_at: true,
                favourites_count: true,
                listed_count: true,
                media_count: true,
                normal_followers_count: true,
                pinned_tweet_ids_str: true,
                possibly_sensitive: true,
                profile_interstitial_type: true,
                translator_type: true,
                withheld_in_countries: true,
            },
        });

        console.log(`✅ Found ${allUsers.length} users to process`);

        // Filter out users without user_id_str
        const validUsers = allUsers.filter((u) => u.user_id_str && u.user_id_str.trim().length > 0);
        console.log(`✅ ${validUsers.length} users with valid user_id_str`);

        if (validUsers.length === 0) {
            console.log("⚠️  No valid users found. Exiting...");
            return;
        }

        // Step 2: Process each user
        let processedCount = 0;
        let successCount = 0;
        let errorCount = 0;
        const userIds = validUsers.map((u) => u.user_id_str!);

        console.log("\n📊 Step 2: Fetching all tweets for users...");
        const allTweets = await db2.tweetsDataTest.findMany({
            where: {
                user_id_str: { in: userIds },
            },
            select: {
                id_str: true,
                user_id_str: true,
                full_text: true,
                created_at: true,
                favorite_count: true,
                reply_count: true,
                retweet_count: true,
                views_count: true,
                quote_count: true,
                url: true
            },
            orderBy: {
                created_at: 'asc',
            },
        });

        console.log(`✅ Found ${allTweets.length} total tweets`);

        // Group tweets by user_id_str
        const tweetsByUser = new Map<string, typeof allTweets>();
        for (const tweet of allTweets) {
            const userId = tweet.user_id_str;
            if (!userId) continue;

            if (!tweetsByUser.has(userId)) {
                tweetsByUser.set(userId, []);
            }
            tweetsByUser.get(userId)!.push(tweet);
        }

        console.log(`✅ Grouped tweets for ${tweetsByUser.size} users`);

        // Step 3: Process each user and generate analytics
        console.log("\n📊 Step 3: Processing user analytics...");
        console.log("=" .repeat(60));

        for (const user of validUsers) {
            processedCount++;
            const userId = user.user_id_str!;

            try {
                console.log(`\n[${processedCount}/${validUsers.length}] Processing user: ${user.name || userId}`);

                const userTweets = tweetsByUser.get(userId) || [];
                console.log(`  📝 Found ${userTweets.length} tweets for this user`);

                if (userTweets.length === 0) {
                    console.log(`  ⚠️  No tweets found, skipping...`);
                    continue;
                }

                // Process tweets and calculate analytics
                const tweetAnalytics: TweetAnalytics[] = [];
                let totalLikes = 0;
                let totalReplies = 0;
                let totalRetweets = 0;
                let totalViews = 0;
                let totalQuotes = 0;
                let firstTweetDate: Date | null = null;
                let lastTweetDate: Date | null = null;

                for (const tweet of userTweets) {
                    const likes = tweet.favorite_count ?? 0;
                    const replies = tweet.reply_count ?? 0;
                    const retweets = tweet.retweet_count ?? 0;
                    const views = parseViewsCount(tweet.views_count);
                    const quotes = tweet.quote_count ?? 0;

                    totalLikes += likes;
                    totalReplies += replies;
                    totalRetweets += retweets;
                    totalViews += views;
                    totalQuotes += quotes;

                    const tweetDate = parseTwitterDate(tweet.created_at);

                    tweetAnalytics.push({
                        tweet_id_str: tweet.id_str,
                        text: tweet.full_text || null,
                        created_at: tweet.created_at || null,
                        tweet_date: tweetDate,
                        likes: likes > 0 ? likes : null,
                        replies: replies > 0 ? replies : null,
                        retweets: retweets > 0 ? retweets : null,
                        views: tweet.views_count || null,
                        quotes: quotes > 0 ? quotes : null,
                        url: tweet.url || null,
                    });

                    // Track first and last tweet dates
                    if (tweetDate) {
                        if (!firstTweetDate || tweetDate < firstTweetDate) {
                            firstTweetDate = tweetDate;
                        }
                        if (!lastTweetDate || tweetDate > lastTweetDate) {
                            lastTweetDate = tweetDate;
                        }
                    }
                }

                // Calculate averages
                const tweetCount = userTweets.length;
                const avgLikes = tweetCount > 0 ? totalLikes / tweetCount : null;
                const avgReplies = tweetCount > 0 ? totalReplies / tweetCount : null;
                const avgRetweets = tweetCount > 0 ? totalRetweets / tweetCount : null;
                const avgViews = tweetCount > 0 ? totalViews / tweetCount : null;

                // Calculate engagement metrics
                const engagementMetrics = calculateEngagementMetrics(
                    totalLikes,
                    totalReplies,
                    totalRetweets,
                    totalQuotes,
                    totalViews,
                    tweetCount,
                    user.followers_count || null
                );

                // Calculate mindshare metrics
                const mindshareMetrics = calculateMindshareMetrics(
                    totalViews,
                    totalRetweets,
                    totalQuotes,
                    totalReplies,
                    tweetCount,
                    user.followers_count || null
                );

                // Use screen_name from user data, fallback to extraction from profile_url
                const screenName = user.screen_name || extractScreenName(user.profile_url);

                // Prepare analytics data
                const analyticsData: UserAnalyticsData = {
                    user_id_str: userId,
                    name: user.name || null,
                    screen_name: screenName,
                    description: user.description || null,
                    profile_image_url_https: user.profile_image_url_https || null,
                    profile_banner_url: user.profile_banner_url || null,
                    profile_url: user.profile_url || null,
                    verified: user.verified || null,
                    followers_count: user.followers_count || null,
                    friends_count: user.friends_count || null,
                    statuses_count: user.statuses_count || null,
                    location: user.location || null,
                    created_at: user.created_at || null,
                    favourites_count: user.favourites_count || null,
                    listed_count: user.listed_count || null,
                    media_count: user.media_count || null,
                    normal_followers_count: user.normal_followers_count || null,
                    pinned_tweet_ids_str: user.pinned_tweet_ids_str || [],
                    possibly_sensitive: user.possibly_sensitive || null,
                    profile_interstitial_type: user.profile_interstitial_type || null,
                    translator_type: user.translator_type || null,
                    withheld_in_countries: user.withheld_in_countries || [],
                    total_tweets: tweetCount,
                    total_likes: totalLikes,
                    total_replies: totalReplies,
                    total_retweets: totalRetweets,
                    total_views: totalViews,
                    total_quotes: totalQuotes,
                    avg_likes_per_tweet: avgLikes !== null ? parseFloat(avgLikes.toFixed(2)) : null,
                    avg_replies_per_tweet: avgReplies !== null ? parseFloat(avgReplies.toFixed(2)) : null,
                    avg_retweets_per_tweet: avgRetweets !== null ? parseFloat(avgRetweets.toFixed(2)) : null,
                    avg_views_per_tweet: avgViews !== null ? parseFloat(avgViews.toFixed(2)) : null,
                    total_engagement: engagementMetrics.totalEngagement,
                    avg_engagement_per_tweet: engagementMetrics.avgEngagementPerTweet,
                    engagement_rate: engagementMetrics.engagementRate,
                    engagement_rate_by_followers: engagementMetrics.engagementRateByFollowers,
                    mindshare_score: mindshareMetrics.mindshareScore,
                    reach_score: mindshareMetrics.reachScore,
                    influence_score: mindshareMetrics.influenceScore,
                    conversation_score: mindshareMetrics.conversationScore,
                    virality_score: mindshareMetrics.viralityScore,
                    tweets: tweetAnalytics,
                    first_tweet_date: firstTweetDate,
                    last_tweet_date: lastTweetDate,
                };

                // Upsert analytics data
                const existing = await db2.userAnalytics.findUnique({
                    where: { user_id_str: userId },
                });

                if (existing) {
                    await db2.userAnalytics.update({
                        where: { user_id_str: userId },
                        data: analyticsData,
                    });
                    console.log(`  ✅ Updated analytics for user: ${user.name || userId}`);
                } else {
                    await db2.userAnalytics.create({
                        data: analyticsData,
                    });
                    console.log(`  ✅ Created analytics for user: ${user.name || userId}`);
                }

                // Log summary
                console.log(`  📈 Summary:`);
                console.log(`     - Total Tweets: ${tweetCount}`);
                console.log(`     - Total Likes: ${totalLikes.toLocaleString()}`);
                console.log(`     - Total Replies: ${totalReplies.toLocaleString()}`);
                console.log(`     - Total Retweets: ${totalRetweets.toLocaleString()}`);
                console.log(`     - Total Views: ${totalViews.toLocaleString()}`);
                console.log(`     - Avg Likes/Tweet: ${avgLikes?.toFixed(2) || 'N/A'}`);
                console.log(`     - Avg Replies/Tweet: ${avgReplies?.toFixed(2) || 'N/A'}`);
                console.log(`     - Avg Retweets/Tweet: ${avgRetweets?.toFixed(2) || 'N/A'}`);
                console.log(`  💡 Engagement Metrics:`);
                console.log(`     - Total Engagement: ${engagementMetrics.totalEngagement.toLocaleString()}`);
                console.log(`     - Avg Engagement/Tweet: ${engagementMetrics.avgEngagementPerTweet?.toFixed(2) || 'N/A'}`);
                console.log(`     - Engagement Rate: ${engagementMetrics.engagementRate?.toFixed(4) || 'N/A'}%`);
                console.log(`     - Engagement Rate (by Followers): ${engagementMetrics.engagementRateByFollowers?.toFixed(4) || 'N/A'}%`);
                console.log(`  🧠 Mindshare Metrics:`);
                console.log(`     - Mindshare Score: ${mindshareMetrics.mindshareScore.toFixed(2)}/100`);
                console.log(`     - Reach Score: ${mindshareMetrics.reachScore.toFixed(2)}/100`);
                console.log(`     - Influence Score: ${mindshareMetrics.influenceScore.toFixed(2)}/100`);
                console.log(`     - Conversation Score: ${mindshareMetrics.conversationScore.toFixed(2)}/100`);
                console.log(`     - Virality Score: ${mindshareMetrics.viralityScore.toFixed(2)}/100`);

                successCount++;
            } catch (error) {
                errorCount++;
                console.error(`  ❌ Error processing user ${user.name || userId}:`, error);
            }
        }

        // Final summary
        console.log("\n" + "=".repeat(60));
        console.log("🎉 User Analytics Processing Complete!");
        console.log("=".repeat(60));
        console.log(`📊 Total Users Processed: ${processedCount}`);
        console.log(`✅ Successfully Processed: ${successCount}`);
        console.log(`❌ Errors: ${errorCount}`);
        console.log(`📝 Total Analytics Records: ${successCount}`);
        console.log("=".repeat(60));
    } catch (error) {
        console.error("\n❌ Fatal error processing user analytics:", error);
        throw error;
    } finally {
        await db2.$disconnect();
        console.log("\n🔌 Disconnected from database");
    }
}

// Run the script if executed directly
if (require.main === module) {
    processUserAnalytics()
        .then(() => {
            console.log("\n✅ Script completed successfully");
            process.exit(0);
        })
        .catch((error) => {
            console.error("\n❌ Script failed:", error);
            process.exit(1);
        });
}

export default processUserAnalytics;

