/* @flow  */
import * as React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { iconSize } from "../../config/commonSizes";
import styles from "./styles";

type Props = {
  text: string,
  amount: string
};

const ShopItem = ({ text, amount }: Props) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Icon name="check-circle" size={iconSize} style={styles.checkCircle} />
      <Text style={styles.shopName}>{text}</Text>
      <Text style={styles.shopPrice}>{`(${amount})`}</Text>
    </View>
    <Icon name="pencil" size={iconSize} />
  </View>
);

export default ShopItem;
