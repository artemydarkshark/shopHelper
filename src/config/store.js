import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import persistedReducer from "../reducers";

const middlewares = [thunk];

export default () => {
  const composeEnhancers = composeWithDevTools({
    realtime: process.env.NODE_ENV === "development"
  });
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
