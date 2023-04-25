import { Request, Response, NextFunction } from 'express';
import { validateTokenJWT } from '../auth/jwt';

function validateToken(req: Request & { user?: number }, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decodedToken = validateTokenJWT(authorization);
  req.user = decodedToken;

  next();
}

export default validateToken;
