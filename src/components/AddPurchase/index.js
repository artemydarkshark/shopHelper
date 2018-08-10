// @flow
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Input from "../../components/Input";

import styles from "./styles";

// type Props = {
//   placeholder: string
// };

const AddPurchase = () => (
  <View style={styles.item}>
    <View style={styles.inputContainer}>
      <Input placeholder="Кол-во 0.0 шт." />
    </View>
    <View style={styles.inputContainer}>
      <Input placeholder="Цена 0.0 грн" />
    </View>
    <Icon
      // onPress={this.goToPurchasesScreen}
      name="plus-circle"
      size={30}
      color="#f00"
    />
  </View>
);

export default AddPurchase;
