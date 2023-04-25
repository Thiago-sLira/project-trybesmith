import camelize from '../controllers/utils/camelize';
import ordersModel from '../models/orders.model';

async function getAllOrders() {
  const allProducts = await ordersModel.getAllOrders();

  const allProductsCamelized = allProducts.map((product) => camelize(product));

  return allProductsCamelized;
}

async function registerNewOrder(id, ordersToRegister) {
  
}

export default {
  getAllOrders,
  registerNewOrder,
};
