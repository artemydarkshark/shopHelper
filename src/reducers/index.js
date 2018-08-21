/*  @flow */
import { persistCombineReducers } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2Immutable from "../config/autoMergeLevel2Immutable";
import { navReducer } from "../config/navigator";

import mainReducer, { MainInitialState } from "../reducers/mainReducer";
import shopingReducer, { ShoppingState } from "../reducers/shoppingReducer";

const persistConfig = {
  key: "root",
  transforms: [
    immutableTransform({ records: [MainInitialState, ShoppingState] })
  ],
  stateReconciler: autoMergeLevel2Immutable,
  storage
};

export default persistCombineReducers(persistConfig, {
  mainReducer,
  shopingReducer,
  nav: navReducer
});
