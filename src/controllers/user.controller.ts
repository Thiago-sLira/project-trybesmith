import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import usersService from '../services/user.service';

async function registerNewUser(req: Request, res: Response) {
  const newUser = req.body;
  const userRegisteredToken = await usersService.registerNewUser(newUser);
  res.status(statusCodes.CREATED).json({ token: userRegisteredToken });
}

export default {
  registerNewUser,
};
