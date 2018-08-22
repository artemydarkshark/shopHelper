// @flow

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PurchasesScreen from "./PurchasesScreen";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { getPurchases, getShopList } from "../../selectors/shoppingSelectors";
import {
  createPurchase,
  deleteShop,
  deletePurchase,
  updatePurchase
} from "../../actions/shoppingActions";

const makeMapStateToProps = () => {
  const purchases = getPurchases();

  const mapStateToProps = createStructuredSelector({
    currentDate: getCurrentDate,
    shopList: getShopList,
    purchases
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  createPurchase,
  deletePurchase,
  updatePurchase,
  deleteShop
};

export default connect(
  makeMapStateToProps(),
  mapDispatchToProps
)(PurchasesScreen);
