import { Product } from '../types/trybesmith.types';

async function registerNewProduct(newProduct: Product): Promise<Product> {
  const productRegistered = await productsModel.registerNewProduct(newProduct);

  return productRegistered;
}

export default {
  registerNewProduct,
};
