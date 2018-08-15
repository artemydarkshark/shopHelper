import React from "react";

import { View } from "react-native";

import AddPurchase from "../../containers/AddPurchase";
import PurchaseHeader from "../../containers/PurchaseHeader";
import PurchaseItem from "../../components/PurchaseItem";
import PurchaseFooter from "../../components/PurchaseFooter";

import styles from "./styles";

class PurchasesScreen extends React.Component {
  goToPage = (page: string): void => {
    this.props.navigation.navigate(page);
  };

  render() {
    return (
      <View style={styles.purchaseContainer}>
        <AddPurchase />
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
