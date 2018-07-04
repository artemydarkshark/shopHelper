/* @flow  */
import { handleActions } from "redux-actions";
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";

import actions from "../actions";

type state = {
  name: string
};

const { mainActions } = actions;

const InitialState: RecordFactory<state> = Record(
  {
    name: "hello"
  },
  "mainReducerState"
);

const handleChangeMainName = (
  state,
  {
    payload
  }: {
    payload: string
  }
): RecordOf<state> => state.set("name", payload);

export default handleActions(
  {
    [mainActions.changeMainName]: handleChangeMainName
  },
  new InitialState()
);
