import loginModel from '../models/login.model';
import { Login } from '../types/trybesmith.types';
import ErrorLaunch from '../utils/ErrorLaunch';
import { createTokenJWT } from '../utils/auth/jwt';

async function userLogin(loginData: Login): Promise<string> {
  const userData = await loginModel.userLogin(loginData.username);

  if (!userData || userData.password !== loginData.password) {
    throw new ErrorLaunch('Username or password invalid', 401);
  }

  const loginToken = createTokenJWT({ id: userData.id, username: userData.username });
  return loginToken;
}

export default {
  userLogin,
};
