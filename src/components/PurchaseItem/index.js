import React, { PureComponent } from "react";
import { View } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "../Input";

import TextBlock from "../TextBlock";
import styles from "./styles";

export default class PurchaseItem extends PureComponent {
  componentDidMount() {
    console.log("work");
  }
  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemHeader}>
          <TextBlock styles={styles.title} bold>
            Вино “Кагор”
          </TextBlock>
          <Icon style={styles.headerIcon} name="trash-o" size={24} />
          <Icon style={styles.headerIcon} name="barcode" size={24} />
        </View>
        <View style={styles.itemContent}>
          <View>
            <Icon name="picture-o" color="#8b8b8b" size={155} />
          </View>
          <View style={styles.itemConsumption}>
            <Input placeholder="Кол-во 0.0 шт." />
            <Input placeholder="Цена 0.0 шт." />
            <TextBlock>Сумма: 122 грн</TextBlock>
          </View>
        </View>
      </View>
    );
  }
}