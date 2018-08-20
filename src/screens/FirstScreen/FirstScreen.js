/* @flow */
import * as React from "react";
import { View, ImageBackground } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import ShopItem from "../../containers/ShopItem";
import Conclusion from "../../containers/Conclusion";
import Calendar from "../../containers/Calendar";
import { iconSize } from "../../config/commonSizes";
import styles from "./styles";

type Props = {
  navigation: Object,
  currentShops: any
};

const style = { width: "100%", height: "100%" };

class FirstScreen extends React.PureComponent<Props> {
  static navigationOptions = {
    headerTitle: <Calendar />,
    color: "red"
  };

  currentShopsMapper = () => {
    if (!this.props.currentShops) return null;
    return this.props.currentShops.map(item => (
      <ShopItem
        key={item.get("id")}
        text={item.get("name")}
        amount={item.get("totalAmount")}
      />
    ));
  };
  goToPage = (page: string): void => {
    this.props.navigation.navigate(page);
  };

  goToPurchasesScreen = this.goToPage.bind(null, "PurchasesScreen");
  goToSettings = this.goToPage.bind(null, "Settings");

  render() {
    const size = iconSize * 1.4;

    return (
      <View>
        <ImageBackground
          // $FlowFixMe
          source={require("../../img/bg.jpg")} // eslint-disable-line
          style={style}
        >
          <View style={styles.container}>
            <View>
              {this.currentShopsMapper()}
              <View style={styles.plusShop}>
                <Icon
                  onPress={this.goToPurchasesScreen}
                  name="plus-circle"
                  size={size}
                  color="#f00"
                />
              </View>
            </View>
            <Conclusion navigate={this.goToSettings} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default FirstScreen;
