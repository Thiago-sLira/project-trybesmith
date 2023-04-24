import { Router } from 'express';
import productsRouter from './products.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);

export default router;
