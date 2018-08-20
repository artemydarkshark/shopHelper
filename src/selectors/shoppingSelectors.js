import { createSelector } from "reselect";
import { List } from "immutable";

import { getCurrentDate } from "./mainSelectors";

const getShopingState = store => store.shopingReducer;

export const getShopList = createSelector(
  [getShopingState, getCurrentDate],
  (shops, date) => {
    const shopsList = shops.getIn(["dates", date], List());
    console.log(JSON.stringify(shopsList));
    return shopsList;
  }
);
