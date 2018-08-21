// @flow

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PurchasesScreen from "./PurchasesScreen";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { getShopList, getPurchases } from "../../selectors/shoppingSelectors";
import { createPurchase } from "../../actions/shoppingActions";

const makeMapStateToProps = () => {
  const purchases = getPurchases();
  const mapStateToProps = createStructuredSelector({
    currentDate: getCurrentDate,
    currentShops: getShopList,
    purchases
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  createPurchase
};

export default connect(
  makeMapStateToProps(),
  mapDispatchToProps
)(PurchasesScreen);
