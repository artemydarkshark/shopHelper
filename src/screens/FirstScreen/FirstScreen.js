/* @flow */
import React from "react";
import { View, ImageBackground } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import ShopItem from "../../containers/ShopItem";
import { iconSize } from "../../config/commonSizes";
import styles from "./styles";

const shops = [
  { text: "first shop", amount: "50$" },
  { text: "second shop", amount: "100$" },
  { text: "third shop", amount: "200$" }
];

const FirstScreen = () => (
  <View>
    <ImageBackground
      source={require("../../img/bg.jpg")} // eslint-disable-line
      style={{ width: "100%", height: "100%" }}
    >
      {shops.map(({ text, amount }) => (
        <ShopItem key={text} text={text} amount={amount} />
      ))}
      <View style={styles.plusShop}>
        <Icon name="plus-circle" size={iconSize * 1.4} color="#ff0000" />
      </View>
    </ImageBackground>
  </View>
);

export default FirstScreen;
