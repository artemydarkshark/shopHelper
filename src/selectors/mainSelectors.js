import { createSelector } from "reselect";

const getMainState = store => store.get("mainReducer");

export const getMainName = createSelector(getMainState, main =>
  main.get("name")
);
