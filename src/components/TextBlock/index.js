import React from "react";
import { Text } from "native-base";

import styles from "./styles";

type Props = {
  children: React.Node,
  bold: boolean,
  styles?: any
};

const TextBlock = (props: Props) => {
  const fontWeight = props.bold ? "bold" : "normal";
  return (
    <Text style={{ ...styles.text, ...props.styles, fontWeight }}>
      {props.children}
    </Text>
  );
};

TextBlock.defaultProps = {
  styles: {}
};

export default TextBlock;
