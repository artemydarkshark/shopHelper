// @flow
import React from "react";

import { View, Button } from "react-native";

import styles from "./styles";

type Props = {
  title: string
};

const SettingButton = (props: Props) => (
  <View style={styles.container}>
    <Button title={props.title} />
  </View>
);

export default SettingButton;
