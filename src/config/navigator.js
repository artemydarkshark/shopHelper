import { StackNavigator } from "react-navigation";
import FirstScreen from "../screens/FirstScreen";
import Settings from "../components/Settings";

export const Navigator = StackNavigator(
  {
    Home: {
      screen: FirstScreen
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#d32f2f"
      }
    }
  }
);
