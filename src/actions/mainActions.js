/* @flow */
import { createAction, createActions } from "redux-actions";

export const changeMainName = createAction(
  "CHANGE_MAIN_NAME",
  payload => payload
);

export const { changeDate } = createActions({
  changeDate: {
    INCREASE: payload => payload,
    DECREASE: payload => payload
  }
});
