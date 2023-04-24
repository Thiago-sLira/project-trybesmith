import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../types/trybesmith.types';

async function registerNewUser(newUser: User): Promise<User> {
  const { username, vocation, level, password } = newUser;

  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) 
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );
  const { insertId: id } = result;

  const newUserCreated: User = { id, username, vocation, level, password };

  return newUserCreated;
}

export default {
  registerNewUser,
};
