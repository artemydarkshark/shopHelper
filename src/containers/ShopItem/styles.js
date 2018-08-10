import { StyleSheet } from "react-native";
import theme from "../../config/theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    flexDirection: "row",
    padding: 8,
    borderBottomColor: "#dcd5d5",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkCircle: {
    marginRight: 15
  },
  wrapper: {
    flexDirection: "row"
  },
  shopPrice: {
    fontSize: 18
  },
  shopName: {
    marginRight: 5,
    fontSize: 18
  }
});
