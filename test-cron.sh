#!/bin/bash

# Test script for the cron job endpoint
# Usage: ./test-cron.sh [local|production] [CRON_SECRET]

ENV=${1:-local}
SECRET=${2:-""}

if [ "$ENV" = "local" ]; then
  URL="http://localhost:3000/api/cron/update-dex-data"
else
  URL="https://your-vercel-app.vercel.app/api/cron/update-dex-data"
fi

echo "Testing cron job endpoint: $URL"
echo "=================================="

if [ -n "$SECRET" ]; then
  echo "Using CRON_SECRET for authentication..."
  curl -X GET "$URL" \
    -H "Authorization: Bearer $SECRET" \
    -H "Content-Type: application/json" \
    -w "\n\nHTTP Status: %{http_code}\n" \
    -v
else
  echo "Testing without authentication (CRON_SECRET not set)..."
  curl -X GET "$URL" \
    -H "Content-Type: application/json" \
    -w "\n\nHTTP Status: %{http_code}\n" \
    -v
fi

