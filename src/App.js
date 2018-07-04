/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import Welcome from "./components/WelcomePage";
import { Provider } from "react-redux";
import { Navigator } from "./config/navigator";

import store from "./config/store";

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default () => <App />;

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 15
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
}); */
