import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { AllOrders } from '../types/trybesmith.types';

async function getAllOrders(): Promise<AllOrders[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    ` 
      SELECT 
        orders.id,
        orders.user_id,
        JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.products AS products
      INNER JOIN Trybesmith.orders AS orders
      ON products.order_id = orders.id
      GROUP BY orders.id;
    `,
  );

  return result as AllOrders[];
}

export default {
  getAllOrders,
};
