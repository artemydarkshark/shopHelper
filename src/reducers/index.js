/*  @flow */
import { persistCombineReducers } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import storage from "redux-persist/lib/storage";

import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { navReducer } from "../config/navigator";

import mainReducer, { MainInitialState } from "../reducers/mainReducer";
import shopingReducer, {
  ShoppingState,
  PurchaseItemState,
  DateItem
} from "../reducers/shoppingReducer";

const persistConfig = {
  key: "root",
  transforms: [
    immutableTransform({
      records: [MainInitialState, ShoppingState, PurchaseItemState, DateItem]
    })
  ],
  stateReconciler: hardSet,
  storage
};

export default persistCombineReducers(persistConfig, {
  mainReducer,
  shopingReducer,
  nav: navReducer
});
