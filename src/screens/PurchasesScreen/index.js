import React from "react";

import { View } from "react-native";

import AddPurchase from "../../components/AddPurchase";
import PurchaseHeader from "../../containers/PurchaseHeader";

import styles from "./styles";

const PurchasesScreen = () => (
  <View style={styles.purchaseContainer}>
    <AddPurchase />
  </View>
);

PurchasesScreen.navigationOptions = {
  headerTitle: props => <PurchaseHeader {...props} />
};

export default PurchasesScreen;
