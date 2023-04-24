import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types/trybesmith.types';

async function registerNewProduct(newProduct: Product): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'INSERT INTO Trybesmith.products (`name`, `amount`) VALUES (?, ?)',
    [newProduct.name, newProduct.amount],
  );

  console.log(rows);
}

export default {
  registerNewProduct,
};
