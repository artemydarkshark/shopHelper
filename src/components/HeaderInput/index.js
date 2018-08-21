// @flow
import React from "react";
import { Input, Item } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

type Props = {
  placeholder: string,
  value: string
};

const HeaderInput = (props: Props) => (
  <Item style={styles.containerInput}>
    <Input
      style={styles.input}
      placeholderTextColor="#fff"
      placeholder={props.placeholder}
      value={props.value}
    />
    <Icon name="pencil" style={styles.icon} />
  </Item>
);

export default HeaderInput;
