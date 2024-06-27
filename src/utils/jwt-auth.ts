import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie';

interface DecodedToken {
  username: string;
}

export const signJWTAndSetCookie = (username: string): string => {
  // Generate JWT token
  const token = jwt.sign({ username }, process.env.NEXT_PUBLIC_JWT_SECRET!, {
    expiresIn: '1d',
  });
  // Set token as cookie with expiry of 1 day
  Cookies.set('token', token, { expires: 1, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

  return token;
};

export const verifyJWT = (token: string): DecodedToken | null => {
  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!) as DecodedToken;
    return decoded;
  } catch (err) {
    return null;
  }
};
