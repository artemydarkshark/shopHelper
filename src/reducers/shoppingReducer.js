/* @flow */
import { handleActions } from "redux-actions";
import { Record, List, Map } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import uuid from "uuid";

import type { Payload, ShopItem, PurchaseItem } from "../types";

import * as shoppingActions from "../actions/shoppingActions";

const DateItem: RecordFactory<ShopItem> = Record(
  {
    id: uuid(),
    name: "Покупка",
    totalAmount: 0
  },
  "shopItem"
);

type dateList = List<DateItem>;

const PurchaseItemState: RecordFactory<PurchaseItem> = Record(
  {
    id: uuid(),
    name: "Товар",
    price: 0.0,
    quantity: 1.0,
    photoUri: "",
    barCode: "",
    amount: 0.0
  },
  "purchaseItem"
);

type PurchaseList = List<PurchaseItemState>;

type state = {
  dates: Map<string, dateList>,
  shops: Map<string, PurchaseList>
};

export const ShoppingState: RecordFactory<state> = Record(
  {
    dates: Map(),
    shops: Map()
  },
  "shoppingState"
);

const getList = (state, entity: string, id: string) =>
  state.getIn([entity, id], List());

const addShop = (
  state,
  { payload }: Payload<{ id: string, date: string }>
): RecordOf<state> => {
  const { date, id } = payload;
  const list = state.getIn(["dates", date], List());

  const updateList = list.push(
    new DateItem({ id, name: `Покупка ${list.size + 1}` })
  );

  return state.setIn(["dates", date], updateList);
};

const addPurchase = (
  state,
  { payload: id }: Payload<string>
): RecordOf<state> => {
  const purchaseList = getList(state, "shops", id);
  const updatedPurchaseList = purchaseList.push(
    new PurchaseItemState({
      id: uuid(),
      name: `Товар ${purchaseList.size + 1}`
    })
  );

  return state.setIn(["shops", id], updatedPurchaseList);
};

const deleteShop = (
  state,
  { payload: { id, date } }: Payload<{ date: string, id: string }>
): RecordOf<state> => {
  const shopList = getList(state, "dates", date);
  const updatedList = shopList.filter(item => item.id !== id);

  return state.setIn(["dates", date], updatedList);
};
const deletePurchase = (
  state,
  { payload: { id, shopId } }: Payload<{ shopId: string, id: string }>
): RecordOf<state> => {
  const shopList = getList(state, "shops", shopId);
  const updatedList = shopList.filter(item => item.id !== id);

  return state.setIn(["shops", shopId], updatedList);
};

const updatePurchase = (
  state,
  {
    payload: { id, shopId, param, value }
  }: Payload<{ shopId: string, id: string, param: string, value: any }>
): RecordOf<state> => {
  const shopList = getList(state, "shops", shopId);
  const updatedList = shopList.update(
    shopList.findIndex(item => item.id === id),
    item => item.set(param, value)
  );
  return state.setIn(["shops", shopId], updatedList);
};

export default handleActions(
  {
    [shoppingActions.addShop]: addShop,
    [shoppingActions.deleteShop]: deleteShop,
    [shoppingActions.createPurchase]: addPurchase,
    [shoppingActions.updatePurchase]: updatePurchase,
    [shoppingActions.deletePurchase]: deletePurchase
  },
  new ShoppingState()
);
