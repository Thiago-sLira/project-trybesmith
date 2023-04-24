import { RowDataPacket } from 'mysql2';
import { User } from '../types/trybesmith.types';
import connection from './connection';

async function userLogin(username: string): Promise<User | undefined> {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );

  return result as User | undefined;
}

export default {
  userLogin,
};
