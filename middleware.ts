import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';
    const authCookie = request.cookies.get('web3_auth');
    const isAuthenticated = authCookie?.value === 'true';

    // 1. SUBDOMAIN LOGIC: Handle web3.itsmereet.in
    if (hostname.includes('web3.itsmereet.in')) {
        // If they are not logged in, force them to the login page
        if (!isAuthenticated && url.pathname !== '/login') {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // If logged in and on the subdomain root, rewrite to show the /web3 folder content
        if (url.pathname === '/') {
            return NextResponse.rewrite(new URL('/web3', request.url));
        }

        return NextResponse.next();
    }

    // 2. MAIN SITE CLOAKING: Handle itsmereet.in
    // If someone with the auth cookie tries to visit the public home page
    if (!hostname.includes('web3.') && isAuthenticated && url.pathname === '/') {
        // Return a 404 to make the public portfolio "disappear" for them
        return new NextResponse(null, { status: 404 });
    }

    // 3. LEGACY PATH PROTECTION: Direct access to /web3 on any domain
    if (url.pathname.startsWith('/web3')) {
        if (!isAuthenticated) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    // We update the matcher to run on the root and all relevant paths
    matcher: [
        '/',
        '/web3/:path*',
        '/login'
    ],
};