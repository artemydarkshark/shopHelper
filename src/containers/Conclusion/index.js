/* @flow  */
import * as React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { iconSize } from "../../config/commonSizes";

type Props = {
  amountOfMoney?: number,
  navigate: () => void
};

const Conclusion: React.StatelessFunctionalComponent<Props> = ({
  amountOfMoney = 0,
  navigate
}): React.Node => (
  <View style={styles.container}>
    <Icon name="cogs" size={iconSize} onPress={navigate} />
    <Text>{`${amountOfMoney} грн`}</Text>
    <Icon name="file-excel-o" size={iconSize} color="#1d673d" />
  </View>
);

export default Conclusion;
