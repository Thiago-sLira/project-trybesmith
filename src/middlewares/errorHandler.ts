import { ErrorRequestHandler } from 'express';
import statusCodes from '../statusCodes';

const errorHandler: ErrorRequestHandler = (err: unknown, _req, res, _next) => {
  if (err instanceof Error) {
    switch (err.message) {
      case 'Unauthorized':
        res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
        break;
      // case 'NotFoundError':
      //   res.status(statusCodes.NOT_FOUND).json({ message: 'Usuário não encontrado' });
      //   break;
      default:
        console.error(err);
        res.sendStatus(500);
    }
  }

  return res.status(500).json({ message: 'Erro inesperado!' });
};

export default errorHandler;
