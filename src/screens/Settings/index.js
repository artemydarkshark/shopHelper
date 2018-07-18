import { connect } from "react-redux";
import Settings from "./Settings";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { changeDate } from "../../actions/mainActions";

const mapStateToProps = state => ({
  currDate: getCurrentDate(state)
});

const mapDispatchToProps = {
  setCurrent: changeDate.setCurrent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
