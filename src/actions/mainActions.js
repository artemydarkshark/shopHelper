/* @flow */
import { createAction } from "redux-actions";

export const changeMainName = createAction(
  "CHANGE_MAIN_NAME",
  payload => payload
);
