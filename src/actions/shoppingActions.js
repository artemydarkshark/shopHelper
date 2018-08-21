/* @flow */
import { createAction } from "redux-actions";
import { NavigationActions } from "react-navigation";
import uuid from "uuid";

import type { Dispatch } from "redux";

export const addShop = createAction("ADD_SHOP", payload => payload);
export const createPurchase = createAction("ADD_PURCHASE", id => id);

export const removeDate = createAction("REMOVE_DATE", payload => payload);

export const createShop = () => (dispatch: Dispatch, getState: Function) => {
  const { mainReducer } = getState();
  const date = mainReducer.get("currentDate");
  const id = uuid();
  dispatch(
    NavigationActions.navigate({
      routeName: "PurchasesScreen",
      params: {
        id
      }
    })
  );

  dispatch(addShop({ date, id }));
};
