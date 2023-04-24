import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ordersService from '../services/orders.service';

async function getAllOrders(_req: Request, res: Response) {
  const allOrders = await ordersService.getAllOrders();
  res.status(statusCodes.OK).json(allOrders);
}

export default {
  getAllOrders,
};
