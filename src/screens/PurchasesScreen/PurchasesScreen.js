import React from "react";

import { View, ScrollView } from "react-native";
// import { List} from "native-base"

import AddPurchase from "../../components/AddPurchase";
import PurchaseHeader from "../../containers/PurchaseHeader";
import PurchaseItem from "../../components/PurchaseItem";
import PurchaseFooter from "../../components/PurchaseFooter";

import styles from "./styles";

type Props = {
  currentDate: string,
  shopList: any,
  purchases: any,
  shopAmount: number,
  shopQuantity: number,
  createPurchase: Function,
  deleteShop: Function,
  updatePurchase: Function,
  deletePurchase: Function
};

class PurchasesScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: props.navigation.getParam("id")
    };
  }
  componentWillUnmount = () => {
    const { purchases, shopList, deleteShop, currentDate } = this.props;
    const currentShop = shopList.find(({ id }) => id === this.state.id);

    if (!purchases) {
      deleteShop({ date: currentDate, id: currentShop.get("id") });
    }
  };

  goToPage = (page: string, opts: Object = {}): void => {
    this.props.navigation.navigate(page, opts);
  };

  purchaseItemMapper = () =>
    this.props.purchases
      ? this.props.purchases.map(item => {
          const id = item.get("id");
          return (
            <PurchaseItem
              key={id}
              id={id}
              deletePurchase={this.props.deletePurchase}
              updatePurchase={this.props.updatePurchase}
              currentDate={this.props.currentDate}
              shopId={this.state.id}
              name={item.get("name")}
              price={item.get("price")}
              quantity={item.get("quantity")}
              photo={item.get("photo")}
              barCode={item.get("barCode")}
              amount={item.amount}
              goToPage={this.goToPage}
            />
          );
        })
      : null;

  render() {
    const id = this.props.navigation.getParam("id");

    return (
      <View style={styles.purchaseContainer}>
        <AddPurchase
          id={id}
          createPurchase={this.props.createPurchase}
          currentDate={this.props.currentDate}
        />
        <View style={styles.purchases}>
          <ScrollView>{this.purchaseItemMapper()}</ScrollView>
        </View>
        <PurchaseFooter
          amount={this.props.shopAmount}
          quantity={this.props.shopQuantity}
        />
      </View>
    );
  }
}

PurchasesScreen.navigationOptions = {
  headerTitle: props => <PurchaseHeader {...props} />
};

export default PurchasesScreen;
