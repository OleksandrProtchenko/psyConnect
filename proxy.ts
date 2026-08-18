import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const privateRoutes = ['/auth/logout', '/favorites'];
const publicRoutes = ['/'];

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const authMode = searchParams.get('auth');
  const isAuthModalOpen = authMode === 'login' || authMode === 'signup';

  const isPublicRoute =
    isAuthModalOpen || pathname === '/' || pathname.startsWith('/auth');

  const isPrivateRoute = privateRoutes.some(route =>
    pathname.startsWith(route)
  );

  if (!accessToken) {
    if (isPublicRoute) return NextResponse.next();
    if (isPrivateRoute) {
      return NextResponse.redirect(new URL('/?auth=login', request.url));
    }
  }

  if (isPrivateRoute) return NextResponse.next();

  if (isAuthModalOpen) return NextResponse.redirect(new URL('/', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/favorites/:path*', '/auth/logout'],
};
