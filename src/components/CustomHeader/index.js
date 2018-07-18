import React from "react";
import { Header } from "react-navigation";
import { View, Text } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

const CustomHeader = props => (
  <View
    style={{
      height: 56,
      position: "relative"
      // marginTop: Platform.OS == "ios" ? 20 : 0
    }}
  >
    <Text
      style={{
        color: "#fff",
        position: "absolute",
        bottom: 0,
        zIndex: 100,
        left: 50,
        fontSize: 24
      }}
    >
      Hello
    </Text>
    <Header {...props} />
  </View>
);

export default CustomHeader;
