import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import validateNewOrder from '../middlewares/validateNewOrder';

const router = Router();

router.get('/', ordersController.getAllOrders);
router.post('/', validateToken, validateNewOrder, ordersController.registerNewOrder);

export default router;
