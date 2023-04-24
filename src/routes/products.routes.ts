import { Router } from 'express';
import productsController from '../controllers/product.controller';
import validateNewProduct from '../middlewares/validateNewProduct';

const router = Router();

router.post('/', validateNewProduct, productsController.registerNewProduct);
router.get('/', productsController.getAllProducts);

export default router;
