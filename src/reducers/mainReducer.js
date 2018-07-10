/* @flow  */
import { handleActions } from "redux-actions";
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import moment from "moment";
import type { Payload } from "../types";
import * as mainActions from "../actions/mainActions";

type state = {
  name: string,
  currentDate: string,
  isDatePickerOpen: boolean
};

const timeModel: string = "DD.MM.YYYY";

const InitialState: RecordFactory<state> = Record(
  {
    name: "vadJs",
    currentDate: moment().format(timeModel),
    isDatePickerOpen: false
  },
  "mainReducerState"
);

const handleOpenDatePicker = (state): RecordOf<state> => {
  console.log("eeee");
  return state.set("isDatePickerOpen", true);
};

const handleIncreaseDate = (state): RecordOf<state> => {
  const currTime = state.get("currentDate");

  return state.set(
    "currentDate",
    moment(currTime, timeModel)
      .add(1, "d")
      .format(timeModel)
  );
};

const handleDecreaseDate = (state): RecordOf<state> => {
  const currTime = state.get("currentDate");

  return state.set(
    "currentDate",
    moment(currTime, timeModel)
      .subtract(1, "d")
      .format(timeModel)
  );
};

const handleChangeMainName = (
  state,
  { payload }: Payload<string>
): RecordOf<state> => state.set("name", payload);

const handleSetCurrent = (
  state,
  { payload }: Payload<string>
): RecordOf<state> =>
  state.set("currentDate", moment(payload, timeModel).format(timeModel));

export default handleActions(
  {
    [mainActions.changeDate.increase]: handleIncreaseDate,
    [mainActions.changeDate.decrease]: handleDecreaseDate,
    [mainActions.changeDate.setCurrent]: handleSetCurrent,
    [mainActions.changeMainName]: handleChangeMainName,
    [mainActions.openDatePicker]: handleOpenDatePicker
  },
  new InitialState()
);
