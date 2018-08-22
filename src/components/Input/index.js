// @flow
import React from "react";

import { Input, Item } from "native-base";

import styles from "./styles";

type Props = {
  placeholder: string,
  value: string
};

const BaseInput = (props: Props) => (
  <Item style={styles.inputContainer}>
    <Input
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
    />
  </Item>
);

export default BaseInput;
