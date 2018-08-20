/* @flow */
import { createAction } from "redux-actions";

export const addShop = createAction("ADD_DATE", payload => payload);
export const removeDate = createAction("REMOVE_DATE", payload => payload);
