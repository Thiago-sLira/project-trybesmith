import { RowDataPacket, ResultSetHeader } from 'mysql2';
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

async function registerNewOrder(id: number, productsIds: number[]) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.orders 
    (user_id) 
    VALUES (?)`,
    [id],
  );

  const promises = productsIds.map((productId) => (
    connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, productId],
    )
  ));

  await Promise.all(promises);
}

export default {
  getAllOrders,
  registerNewOrder,
};
