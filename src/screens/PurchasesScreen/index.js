import React from "react";

import { View } from "react-native";

import AddPurchase from "../../components/AddPurchase";
import PurchaseHeader from "../../containers/PurchaseHeader";
import PurchaseItem from "../../components/PurchaseItem";
import PurchaseFooter from "../../components/PurchaseFooter";

import styles from "./styles";

const PurchasesScreen = () => (
  <View style={styles.purchaseContainer}>
    <AddPurchase />
    <View>
      <PurchaseItem />
      <PurchaseItem />
    </View>
    <PurchaseFooter />
  </View>
);

PurchasesScreen.navigationOptions = {
  headerTitle: props => <PurchaseHeader {...props} />
};

export default PurchasesScreen;
