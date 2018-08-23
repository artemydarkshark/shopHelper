import { connect } from "react-redux";
import PurchaseHeader from "./PurchaseHeader";
import { getRouteId } from "../../selectors/navSelectors";
import { getHeaderShop } from "../../selectors/shoppingSelectors";
import { getCurrentDate } from "../../selectors/mainSelectors";
import { updateShop } from "../../actions/shoppingActions";

const mapStateToProps = state => ({
  id: getRouteId(state),
  shop: getHeaderShop(state),
  date: getCurrentDate(state)
});

const mapDispatchToProps = {
  updateShop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHeader);
