// @flow
import React from "react";

import { RkTextInput, RkTheme } from "react-native-ui-kitten";
import theme from "../../config/theme";

type Props = {
  placeholder: string
};

RkTheme.setType("RkTextInput", "input", {
  input: {
    marginLeft: 0,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 5
  },
  color: "gray",
  container: {
    marginHorizontal: 10,
    underlineWidth: 1,
    underlineColor: theme.colors.textColor
  }
});

const BaseInput = (props: Props) => (
  <RkTextInput
    placeholder={props.placeholder}
    rkType="input"
    props={{ placeholderTextColor: "#FFF" }}
    // inputStyle={{ color: '#000' }}
  />
);

export default BaseInput;
