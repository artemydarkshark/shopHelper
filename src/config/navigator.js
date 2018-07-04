import { StackNavigator } from "react-navigation";
import WelcomePage from "../components/WelcomePage";
import Settings from "../components/Settings";

export const Navigator = StackNavigator(
  {
    Home: {
      screen: WelcomePage,
      navigationOptions: {
        title: "Home"
      }
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
