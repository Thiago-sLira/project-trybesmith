import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../types/trybesmith.types';

async function registerNewProduct(newProduct: Product): Promise<Product> {
  const { name, amount } = newProduct;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (`name`, `amount`) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;

  const newProductCreated: Product = { id, name, amount };
  return newProductCreated;
}

export default {
  registerNewProduct,
};
