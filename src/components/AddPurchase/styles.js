import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 9
  },
  inputContainer: {
    flex: 1,
    paddingRight: 14
  }
});
