import React from "react";
import { View } from "native-base";

import TextBlock from "../TextBlock";

import styles from "./styles";

const PurchaseFooter = () => (
  <View style={styles.footerContainer}>
    <TextBlock styles={styles.footerText}>3 линии</TextBlock>
    <TextBlock styles={styles.footerText}>0 порций</TextBlock>
  </View>
);

export default PurchaseFooter;
