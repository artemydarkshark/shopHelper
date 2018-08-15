/* @flow */
import { handleActions } from "redux-actions";
import { Record, List } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import uuid from "uuid";

import type { Payload, ShopItem } from "../types";

import * as shoppingActions from "../actions/shoppingActions";

const dateItem: RecordFactory<ShopItem> = Record(
  {
    id: uuid(),
    name: "Покупка",
    totalAmount: 0
  },
  "shopItem"
);
type dateList = List<dateItem>;

type state = {
  dates: Map<string, dateList>
};

export const ShoppingState: RecordFactory<state> = Record(
  {
    dates: new Map()
  },
  "shoppingState"
);

const addShop = (state, { payload }: Payload<string>): RecordOf<state> =>
  payload.date
    ? state.setIn(["dates", payload.date], { id: "1", name: "3" })
    : state;

export default handleActions(
  {
    [shoppingActions.addDate]: addShop
  },
  new ShoppingState()
);
