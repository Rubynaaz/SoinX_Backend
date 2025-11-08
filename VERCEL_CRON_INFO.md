# Vercel Cron Job Configuration (Hobby Plan)

## Schedule

- **Current Schedule**: `0 * * * *` (Every hour at minute 0)
- **Plan**: Hobby Plan
- **Timing Variance**: On Hobby plan, cron jobs may trigger anywhere within the hour window
  - Example: A job scheduled for 1:00 AM may run between 1:00 AM - 1:59 AM

## Why Hourly?

1. **Hobby Plan Limitations**: More predictable timing with hourly intervals
2. **Processing Time**: Gives enough time to process all contracts (with rate limiting)
3. **Data Collection**: Still provides 24 data points per day per contract

## Processing Details

- **Rate Limit**: 250 requests/minute (respects Dexscreener's 300/min limit)
- **Processing**: Sequential, one contract at a time
- **Estimated Time**: 
  - 100 contracts ≈ 24 seconds
  - 500 contracts ≈ 2 minutes
  - 1000 contracts ≈ 4 minutes
  - All contracts will complete well within the hour window

## Alternative Schedules (if needed)

If you upgrade to Pro plan and want more frequent updates:

```json
{
  "crons": [
    {
      "path": "/api/cron/update-dex-data",
      "schedule": "*/15 * * * *"  // Every 15 minutes (Pro plan recommended)
    }
  ]
}
```

Or for every 30 minutes:
```json
{
  "crons": [
    {
      "path": "/api/cron/update-dex-data",
      "schedule": "*/30 * * * *"  // Every 30 minutes
    }
  ]
}
```

## Monitoring

Check cron job execution in:
- Vercel Dashboard → Your Project → Settings → Cron Jobs
- View execution logs and timing variance

