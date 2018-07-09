/* @flow  */
import { handleActions } from "redux-actions";
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import moment from "moment";
import type { Payload } from "../types";
import * as mainActions from "../actions/mainActions";

type state = {
  name: string,
  currentDate: string
};

const InitialState: RecordFactory<state> = Record(
  {
    name: "vadJs",
    currentDate: moment().format("DD.MM.YYYY")
  },
  "mainReducerState"
);

const handleIncreaseDate = (state): RecordOf<state> => {
  const currTime = state.get("currentDate");

  return state.set(
    "currentDate",
    moment(currTime)
      .add(24, "h")
      .format("DD.MM.YYYY")
  );
};

const handleDecreaseDate = (state): RecordOf<state> => {
  const currTime = state.get("currentDate");

  return state.set(
    "currentDate",
    moment(currTime)
      .subtract(24, "h")
      .format("DD.MM.YYYY")
  );
};

const handleChangeMainName = (
  state,
  { payload }: Payload<string>
): RecordOf<state> => state.set("name", payload);

export default handleActions(
  {
    [mainActions.changeDate.increase]: handleIncreaseDate,
    [mainActions.changeDate.decrease]: handleDecreaseDate,
    [mainActions.changeMainName]: handleChangeMainName
  },
  new InitialState()
);
