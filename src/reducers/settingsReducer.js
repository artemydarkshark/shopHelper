/* @flow  */
import { handleActions } from "redux-actions";
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";
import type { Payload } from "../types";
import * as settingActions from "../actions/settingActions";

type state = {
  currency: string,
  locale: string,
  reportName: string,
  email: string
};

export const SettingsInitialState: RecordFactory<state> = Record(
  {
    currency: "UAH",
    locale: "ru",
    reportName: "",
    email: ""
  },
  "settingsReducerState"
);

const changeSetting = (
  state,
  { payload }: Payload<{ name: string, value: string }>
): RecordOf<{ name: string, value: string }> =>
  state.set(payload.name, payload.value);

export default handleActions(
  {
    [settingActions.changeSetting]: changeSetting
  },
  new SettingsInitialState()
);
