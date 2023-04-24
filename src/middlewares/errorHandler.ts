import { ErrorRequestHandler } from 'express';
import ErrorLaunch from '../controllers/utils/ErrorLaunch';

const errorHandler: ErrorRequestHandler = (err: Error, _req, res, _next) => {
  if (err instanceof ErrorLaunch) {
    console.log(err);
    return res.status(err.code).json({ message: err.message });
  }

  console.log(err);
  return res.status(500).json({ message: 'Erro inesperado!' });
};

export default errorHandler;
