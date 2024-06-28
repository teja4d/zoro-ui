import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie';

interface DecodedToken {
  username: string;
}

export const signJWTAndSetCookie = (username: string): string => {
  const token = jwt.sign({ username }, process.env.NEXT_PUBLIC_JWT_SECRET!, {
    expiresIn: '1d',
  });
  Cookies.remove('token');
  Cookies.set('token', token, { expires: 1, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

  return token;
};

export const verifyJWT = (token: string | undefined): DecodedToken | null => {
  if(!token) return null;
  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!) as DecodedToken;
    return decoded;
  } catch (err) {
    return null;
  }
};

export const getLoggedInUser = () : string | undefined => {
  const token = Cookies.get('token');
  if (token) {
    const decoded = verifyJWT(token);
    return decoded?.username;
  }
  return ;
}

//logut
export const logout = () => {
  Cookies.remove('token');
};

export const isLoggedIn = (): boolean => {
  const token = Cookies.get('token');
  return token ? verifyJWT(token) !== null : false;
};