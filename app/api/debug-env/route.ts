import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json({
        env_vars: {
            VERCEL_URL: process.env.VERCEL_URL ? 'DEFINED' : 'MISSING',
            NEXT_PUBLIC_TINA_API_URL: process.env.NEXT_PUBLIC_TINA_API_URL ? 'DEFINED' : 'MISSING',

            // Redis Vars
            STORAGE_KV_REST_API_URL: process.env.STORAGE_KV_REST_API_URL ? 'DEFINED' : 'MISSING',
            KV_REST_API_URL: process.env.KV_REST_API_URL ? 'DEFINED' : 'MISSING',
            KV_URL: process.env.KV_URL ? 'DEFINED' : 'MISSING',

            STORAGE_KV_REST_API_TOKEN: process.env.STORAGE_KV_REST_API_TOKEN ? 'DEFINED (Masked)' : 'MISSING',
            KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN ? 'DEFINED (Masked)' : 'MISSING',

            // Git Vars
            GITHUB_REPO: process.env.GITHUB_REPO ? 'DEFINED' : 'MISSING',
            GITHUB_OWNER: process.env.GITHUB_OWNER ? 'DEFINED' : 'MISSING',
            GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN ? 'DEFINED (Masked)' : 'MISSING',

            NODE_ENV: process.env.NODE_ENV,
        },
        timestamp: new Date().toISOString(),
    });
}
