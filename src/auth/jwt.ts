import jwt, { SignOptions } from 'jsonwebtoken';
import { User, UserLogin } from '../types/trybesmith.types';

const secret = 'process.env.JWT_SECRET';

export function createTokenJWT(payload: User | UserLogin) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  // const secret = process.env.JWT_SECRET || 'algumacoisa';

  const token = jwt.sign(payload, secret, config);
  return token;
}

export function validateTokenJWT(token: string) {
  const tokenDecoded = jwt.verify(token, secret);
  return tokenDecoded;
}
