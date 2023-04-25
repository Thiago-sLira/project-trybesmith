import jwt, { SignOptions } from 'jsonwebtoken';
import { User, UserLogin } from '../../types/trybesmith.types';

const secret = 'process.env.JWT_SECRET';

const config: SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

export function createTokenJWT(payload: User | UserLogin) {
  // const secret = process.env.JWT_SECRET || 'algumacoisa';

  const token = jwt.sign(payload, secret, config);
  return token;
}

export function validateTokenJWT(token: string): number {
  const tokenDecoded = jwt.verify(token, secret);
  if (typeof tokenDecoded !== 'string') {
    return tokenDecoded.id;
  }

  return 0;
}
