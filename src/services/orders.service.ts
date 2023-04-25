import camelize from '../controllers/utils/camelize';
import ordersModel from '../models/orders.model';

async function getAllOrders() {
  const allProducts = await ordersModel.getAllOrders();

  const allProductsCamelized = allProducts.map((product) => camelize(product));

  return allProductsCamelized;
}

async function registerNewOrder(id: number, productsIds: number[]) {
  await ordersModel.registerNewOrder(id, productsIds);

  const ordersRegistered = {
    userId: id,
    productsIds,
  };

  return ordersRegistered;
}

export default {
  getAllOrders,
  registerNewOrder,
};
