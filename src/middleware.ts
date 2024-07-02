// Import necessary modules
import { NextResponse, NextRequest } from 'next/server';

import { verifyJWT } from './utils/jwt-auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/login' || path === '/signup' || path === '/forgot-password'
  if (isPublicPath) {
    return NextResponse.next();
  }
  try {
    // Verify JWT token and decode payload
    const decoded = await verifyJWT(token?.value);

    // Check if token or decoded payload is missing or invalid
    if (!token || !decoded?.username) {
      return NextResponse.redirect(new URL('/login', request.url).toString());
    }

    if (path === '/admin' && decoded.username === 'admin') {
      return NextResponse.next();
    }

    // Check if the requested pathname matches /user/:username
    const match = path.match(/^\/user\/([^\/]+)$/);
    if (!match || match[1] !== decoded.username) {
      return NextResponse.redirect(new URL('/login', request.url).toString());
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url).toString());
  }
}

export const config = {
  matcher: ['/', '/login','/admin', '/user/:username*'],
};

