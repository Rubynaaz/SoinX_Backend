# Testing the Cron Job

## Method 1: Test Locally (Recommended)

### Step 1: Start your development server
```bash
npm run dev
```

### Step 2: Test using curl
```bash
# Without CRON_SECRET (if not set in .env)
curl http://localhost:3000/api/cron/update-dex-data

# With CRON_SECRET (if set in .env)
curl -H "Authorization: Bearer YOUR_CRON_SECRET" http://localhost:3000/api/cron/update-dex-data
```

### Step 3: Test using the test script
```bash
# Test locally without secret
./test-cron.sh local

# Test locally with secret
./test-cron.sh local "your-secret-here"
```

### Step 4: Test in browser
Open: `http://localhost:3000/api/cron/update-dex-data`

## Method 2: Test with Postman/Thunder Client

1. **Method**: GET or POST
2. **URL**: `http://localhost:3000/api/cron/update-dex-data`
3. **Headers** (if CRON_SECRET is set):
   - Key: `Authorization`
   - Value: `Bearer YOUR_CRON_SECRET`

## Method 3: Test on Vercel

### Option A: Manual Trigger
```bash
# Replace with your actual Vercel URL
curl https://your-app.vercel.app/api/cron/update-dex-data \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Option B: Using Vercel Dashboard
1. Go to your Vercel project dashboard
2. Navigate to "Functions" or "Cron Jobs"
3. You can manually trigger the cron job from there

### Option C: Check Vercel Logs
1. Go to Vercel Dashboard → Your Project → Functions
2. Click on the cron job function
3. View logs to see execution results

## Method 4: Verify Data in Database

After running the cron job, check if data was saved:

```typescript
// Create a test API route or use Prisma Studio
import prisma from "@/lib/prisma";

const latestData = await prisma.dexLatestData.findMany({
  orderBy: { timestamp: "desc" },
  take: 10
});

console.log(latestData);
```

Or use Prisma Studio:
```bash
npx prisma studio
```

Then navigate to the `dex_latest_data` collection.

## Expected Response

Success response:
```json
{
  "message": "Cron job completed",
  "totalContracts": 10,
  "successCount": 8,
  "errorCount": 2,
  "errors": []
}
```

## Troubleshooting

1. **401 Unauthorized**: Make sure CRON_SECRET matches in your request header
2. **No data saved**: Check if contract addresses exist in your database
3. **Rate limiting**: The script includes delays between batches to avoid API rate limits
4. **Check logs**: Look at your terminal/console for detailed logs

## Testing with Limited Contracts

To test with fewer contracts, you can temporarily modify the query in the cron job to limit results:

```typescript
const groupEntries = await prisma.groupUserCountsWebhookTest.findMany({
  where: {
    ContractAddress: {
      not: null,
    },
  },
  select: {
    ContractAddress: true,
  },
  distinct: ["ContractAddress"],
  take: 5  // Add this for testing with only 5 contracts
});
```
