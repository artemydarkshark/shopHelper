/* @flow */
import { handleActions } from "redux-actions";
import { Record, List } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import type { Payload } from "../types";

import * as shopDateActions from "../actions/shopDateActions";

type dateItem = Map<string, any>;

type dateList = List<dateItem>;

type state = {
  dates: Map<string, dateList>
};

export const ShoppingDateState: RecordFactory<state> = Record(
  {
    dates: new Map()
  },
  "shoppingDateState"
);

const addShop = (state, { payload }: Payload<string>): RecordOf<state> =>
  payload.date
    ? state.setIn(["dates", payload.date], { id: "1", name: "3" })
    : state;

export default handleActions(
  {
    [shopDateActions.addDate]: addShop
  },
  new ShoppingDateState()
);
