// @flow
import React from "react";

import { RkText, RkTheme } from "react-native-ui-kitten";

type Props = {
  text: string
};

RkTheme.setType("RkTextInput", "text", {
  fontSize: 20
});

const BaseText = (props: Props) => <RkText rkType="text">{props.text}</RkText>;

export default BaseText;
