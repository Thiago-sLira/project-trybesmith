import { Router } from 'express';
import productsController from '../controllers/product.controller';

const router = Router();

router.post('/', productsController.registerNewProduct);

export default router;
