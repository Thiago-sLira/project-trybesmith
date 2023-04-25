import { Request, Response } from 'express';
import loginService from '../services/login.service';
import statusCodes from '../utils/statusCodes';

async function userLogin(req: Request, res: Response) {
  const loginData = req.body;

  const loginToken = await loginService.userLogin(loginData);
  return res.status(statusCodes.OK).json({ token: loginToken });
}

export default {
  userLogin,
};
