#!/bin/bash

# Test script for the cron job with array data structure
# Usage: ./test-cron-array.sh [CRON_SECRET]

SECRET=${1:-""}
BASE_URL="http://localhost:3000"

echo "=========================================="
echo "Testing Cron Job - Array Data Structure"
echo "=========================================="
echo ""

echo "Step 1: Running cron job (first run)..."
echo "----------------------------------------"
if [ -n "$SECRET" ]; then
  curl -s -X GET "$BASE_URL/api/cron/update-dex-data" \
    -H "Authorization: Bearer $SECRET" | jq '.' || curl -s -X GET "$BASE_URL/api/cron/update-dex-data" \
    -H "Authorization: Bearer $SECRET"
else
  curl -s -X GET "$BASE_URL/api/cron/update-dex-data" | jq '.' || curl -s -X GET "$BASE_URL/api/cron/update-dex-data"
fi

echo ""
echo ""
echo "Waiting 3 seconds before second run..."
sleep 3

echo ""
echo "Step 2: Running cron job again (should append to arrays)..."
echo "----------------------------------------"
if [ -n "$SECRET" ]; then
  curl -s -X GET "$BASE_URL/api/cron/update-dex-data" \
    -H "Authorization: Bearer $SECRET" | jq '.' || curl -s -X GET "$BASE_URL/api/cron/update-dex-data" \
    -H "Authorization: Bearer $SECRET"
else
  curl -s -X GET "$BASE_URL/api/cron/update-dex-data" | jq '.' || curl -s -X GET "$BASE_URL/api/cron/update-dex-data"
fi

echo ""
echo ""
echo "Step 3: Verifying saved data..."
echo "----------------------------------------"
curl -s -X GET "$BASE_URL/api/cron/verify-dex-data" | jq '.' || curl -s -X GET "$BASE_URL/api/cron/verify-dex-data"

echo ""
echo ""
echo "=========================================="
echo "Test Complete!"
echo "=========================================="
echo ""
echo "To view a specific contract, use:"
echo "curl \"$BASE_URL/api/cron/verify-dex-data?contractAddress=YOUR_CONTRACT_ADDRESS\""

