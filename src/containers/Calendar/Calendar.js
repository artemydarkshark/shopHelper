/* @flow  */
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-datepicker";
import { iconSize } from "../../config/commonSizes";

import styles from "./styles";

class LogoTitle extends React.PureComponent {
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
        <View style={styles.dateTime}>
          <Text style={styles.dateStyle}>{currDate}</Text>
          <DatePicker
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={setCurrent}
            hideText
          />
        </View>
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
