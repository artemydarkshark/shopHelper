// @flow
import React from "react";
import { View } from "react-native";
import { Text } from "native-base";

import HeaderInput from "../../components/HeaderInput";

const PurchaseHeader = props => {
  const name = props.shop.get("name");
  const totalAmount = props.shop.get("totalAmount");
  return (
    <View
      style={{
        paddingBottom: 15,
        flexDirection: "row",
        alignItems: "flex-end"
      }}
    >
      <HeaderInput placeholder="Покупка" value={name} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: "#fff", fontSize: 24 }}> Σ {totalAmount}</Text>
      </View>
    </View>
  );
};

export default PurchaseHeader;
