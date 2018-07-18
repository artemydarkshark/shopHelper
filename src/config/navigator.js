import { createStackNavigator } from "react-navigation";
import FirstScreen from "../screens/FirstScreen";
import Settings from "../screens/Settings";

export const Navigator = createStackNavigator(
  {
    Home: FirstScreen,
    Settings
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
