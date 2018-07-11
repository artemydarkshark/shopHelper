// @flow
import React from "react";

import { TextInput } from "react-native";

type Props = {
  placeholder: string
};

const BaseInput = (props: Props) => (
  <TextInput
    placeholder={props.placeholder}
    // inputStyle={{ color: '#000' }}
  />
);

export default BaseInput;
