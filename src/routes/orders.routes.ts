import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';

const router = Router();

router.get('/', ordersController.getAllOrders);
router.post('/', validateToken, ordersController.registerNewOrder);

export default router;
