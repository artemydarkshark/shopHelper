/* @flow  */
import { handleActions } from "redux-actions";
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import type { Payload } from "../types";
import * as mainActions from "../actions/mainActions";

type state = {
  name: string
};

const InitialState: RecordFactory<state> = Record(
  {
    name: "vadJs"
  },
  "mainReducerState"
);

const handleChangeMainName = (
  state,
  { payload }: Payload<string>
): RecordOf<state> => state.set("name", payload);

export default handleActions(
  {
    [mainActions.changeMainName]: handleChangeMainName
  },
  new InitialState()
);
