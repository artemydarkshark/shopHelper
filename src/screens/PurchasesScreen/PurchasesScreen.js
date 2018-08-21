import React from "react";

import { View } from "react-native";

import AddPurchase from "../../components/AddPurchase";
import PurchaseHeader from "../../containers/PurchaseHeader";
import PurchaseItem from "../../components/PurchaseItem";
import PurchaseFooter from "../../components/PurchaseFooter";

import styles from "./styles";

type Props = {
  currentDate: string,
  currentShops: any,
  purchases: any,
  createPurchase: Function
};

class PurchasesScreen extends React.Component<Props> {
  goToPage = (page: string): void => {
    this.props.navigation.navigate(page);
  };

  purchaseItemMapper = () =>
    this.props.purchases
      ? this.props.purchases.map(item => {
          const id = item.get("id");
          return (
            <PurchaseItem
              key={id}
              id={id}
              name={item.get("name")}
              price={item.get("price")}
              quantity={item.get("quantity")}
              photoUri={item.get("photoUri")}
              amount={item.get("amount")}
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
        <View>
          {/* <PurchaseItem goToPage={this.goToPage} />
          <PurchaseItem goToPage={this.goToPage} /> */}
          {this.purchaseItemMapper()}
        </View>
        <PurchaseFooter />
      </View>
    );
  }
}

PurchasesScreen.navigationOptions = {
  headerTitle: props => <PurchaseHeader {...props} />
};

export default PurchasesScreen;
