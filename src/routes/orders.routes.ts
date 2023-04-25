import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const router = Router();

router.get('/', ordersController.getAllOrders);
router.post('/', ordersController.registerNewOrder);

export default router;
