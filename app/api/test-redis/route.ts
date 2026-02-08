import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// Initialize Redis using env vars (KV_REST_API_URL and KV_REST_API_TOKEN from .env.local)
const redis = Redis.fromEnv();

export const GET = async () => {
    try {
        // Simple test: Set a key and read it back
        await redis.set('test-key', 'Hello from TinaCMS project!');
        const value = await redis.get('test-key');

        return new NextResponse(JSON.stringify({
            success: true,
            message: "Redis connection successful",
            value: value
        }), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({
            success: false,
            message: "Redis connection failed",
            error: String(error)
        }), { status: 500 });
    }
};
