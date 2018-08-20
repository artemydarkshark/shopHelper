import React, { PureComponent } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Input from "../../components/Input";

import styles from "./styles";

class AddPurchase extends PureComponent {
  addShop = () => console.log("add");
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.inputContainer}>
          <Input placeholder="Кол-во 0.0 шт." />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Цена 0.0 грн" />
        </View>
        <Icon
          name="plus-circle"
          size={30}
          color="#f00"
          onPress={() => this.props.addShop({ date: this.props.currentDate })}
        />
      </View>
    );
  }
}

export default AddPurchase;
