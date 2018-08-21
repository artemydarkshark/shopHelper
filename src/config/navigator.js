import { createStackNavigator } from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";

import FirstScreen from "../screens/FirstScreen";
import Settings from "../screens/Settings";
import PurchasesScreen from "../screens/PurchasesScreen";
import Camera from "../screens/Camera";

export const StackNavigator = createStackNavigator(
  {
    Home: FirstScreen,
    Settings,
    PurchasesScreen,
    Camera
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export const navReducer = createNavigationReducer(StackNavigator);

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  "Home",
  state => state.nav
);

export const reduxNavigator = reduxifyNavigator(StackNavigator, "Home");

const mapStateToProps = state => ({
  state: state.nav
});
export const Navigator = connect(mapStateToProps)(reduxNavigator);
