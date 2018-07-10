import { connect } from "react-redux";
import Calendar from "./Calendar";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { changeDate, openDatePicker } from "../../actions/mainActions";

const mapStateToProps = state => ({
  currDate: getCurrentDate(state)
});

const mapDispatchToProps = {
  increaseDate: changeDate.increase,
  decreaseDate: changeDate.decrease,
  openDatePicker
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
