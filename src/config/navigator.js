import { createStackNavigator } from "react-navigation";
import FirstScreen from "../screens/FirstScreen";
import Settings from "../screens/Settings";
import PurchasesScreen from "../screens/PurchasesScreen";
import Camera from "../screens/Camera";

export const Navigator = createStackNavigator(
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
