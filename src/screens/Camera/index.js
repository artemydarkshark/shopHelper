// @flow

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Camera from "./Camera";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { updatePurchase } from "../../actions/shoppingActions";

const makeMapStateToProps = () => {
  const mapStateToProps = createStructuredSelector({
    currentDate: getCurrentDate
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  updatePurchase
};

export default connect(
  makeMapStateToProps(),
  mapDispatchToProps
)(Camera);
