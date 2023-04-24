import { Router } from 'express';

const router = Router();

router.get('/', ordersController.getAllOrders);

export default router;
