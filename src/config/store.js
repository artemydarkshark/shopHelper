import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import logger from "redux-logger";

import persistedReducer from "../reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  return { store, persistor };
};
