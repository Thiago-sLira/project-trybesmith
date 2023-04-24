import { Router } from 'express';
import productsRouter from './products.routes';
import usersRouter from './users.routes';
import ordersRouter from './orders.routes';
import loginRouter from './login.routes';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;
