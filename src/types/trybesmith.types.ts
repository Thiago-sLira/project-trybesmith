export type Product = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type User = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type Order = {
  id?: number,
  userId: number,
};

export type AllOrders = {
  id: number,
  userId: number,
  productsIds: number[],
};

export type Login = {
  username: string,
  password: string,
};
