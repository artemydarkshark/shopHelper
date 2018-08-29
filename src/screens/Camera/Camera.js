/* @flow */
import React, { PureComponent } from "react";
import { TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

export default class Camera extends PureComponent {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.3, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const id = this.props.navigation.getParam("id");
      const shopId = this.props.navigation.getParam("shopId");
      const { updatePurchase, currentDate } = this.props;

      updatePurchase({
        id,
        shopId,
        param: "photo",
        value: data.base64,
        date: currentDate
      });
      this.props.navigation.goBack();
    }
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
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your camera phone"
        />

        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture}
            style={[styles.button, styles.capture]}
          >
            <Icon name="camera" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Camera.navigationOptions = {
  header: null
};
