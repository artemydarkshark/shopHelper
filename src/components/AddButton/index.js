// @flow
import React from "react";

import { View } from "react-native";

import { RkButton, RkTheme } from "react-native-ui-kitten";
import theme from "../../config/theme";
// import styles from './styles';

type Props = {
  onPress: () => void
};

RkTheme.setType("RkButton", "addButton", {
  backgroundColor: theme.colors.themeColor,
  paddingTop: 0,
  width: 40,
  height: 40,
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 100,
  fontSize: 30
});

const SettingButton = (props: Props) => (
  <View>
    <RkButton rkType="addButton" onPress={props.onPress}>
      +
    </RkButton>
  </View>
);

export default SettingButton;
