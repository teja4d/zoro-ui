import * as jwt from 'jose';
import Cookies from 'js-cookie';

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
};

const signJWTAndSetCookie = async (username: string) => {
  const token = await new jwt.SignJWT({ username, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer('zoro-uk')
    .setAudience('zoro-uk')
    .setExpirationTime('1h')
    .sign(jwtConfig.secret);
  return token;
  Cookies.set('token', token, { expires: 1 });
  console.log('token', token);
};

const verifyJWT = async (
  token: string | undefined,
): Promise<jwt.JWTPayload| null> => {
  if (!token) return null;
  try {
    const {payload} = await jwt.jwtVerify(token, jwtConfig.secret);
    return payload;
  } catch (err) {
    console.error(err);
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

// logut
const logout = () => {
  Cookies.remove('token');
};

const isLoggedIn = async (): Promise<boolean> => {
  const token = Cookies.get('token');
  return token ? (await verifyJWT(token)) !== null : false;
};

export { signJWTAndSetCookie, verifyJWT, logout, isLoggedIn };
