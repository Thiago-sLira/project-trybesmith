import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import statusCodes from '../utils/statusCodes';

async function getAllOrders(_req: Request, res: Response) {
  const allOrders = await ordersService.getAllOrders();
  res.status(statusCodes.OK).json(allOrders);
}

async function registerNewOrder(req: Request & { user?: number }, res: Response) {
  const { productsIds } = req.body;
  const id = req.user || 0;

  const ordersRegistered = await ordersService.registerNewOrder(id, productsIds);
  res.status(statusCodes.CREATED).json(ordersRegistered);
}

export default {
  getAllOrders,
  registerNewOrder,
};
