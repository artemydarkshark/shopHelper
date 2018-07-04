// @flow
import * as React from "react";
import { Text, View, Platform } from "react-native";
import { Button } from "react-native-elements";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import selectors from "../../selectors";
import actions from "../../actions";
import styles from "./styles";

const {
  mainSelectors: { getMainName: name }
} = selectors;

const {
  mainActions: { changeMainName }
} = actions;

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"
});

type Props = {
  navigation: Object,
  name: string,
  changeName: Function
};
class Welcome extends React.Component<Props> {
  toSettings = () => {
    this.props.navigation.navigate("Settings");
  };
  render() {
    const { name, changeName } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native {name}!!!</Text>
        <Text style={styles.instructions}>To get stared, edit App.js</Text>
        <Text style={styles.instructions}> {instructions} </Text>
        <Button title="BUTTON" onPress={this.toSettings} />
        <Button
          style={styles.reduxButton}
          title="REDUX"
          onPress={() => changeName("vasya")}
        />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  name
});

const mapDispatchToProps = {
  changeName: changeMainName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
