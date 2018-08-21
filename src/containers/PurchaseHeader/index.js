import { connect } from "react-redux";
import PurchaseHeader from "./PurchaseHeader";
import { getRouteId } from "../../selectors/navSelectors";
import { getHeaderShop } from "../../selectors/shoppingSelectors";
import { changeDate } from "../../actions/mainActions";

const mapStateToProps = state => ({
  id: getRouteId(state),
  shop: getHeaderShop(state)
});

const mapDispatchToProps = {
  increaseDate: changeDate.increase,
  decreaseDate: changeDate.decrease,
  setCurrent: changeDate.setCurrent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHeader);
