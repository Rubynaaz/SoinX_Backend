import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    // Just pass the request through without blocking
    return NextResponse.next();
}