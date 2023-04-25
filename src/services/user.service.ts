import { User } from '../types/trybesmith.types';
import usersModel from '../models/user.model';
import { createTokenJWT } from '../auth/jwt';

async function registerNewUser(newUser: User): Promise<string> {
  const userRegistered = await usersModel.registerNewUser(newUser);

  const userRegisteredToken = createTokenJWT(userRegistered);

  return userRegisteredToken;
}

export default {
  registerNewUser,
};
