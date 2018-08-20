// @flow

import { connect } from "react-redux";
import PurchasesScreen from "./PurchasesScreen";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { getShopList } from "../../selectors/shoppingSelectors";
import { addShop } from "../../actions/shoppingActions";

const mapStateToProps = state => ({
  currentDate: getCurrentDate(state),
  currentShops: getShopList(state)
});

const mapDispatchToProps = {
  addShop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchasesScreen);
