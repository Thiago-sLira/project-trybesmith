import jwt, { SignOptions } from 'jsonwebtoken';
import { User, UserLogin } from '../types/trybesmith.types';

export default function createTokenJWT(payload: User | UserLogin) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  // const secret = process.env.JWT_SECRET || 'algumacoisa';
  const secret = 'process.env.JWT_SECRET';

  const token = jwt.sign(payload, secret, config);
  return token;
}
