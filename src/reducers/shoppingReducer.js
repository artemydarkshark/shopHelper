/* @flow */
import { handleActions } from "redux-actions";
import { Record, List, Map } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import moment from "moment";
import uuid from "uuid";

import { timeModel } from "../constants";

import type { Payload, ShopItem } from "../types";

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

type state = {
  dates: Map<string, dateList>
};

export const ShoppingState: RecordFactory<state> = Record(
  {
    dates: Map()
  },
  "shoppingState"
);

const addShop = (state, { payload }: Payload<string>): RecordOf<state> => {
  const date = payload.date ? payload.date : moment().format(timeModel);
  const list = state.getIn(["dates", date], List());
  const updateList = list.push(new DateItem({ id: uuid() }));
  return state.setIn(["dates", date], updateList);
};
export default handleActions(
  {
    [shoppingActions.addShop]: addShop
  },
  new ShoppingState()
);
