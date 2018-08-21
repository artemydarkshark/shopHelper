import { applyMiddleware, createStore, compose } from "redux";
import devTools from "remote-redux-devtools";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { navigationMiddleware } from "./navigator";

import persistedReducer from "../reducers";

const middlewares = [thunk, navigationMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default () => {
  const enhancer = compose(
    applyMiddleware(...middlewares),
    devTools({
      name: "shopHelper",
      realtime: process.env.NODE_ENV === "development"
    })
  );
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  persistor.purge();

  return { store, persistor };
};
