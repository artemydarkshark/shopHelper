// @flow
import React from "react";

import { Input, Item } from "native-base";

import styles from "./styles";

type Props = {
  placeholder: string,
  value: string,
  onChangeText: Function,
  keyboardType?: string
};

const BaseInput = (props: Props) => (
  <Item style={styles.inputContainer}>
    <Input
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
    />
  </Item>
);

BaseInput.defaultProps = {
  keyboardType: "default"
};

export default BaseInput;
