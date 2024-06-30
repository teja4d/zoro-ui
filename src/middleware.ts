// Import necessary modules
import { NextResponse, NextRequest } from 'next/server';

import { verifyJWT } from './utils/jwt-auth';

 async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const { pathname } = new URL(request.url);

  if (pathname === '/login') {
    return NextResponse.next();
  }
  try {
    // Verify JWT token and decode payload
    const decoded = await verifyJWT(token?.value);

    // Check if token or decoded payload is missing or invalid
    if (!token || !decoded?.payload.username) {
      return NextResponse.redirect(new URL('/login', request.url).toString());
    }

    // Check if the requested pathname matches /user/:username
    const match = pathname.match(/^\/user\/([^\/]+)$/);
    if (!match || match[1] !== decoded.payload.username) {
      return NextResponse.redirect(new URL('/login', request.url).toString());
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url).toString());
  }
}

const config = {
  matcher: ['/', '/login', '/user/:username*'],
};

export { middleware, config };
