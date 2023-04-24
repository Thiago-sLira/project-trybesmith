import { Router } from 'express';
import productsRouter from './products.routes';
import usersRouter from './users.routes';
import ordersRouter from './orders.routes';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);

export default router;
