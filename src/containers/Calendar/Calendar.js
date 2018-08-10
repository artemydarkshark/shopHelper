/* @flow  */
import React, { PureComponent } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Date from "../../components/Date";
import { iconSize } from "../../config/commonSizes";

import styles from "./styles";

type Props = {
  currDate: string,
  increaseDate: Function,
  decreaseDate: Function,
  setCurrent: Function
};

class LogoTitle extends PureComponent<Props> {
  render() {
    const { currDate, increaseDate, decreaseDate, setCurrent } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name="angle-left"
          size={iconSize * 1.4}
          color="#fff"
          onPress={decreaseDate}
        />
        <Date
          currDate={currDate}
          setCurrent={setCurrent}
          viewStyle={styles.dateTime}
          dateStyle={styles.dateStyle}
        />
        <Icon
          name="angle-right"
          size={iconSize * 1.4}
          color="#fff"
          onPress={increaseDate}
        />
      </View>
    );
  }
}

export default LogoTitle;
