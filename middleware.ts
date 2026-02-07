import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the path starts with /web3
    if (request.nextUrl.pathname.startsWith('/web3')) {
        const authCookie = request.cookies.get('web3_auth');

        // If no auth cookie, redirect to login
        if (!authCookie || authCookie.value !== 'true') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/web3/:path*',
};
