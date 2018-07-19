import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footerContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 40,
    width: "100%",
    borderTopColor: "#eee",
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  footerText: {
    fontSize: 12
  }
});
