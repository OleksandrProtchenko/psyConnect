import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
const privateRoutes = ['/auth/logout', '/favorites'];
const publicRoutes = [
  '/auth/login',
  '/auth/register',
  '/psychologists',
  '/appointments',
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
  const isPrivateRoute = privateRoutes.some(route =>
    pathname.startsWith(route)
  );

  if (!accessToken) {
    if (isPublicRoute) {
      return NextResponse.next();
    }

    if (isPrivateRoute) {
      return NextResponse.redirect(
        new URL('/auth/login?auth=login', request.url)
      );
    }
  }

  if (isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isPrivateRoute) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/psychologists/:path*',
    '/auth/login',
    '/auth/register',
    '/appointments/:path*',
    '/favorites/:path*',
    '/auth/logout',
  ],
};
