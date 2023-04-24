import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import loginService from '../services/login.service';

async function userLogin(req: Request, res: Response) {
  const loginData = req.body;

  const loginToken = await loginService.userLogin(loginData);
  return res.status(statusCodes.OK).json({ token: loginToken });
}

export default {
  userLogin,
};
