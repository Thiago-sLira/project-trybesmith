import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import productsService from '../services/product.service';

async function registerNewProduct(req: Request, res: Response) {
  const newProduct = req.body;
  const productRegistered = await productsService.registerNewProduct(newProduct);
  res.status(statusCodes.CREATED).json(productRegistered);
}

export default {
  registerNewProduct,
};
