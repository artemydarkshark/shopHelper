/* @flow  */
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { iconSize } from "../../config/commonSizes";
import styles from "./styles";

class LogoTitle extends React.PureComponent {
  render() {
    const { currDate, increaseDate, decreaseDate } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name="angle-left"
          size={iconSize * 1.4}
          color="#fff"
          onPress={increaseDate}
        />
        <View style={styles.dateTime}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>{currDate}</Text>
          <Icon name="calendar" size={iconSize * 1.2} color="#fff" />
        </View>
        <Icon
          name="angle-right"
          size={iconSize * 1.4}
          color="#fff"
          onPress={decreaseDate}
        />
      </View>
    );
  }
}

export default LogoTitle;
