/* @flow */
export type Action<P, M> = {
  type: string,
  payload?: P,
  meta?: M
};

export type Payload<T> = {
  payload: T
};

export type ShopItem = {
  id: string,
  name: string,
  totalAmount: number
};

export type PurchaseItem = {
  id: string,
  name: string,
  price: number,
  quantity: number,
  photoUri: string,
  barCode: string,
  amount?: number
};
