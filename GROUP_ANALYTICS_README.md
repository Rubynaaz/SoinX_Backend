# Group Analytics System

## Overview

This system creates a comprehensive database for tracking group analytics, including:
- Group name, username, and member count
- All contract addresses called by each group
- Performance metrics for each contract (price change, marketcap change, multiplier)
- Overall group performance (positive vs negative calls, success rate)

## Database Schema

A new model `GroupAnalyticsDetailed` has been added to the Prisma schema with the following structure:

### Main Fields:
- `groupName`: Name of the group
- `username`: Username (can be null)
- `groupUserCount`: Number of members in the group
- `totalCalls`: Total number of calls made
- `totalUniqueContracts`: Number of unique contracts called
- `positiveCalls`: Number of contracts with positive performance
- `negativeCalls`: Number of contracts with negative performance
- `successRate`: Percentage of positive calls (positiveCalls / totalUniqueContracts * 100)
- `avgPriceChange`: Average price change percentage
- `avgMarketCapChange`: Average marketcap change percentage
- `avgMultiplierX`: Average multiplier (1.0 = break even, >1.0 = profit, <1.0 = loss)

### Nested Data:
- `bestCall`: Best performing call details
- `lastCall`: Most recent call details
- `contracts[]`: Array of all contracts with their individual performance metrics

### Contract Performance Includes:
- Contract address, token name, symbol, image, chain
- Initial and current price/marketcap
- Price change and marketcap change percentages
- Multiplier X
- Call count (how many times this contract was called)
- First and last call datetime
- Performance classification (positive/negative/neutral)

## Setup

1. **Generate Prisma Client** (after schema update):
   ```bash
   npx prisma generate --schema=prisma/schema.prisma
   ```

2. **Run the Processing Script**:
   ```bash
   npm run process-group-analytics
   ```

   Or directly:
   ```bash
   npx tsx scripts/process-group-analytics.ts
   ```

## How It Works

The script:
1. Fetches all group entries from `GroupUserCountsWebhookTest`
2. Groups them by `GroupName + Username`
3. For each group:
   - Collects all unique contracts called
   - Fetches latest data from `DexLatestData` for each contract
   - Calculates performance metrics (price change, marketcap change, multiplier)
   - Determines if each call was positive, negative, or neutral
   - Calculates group-level metrics (success rate, averages, best/last call)
4. Stores/updates the analytics in `GroupAnalyticsDetailed` collection

## Performance Calculation

- **Price Change**: `((currentPrice - initialPrice) / initialPrice) * 100`
- **MarketCap Change**: `((currentMarketCap - initialMarketCap) / initialMarketCap) * 100`
- **Multiplier X**: `marketCapChange > -100 ? (marketCapChange / 100) + 1 : 0`
- **Performance Classification**:
  - `positive`: marketCapChange > 0
  - `negative`: marketCapChange < 0
  - `neutral`: marketCapChange === 0

## Group Performance Metrics

- **Success Rate**: `(positiveCalls / totalUniqueContracts) * 100`
- **Positive Calls**: Count of contracts with positive performance
- **Negative Calls**: Count of contracts with negative performance

## Example Use Case

If a group called 5 contracts:
- 2 contracts performed positively (marketcap increased)
- 3 contracts performed negatively (marketcap decreased)

The group analytics would show:
- `totalUniqueContracts`: 5
- `positiveCalls`: 2
- `negativeCalls`: 3
- `successRate`: 40% (2/5 * 100)
- Plus individual contract details in the `contracts` array

## Querying the Data

You can query the analytics using Prisma:

```typescript
// Get all group analytics
const allAnalytics = await prisma.groupAnalyticsDetailed.findMany({
  orderBy: { successRate: 'desc' }
});

// Get analytics for a specific group
const groupAnalytics = await prisma.groupAnalyticsDetailed.findFirst({
  where: {
    groupName: "My Group",
    username: "username123"
  }
});

// Get top performing groups
const topGroups = await prisma.groupAnalyticsDetailed.findMany({
  orderBy: { successRate: 'desc' },
  take: 10
});
```

## Notes

- The script skips contracts that don't have data in `DexLatestData`
- It updates existing analytics if a group already exists (based on groupName + username)
- All numeric values are rounded to 2 decimal places for storage
- The script processes all groups in the database

