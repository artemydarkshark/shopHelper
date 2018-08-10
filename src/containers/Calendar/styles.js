import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8
  },
  dateTime: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  dateStyle: {
    color: "#fff",
    fontWeight: "bold"
  }
});
