import * as jwt from 'jose';

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
};

const verifyJWT = async (
  token: string | undefined,
): Promise<jwt.JWTPayload| null> => {
  if (!token) return null;
  try {
    const { payload } = await jwt.jwtVerify(token, jwtConfig.secret);
    return payload;
  } catch (err) {
    console.error(err);
    return null;
  }
};


export { signJWTAndSetCookie, verifyJWT };
