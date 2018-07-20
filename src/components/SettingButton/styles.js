import { StyleSheet } from "react-native";
import theme from "../../config/theme";

export default StyleSheet.create({
  container: {
    marginTop: theme.indentations.top,
    width: "50%",
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between",
    alignSelf: "flex-end",
    flexDirection: "row",
    backgroundColor: theme.colors.backgroundColor
  },
  text: {
    width: "100%",
    textAlign: "center",
    color: "#fff"
  }
});
