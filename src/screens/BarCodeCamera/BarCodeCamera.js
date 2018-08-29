/* @flow */
import React, { PureComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

type Props = {
  currentDate: string,
  updatePurchase: Function
};

export default class Camera extends PureComponent<Props> {
  onBarCodeRead = e => {
    const { updatePurchase, currentDate, navigation } = this.props;
    const id = navigation.getParam("id");
    const shopId = navigation.getParam("shopId");

    updatePurchase({
      id,
      shopId,
      param: "barCode",
      value: e.data,
      date: currentDate
    });

    navigation.goBack();
  };

  goBack = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          <TouchableOpacity onPress={this.goBack} style={styles.button}>
            <Icon name="chevron-left" size={10} />
          </TouchableOpacity>
        </View>
        <RNCamera
          onBarCodeRead={this.onBarCodeRead}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your camera phone"
        />
      </View>
    );
  }
}

Camera.navigationOptions = {
  header: null
};
