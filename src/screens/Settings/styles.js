import { StyleSheet } from "react-native";
import theme from "../../config/theme";

export default StyleSheet.create({
  settingContainer: {
    marginTop: 18,
    paddingHorizontal: 10
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  header: {
    marginBottom: 20
  },
  dateInput: { margin: 0, borderColor: "transparent" },
  dateText: {
    fontSize: theme.fontSizes.main,
    color: "#000"
  }
});
