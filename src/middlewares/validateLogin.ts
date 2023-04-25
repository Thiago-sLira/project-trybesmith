import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string') {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }

  if (!password || typeof password !== 'string') {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }

  return next();
}
