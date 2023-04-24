import loginModel from '../models/login.model';
import { Login } from '../types/trybesmith.types';

async function userLogin(loginData: Login): Promise<string> {
  const userData = await loginModel.userLogin(loginData);

  if (!userData || userData.password !== loginData.password) {
    throw new Error('Unauthorized');
  }

  const loginToken = 
}

export default {
  userLogin,
};
