import React from "react";
import { View } from "react-native";
import { Text } from "native-base";

import HeaderInput from "../../components/HeaderInput";

const PurchaseHeader = () => (
  <View
    style={{
      paddingBottom: 15,
      flexDirection: "row",
      alignItems: "flex-end"
    }}
  >
    <HeaderInput placeholder="Покупка" />
    <View style={{ marginLeft: 10 }}>
      <Text style={{ color: "#fff", fontSize: 24 }}> Σ 0.00</Text>
    </View>
  </View>
);

export default PurchaseHeader;
