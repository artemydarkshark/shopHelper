import { createSelector } from "reselect";
import { List } from "immutable";

import { getCurrentDate } from "./mainSelectors";
import { getRouteId } from "./navSelectors";

const getShoppingState = store => store.shopingReducer;

export const getShopList = createSelector(
  [getShoppingState, getCurrentDate],
  (shops, date) => {
    const shopsList = shops.getIn(["dates", date], List());
    return shopsList;
  }
);

export const getId = (store, ownProps) => ownProps.navigation.getParam("id");

export const getShopsPurchases = createSelector([getShoppingState], shops =>
  shops.get("shops")
);

export const getPurchases = () =>
  createSelector([getShopsPurchases, getId], (shops, id) => shops.get(id));

export const getCurrentShop = () =>
  createSelector([getShopsPurchases, getId], (shops, id) => shops.get(id));

export const getHeaderShop = createSelector(
  [getShopList, getRouteId],
  (shops, id) => shops.find(item => item.id === id)
);
