import { authMiddlewareOptions } from './auth.middleware.config';
import NextAuth from 'next-auth';
import { config as appConfig } from './config/shipper.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// const { auth } = NextAuth(authMiddlewareOptions);

// export default auth((req) => {
//     const { nextUrl } = req;
//     const isLoggedIn = !!req.auth;

//     const isAuthApiRoute = nextUrl.pathname.startsWith(
//         appConfig.routes.apiRouteAuthPrefix
//     );

//     const isPrivate = nextUrl.pathname.startsWith(appConfig.routes.private.app);

//     const isAuthRoute = appConfig.routes.auth.includes(nextUrl.pathname);

//     if (isAuthApiRoute) return null;

//     if (isAuthRoute) {
//         if (isLoggedIn) {
//             return Response.redirect(new URL('/app', nextUrl));
//         }
//         return null;
//     }

//     if (isPrivate && !isLoggedIn) {
//         return Response.redirect(new URL('/auth/signin', nextUrl));
//     }

//     return null;
// });

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

// Clerk regex

export function middleware(req: NextRequest) {
    const auth = req.cookies.get('next-auth.session-token');

    if (!auth) {
        if (req.nextUrl.pathname.startsWith('/app')) {
            return NextResponse.redirect(new URL('/auth/signin', req.url));
        }
    } else {
        if (
            req.nextUrl.pathname.startsWith('/auth') ||
            req.nextUrl.pathname.startsWith('/login')
        ) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

    return NextResponse.next();
}
