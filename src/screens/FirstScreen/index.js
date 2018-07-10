/* @flow */
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getCurrentDate,
  getIsDatePickerOpen
} from "../../selectors/mainSelectors";
import { changeDate } from "../../actions/mainActions";
import FirstScreen from "./FirstScreen";

const mapStateToProps = createStructuredSelector({
  currentDate: getCurrentDate,
  showDatePicker: getIsDatePickerOpen
});

const mapDispatchToProps = {
  setCurrentDate: changeDate.setCurrent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);
