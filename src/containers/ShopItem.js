/* @flow  */
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ShopItem = ({ text }) => (
  <View>
    <Icon />
    <Text>{text}</Text>
    <Icon />
  </View>
);

export default ShopItem;
