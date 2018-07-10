/* @flow */
import * as React from "react";
import { View, ImageBackground, DatePickerIOS } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import ShopItem from "../../containers/ShopItem";
import Conclusion from "../../containers/Conclusion";
import Calendar from "../../containers/Calendar";
import { iconSize } from "../../config/commonSizes";
import styles from "./styles";

const shops = [
  { text: "first shop", amount: "50$" },
  { text: "second shop", amount: "100$" },
  { text: "third shop", amount: "200$" }
];

const style = { width: "100%", height: "100%" };

class FirstScreen extends React.PureComponent<{}> {
  static navigationOptions = {
    headerTitle: <Calendar />,
    color: "red"
  };
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(time) {
    this.props.setCurrentDate(time);
  }

  render() {
    const { navigation, showDatePicker } = this.props;
    const { time } = this.state;

    return (
      <View>
        <ImageBackground
      source={require("../../img/bg.jpg")} // eslint-disable-line
          style={style}
        >
          <View style={styles.container}>
            <View>
              {shops.map(({ text, amount }) => (
                <ShopItem key={text} text={text} amount={amount} />
              ))}
              <View style={styles.plusShop}>
                <Icon
                  name="plus-circle"
                  size={iconSize * 1.4}
                  color="#ff0000"
                />
              </View>
            </View>

            {showDatePicker ? (
              <DatePickerIOS date={time} onDateChange={this.handleTime} />
            ) : null}
            <Conclusion navigate={() => navigation.navigate("Settings")} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default FirstScreen;
