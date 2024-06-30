import * as jwt from 'jose';
import * as Cookies from 'js-cookie';

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
};

export const signJWTAndSetCookie = async (username: string) => {

  const token = await new jwt.SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('zoro-uk')
    .setAudience('zoro-uk')
    .setExpirationTime('1h')
    .sign(jwtConfig.secret);
  Cookies.set('token', token);
  return token;
};

export const verifyJWT = async (token: string | undefined): Promise<jwt.JWTVerifyResult<jwt.JWTPayload> | null> => {
  if (!token) return null;
  try {
    const decoded = await jwt.jwtVerify(token, jwtConfig.secret);
    return decoded;
  } catch (err) {
    return null;
  }
};

// export const getLoggedInUser = async () => {
//   const token = Cookies.get('token');
//   if (token) {
//     const decoded = await verifyJWT(token);
//     return decoded?.payload;
//   }
//   return;
// }

//logut
export const logout = () => {
  Cookies.remove('token');
};

export const isLoggedIn = async (): Promise<boolean> => {
  const token = Cookies.get('token');
  return token ? await verifyJWT(token) !== null : false;
};