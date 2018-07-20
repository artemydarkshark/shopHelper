import { StyleSheet } from "react-native";
import theme from "../../config/theme";

export default StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeholderStyle: {
    color: theme.colors.textColor
  },
  select: {
    height: 30
  },
  selectText: {
    paddingHorizontal: 10
  }
});
