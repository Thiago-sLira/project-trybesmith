// import { Order } from '../types/trybesmith.types';
import ordersModel from '../models/orders.model';

async function getAllOrders() {
  const allProducts = await ordersModel.getAllOrders();

  return allProducts;
}

export default {
  getAllOrders,
};
