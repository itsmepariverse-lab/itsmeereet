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
        // Allow access to /login without auth
        if (!isAuthenticated && url.pathname !== '/login') {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // Clean URL: If URL path starts with /web3, redirect to root-relative path
        // e.g. web3.itsmereet.in/web3/about -> web3.itsmereet.in/about
        if (url.pathname.startsWith('/web3')) {
            const cleanPath = url.pathname.replace(/^\/web3/, '') || '/';
            return NextResponse.redirect(new URL(cleanPath, request.url));
        }

        // Rewrite Logic: Map root-relative paths to /web3 folder
        // Only rewrite if NOT on /login (as login page is likely global or we don't want to rewrite it to /web3/login unless it's there)
        // Assuming /login is a global page. If /web3 has its own login, we might need to change this.
        // For now, preserving /login as is.
        if (url.pathname !== '/login' && !url.pathname.startsWith('/_next')) {
            return NextResponse.rewrite(new URL(`/web3${url.pathname}`, request.url));
        }

        return NextResponse.next();
    }

    // 2. MAIN SITE CLOAKING: Handle itsmereet.in (and others)
    // If someone with the auth cookie tries to visit the public home page
    if (!hostname.includes('web3.') && isAuthenticated && url.pathname === '/') {
        // Return a 404 to make the public portfolio "disappear" for them
        return new NextResponse(null, { status: 404 });
    }

    // 3. LEGACY/DIRECT PATH PROTECTION
    // If accessing /web3 directly on main domain, ensure auth (or maybe redirect to subdomain?)
    // User requirement: "Ensure the web3_auth cookie check still applies to these rewrites"
    // The rewrite happens on subdomain. On main domain, /web3 access should probably be protected or redirected.
    // Preserving existing logic: Protect /web3 path.
    if (url.pathname.startsWith('/web3')) {
        if (!isAuthenticated) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};