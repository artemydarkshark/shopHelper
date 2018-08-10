/*  @flow */
import { persistCombineReducers } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2Immutable from "../config/autoMergeLevel2Immutable";

import mainReducer, { MainInitialState } from "../reducers/mainReducer";

const persistConfig = {
  key: "root",
  transforms: [immutableTransform({ records: [MainInitialState] })],
  stateReconciler: autoMergeLevel2Immutable,
  storage
};

export default persistCombineReducers(persistConfig, { mainReducer });
