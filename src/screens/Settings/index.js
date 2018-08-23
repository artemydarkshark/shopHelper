import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Settings from "./Settings";

import * as settingSelectors from "../../selectors/settingSelectors";
import { changeDate } from "../../actions/mainActions";
import { changeSetting } from "../../actions/settingActions";

const mapStateToProps = createStructuredSelector({
  currency: settingSelectors.getCurrency,
  locale: settingSelectors.getLocale,
  reportName: settingSelectors.getReportName,
  email: settingSelectors.getEmail
});

const mapDispatchToProps = {
  setCurrent: changeDate.setCurrent,
  changeSetting
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
