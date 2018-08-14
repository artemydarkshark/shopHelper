/* @flow */
import { createAction } from "redux-actions";

export const addDate = createAction("ADD_DATE", payload => payload);
export const removeDate = createAction("REMOVE_DATE", payload => payload);
