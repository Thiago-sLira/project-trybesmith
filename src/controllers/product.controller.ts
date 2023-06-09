import { Request, Response } from 'express';
import productsService from '../services/product.service';
import statusCodes from '../utils/statusCodes';

async function registerNewProduct(req: Request, res: Response) {
  const newProduct = req.body;
  const productRegistered = await productsService.registerNewProduct(newProduct);
  res.status(statusCodes.CREATED).json(productRegistered);
}

async function getAllProducts(_req: Request, res: Response) {
  const allProducts = await productsService.getAllProducts();
  res.status(statusCodes.OK).json(allProducts);
}

export default {
  registerNewProduct,
  getAllProducts,
};
