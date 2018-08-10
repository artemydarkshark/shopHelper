// @flow
import React from "react";

import { View } from "react-native";
import { Button, Text } from "native-base";

import styles from "./styles";

type Props = {
  title: string
};

const SettingButton = (props: Props) => (
  <View style={styles.container}>
    <Button danger full>
      <Text style={styles.text}>{props.title}</Text>
    </Button>
  </View>
);

export default SettingButton;
