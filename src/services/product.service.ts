import { Product } from '../types/trybesmith.types';
import productsModel from '../models/product.model';

async function registerNewProduct(newProduct: Product): Promise<Product> {
  const productRegistered = await productsModel.registerNewProduct(newProduct);

  return productRegistered;
}

async function getAllProducts() {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
}

export default {
  registerNewProduct,
  getAllProducts,
};
