import React from "react";

import { View } from "react-native";
import PurchaseHeader from "../../containers/PurchaseHeader";
import TextBlock from "../../components/TextBlock";
import styles from "./styles";

const PurchasesScreen = () => (
  <View style={styles.purchaseContainer}>
    <TextBlock bold>Hello</TextBlock>
  </View>
);

PurchasesScreen.navigationOptions = {
  headerTitle: props => <PurchaseHeader {...props} />
};

export default PurchasesScreen;
