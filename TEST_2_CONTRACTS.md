# Testing with 2 Contract Addresses (1 Minute Interval)

## Current Configuration

- **Contract Limit**: 2 (default)
- **Schedule**: Every 1 minute (`* * * * *`)
- **Mode**: TEST mode

## How to Test

### Method 1: Test Locally (Recommended)

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Run the cron job manually:**
   ```bash
   # Default: processes 2 contracts
   curl http://localhost:3000/api/cron/update-dex-data
   
   # Or specify limit via query parameter
   curl "http://localhost:3000/api/cron/update-dex-data?limit=2"
   ```

3. **Verify the data:**
   ```bash
   curl http://localhost:3000/api/cron/verify-dex-data
   ```

4. **Wait 1 minute and run again** to see arrays growing:
   ```bash
   curl http://localhost:3000/api/cron/update-dex-data
   curl http://localhost:3000/api/cron/verify-dex-data
   ```

### Method 2: Using Environment Variable

Set `CRON_CONTRACT_LIMIT` in your `.env` file:
```env
CRON_CONTRACT_LIMIT=2
```

Then the cron job will automatically use this limit.

### Method 3: Test with Query Parameter

You can override the limit via query parameter:
```bash
# Process 2 contracts
curl "http://localhost:3000/api/cron/update-dex-data?limit=2"

# Process 5 contracts
curl "http://localhost:3000/api/cron/update-dex-data?limit=5"

# Process ALL contracts (set limit to 0)
curl "http://localhost:3000/api/cron/update-dex-data?limit=0"
```

## Expected Response

```json
{
  "message": "Cron job completed",
  "mode": "TEST",
  "contractLimit": 2,
  "totalContracts": 2,
  "successCount": 2,
  "errorCount": 0,
  "processedContracts": [
    "0x123...",
    "0x456..."
  ],
  "errors": []
}
```

## Switching to Production Mode

### Option 1: Set Environment Variable
In your `.env` or Vercel environment variables:
```env
CRON_CONTRACT_LIMIT=0  # 0 means ALL contracts
```

### Option 2: Update vercel.json Schedule
Change the schedule back to 15 minutes:
```json
{
  "crons": [
    {
      "path": "/api/cron/update-dex-data",
      "schedule": "*/15 * * * *"
    }
  ]
}
```

### Option 3: Update Code Default
Change the default in `update-dex-data.ts`:
```typescript
const contractLimit = process.env.CRON_CONTRACT_LIMIT 
  ? parseInt(process.env.CRON_CONTRACT_LIMIT, 10) 
  : (req.query.limit ? parseInt(req.query.limit as string, 10) : 0); // Change 2 to 0
```

## Monitoring

### Check Console Logs
You should see:
```
Starting cron job: Update Dex Data
Running in TEST mode with limit: 2
Found 2 unique contract addresses (sorted by most recent first)
Test mode: Processing only 2 contract(s): ['0x123...', '0x456...']
Cron job completed. Success: 2, Errors: 0
```

### Verify Data Growth
After multiple runs (every minute), check that arrays are growing:
```bash
curl http://localhost:3000/api/cron/verify-dex-data
```

Each contract should have multiple data points in the `historicalData` array.

## Quick Test Script

Create `test-2-contracts.sh`:
```bash
#!/bin/bash
echo "Test 1: First run"
curl http://localhost:3000/api/cron/update-dex-data
echo -e "\n\nWaiting 60 seconds for next run..."
sleep 60
echo "Test 2: Second run (arrays should grow)"
curl http://localhost:3000/api/cron/update-dex-data
echo -e "\n\nVerifying data..."
curl http://localhost:3000/api/cron/verify-dex-data
```

Make it executable:
```bash
chmod +x test-2-contracts.sh
./test-2-contracts.sh
```

## Notes

- The cron job runs every 1 minute automatically on Vercel
- It processes only the 2 most recent contract addresses
- Data is appended to arrays, not creating new records
- Once you're ready, switch to production mode to process all contracts

