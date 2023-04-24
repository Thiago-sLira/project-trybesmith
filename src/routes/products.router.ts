import { Router } from 'express';
import productsController from '../controllers/product.controller';

const router = Router();

router.post('/', productsController.registerNewProduct);
router.get('/', productsController.getAllProducts);

export default router;
