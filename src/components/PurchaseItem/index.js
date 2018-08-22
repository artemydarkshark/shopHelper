// @flow
import React, { PureComponent } from "react";
import { View } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import Input from "../Input";
import TextBlock from "../TextBlock";

import { floatInputValue } from "../../utils/formatInput";
import styles from "./styles";

type Props = {
  goToPage: any,
  id: string,
  shopId: string,
  name: string,
  price: number,
  quantity: number,
  photoUri: string,
  deletePurchase: Function,
  updatePurchase: Function,
  amount: number
};

class PurchaseItem extends PureComponent<Props> {
  deleteItem = () => {
    const { id, shopId, deletePurchase } = this.props;
    deletePurchase({ id, shopId });
  };
  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemHeader}>
          <TextBlock styles={styles.title} bold>
            {this.props.name}
          </TextBlock>
          <Icon
            style={styles.headerIcon}
            onPress={this.deleteItem}
            name="trash-o"
            size={24}
          />
          <Icon style={styles.headerIcon} name="barcode" size={24} />
        </View>
        <View style={styles.itemContent}>
          <View>
            <Icon
              onPress={() => this.props.goToPage("Camera")}
              name="picture-o"
              color="#8b8b8b"
              size={155}
            />
          </View>
          <View style={styles.itemConsumption}>
            <Input
              placeholder="Кол-во 0.0 шт."
              value={floatInputValue(this.props.quantity)}
            />
            <Input
              placeholder="Цена 0.0 шт."
              value={floatInputValue(this.props.price)}
            />
            <TextBlock>Сумма: {floatInputValue(this.props.amount)}</TextBlock>
          </View>
        </View>
      </View>
    );
  }
}

export default PurchaseItem;
