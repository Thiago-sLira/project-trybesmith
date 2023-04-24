import express from 'express';
import router from './routes';
import errorHandler from './middlewares/errorHandler';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

export default app;
