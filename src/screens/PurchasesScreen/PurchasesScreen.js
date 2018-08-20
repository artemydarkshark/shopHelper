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
  addShop: Function
};

class PurchasesScreen extends React.Component<Props> {
  componentDidMount() {
    console.log(this.props.currentShops);
  }

  goToPage = (page: string): void => {
    this.props.navigation.navigate(page);
  };

  render() {
    return (
      <View style={styles.purchaseContainer}>
        <AddPurchase
          addShop={this.props.addShop}
          currentDate={this.props.currentDate}
        />
        <View>
          <PurchaseItem goToPage={this.goToPage} />
          <PurchaseItem goToPage={this.goToPage} />
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
