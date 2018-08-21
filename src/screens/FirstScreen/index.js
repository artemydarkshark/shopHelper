/* @flow */
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getIsDatePickerOpen } from "../../selectors/mainSelectors";
import {
  getShopList,
  getShopsPurchases
} from "../../selectors/shoppingSelectors";
import { changeDate } from "../../actions/mainActions";
import { createShop } from "../../actions/shoppingActions";
import FirstScreen from "./FirstScreen";

const makeMapStateToProps = () => {
  const mapStateToProps = createStructuredSelector({
    showDatePicker: getIsDatePickerOpen,
    currentShops: getShopList,
    shopsPurchases: getShopsPurchases
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  setCurrentDate: changeDate.setCurrent,
  createShop
};

export default connect(
  makeMapStateToProps(),
  mapDispatchToProps
)(FirstScreen);
