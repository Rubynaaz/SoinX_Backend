# Testing the Cron Job with Array Data Structure

## Quick Start Testing

### Step 1: Start Development Server
```bash
npm run dev
```

### Step 2: Run the Cron Job
Open in browser or use curl:
```bash
# Without CRON_SECRET
curl http://localhost:3000/api/cron/update-dex-data

# With CRON_SECRET (if set in .env)
curl -H "Authorization: Bearer YOUR_CRON_SECRET" http://localhost:3000/api/cron/update-dex-data
```

### Step 3: Verify Data Was Saved
```bash
# View all contracts
curl http://localhost:3000/api/cron/verify-dex-data

# View specific contract
curl "http://localhost:3000/api/cron/verify-dex-data?contractAddress=YOUR_CONTRACT_ADDRESS"
```

## Expected Response from Cron Job

```json
{
  "message": "Cron job completed",
  "totalContracts": 10,
  "successCount": 8,
  "errorCount": 2,
  "errors": []
}
```

## Expected Response from Verify Endpoint

```json
{
  "success": true,
  "totalContracts": 5,
  "totalDataPoints": 25,
  "contracts": [
    {
      "contractAddress": "0x123...",
      "totalDataPoints": 5,
      "latestDataPoint": {
        "priceUsd": 1.25,
        "marketCap": 1050000,
        "timestamp": "2024-01-01T10:30:00.000Z"
      },
      "firstDataPoint": {
        "priceUsd": 1.20,
        "marketCap": 1000000,
        "timestamp": "2024-01-01T10:00:00.000Z"
      },
      "recentDataPoints": [
        { "priceUsd": 1.23, "marketCap": 1020000, "timestamp": "..." },
        { "priceUsd": 1.24, "marketCap": 1030000, "timestamp": "..." },
        { "priceUsd": 1.25, "marketCap": 1050000, "timestamp": "..." }
      ],
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

## Testing Array Growth

To verify that data is being appended to arrays (not creating new records):

1. **First Run**: Call the cron job
   ```bash
   curl http://localhost:3000/api/cron/update-dex-data
   ```

2. **Check Data**: Verify one contract has 1 data point
   ```bash
   curl "http://localhost:3000/api/cron/verify-dex-data?contractAddress=YOUR_CONTRACT"
   ```

3. **Second Run**: Call the cron job again (wait a few seconds)
   ```bash
   curl http://localhost:3000/api/cron/update-dex-data
   ```

4. **Verify Growth**: The same contract should now have 2 data points in the array
   ```bash
   curl "http://localhost:3000/api/cron/verify-dex-data?contractAddress=YOUR_CONTRACT"
   ```

## Testing Priority (Latest Contracts First)

The cron job processes contracts sorted by most recent `MessageDateTime` first. To verify:

1. Check the console logs when running the cron job
2. You should see: `Found X unique contract addresses (sorted by most recent first)`
3. The first contracts processed should be the ones with the most recent messages

## Using Prisma Studio (Visual Database Browser)

```bash
npx prisma studio
```

Then:
1. Navigate to `dex_latest_data` collection
2. Click on any contract address
3. You should see the `historicalData` array with all data points
4. Each time the cron runs, new entries are added to this array

## Testing with Postman/Thunder Client

1. **Method**: GET or POST
2. **URL**: `http://localhost:3000/api/cron/update-dex-data`
3. **Headers** (if CRON_SECRET is set):
   - Key: `Authorization`
   - Value: `Bearer YOUR_CRON_SECRET`

## Testing on Vercel

### Manual Trigger
```bash
curl https://your-app.vercel.app/api/cron/update-dex-data \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Check Vercel Logs
1. Go to Vercel Dashboard → Your Project → Functions
2. Click on the cron job function
3. View logs to see execution results

## Troubleshooting

### Issue: No data points in array
- Check if contract addresses exist in your database
- Verify Dexscreener API is returning data
- Check console logs for errors

### Issue: Data not appending
- Ensure Prisma client is regenerated: `npx prisma generate`
- Check database connection
- Verify the schema matches the code

### Issue: TypeScript errors
- Restart TypeScript server in your IDE
- Run: `npx prisma generate --schema=prisma/schema.prisma`
- Restart your IDE if needed

## Quick Test Script

Save this as `test-cron-array.sh`:

```bash
#!/bin/bash
echo "Testing Cron Job - Run 1"
curl http://localhost:3000/api/cron/update-dex-data
echo -e "\n\nWaiting 5 seconds..."
sleep 5
echo "Testing Cron Job - Run 2 (should append to arrays)"
curl http://localhost:3000/api/cron/update-dex-data
echo -e "\n\nVerifying data..."
curl http://localhost:3000/api/cron/verify-dex-data
```

Make it executable and run:
```bash
chmod +x test-cron-array.sh
./test-cron-array.sh
```

