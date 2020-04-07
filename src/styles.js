import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flexNumbers: {
    flex: 3,
  },
  rootContainer: {
    flex: 1,
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  containerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  displayOutput: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  textDefault: {
    color: "#000",
    fontFamily: "System",
    fontSize: 60,
  },
  textButtons: {
    color: "#000",
    fontFamily: "System",
    fontSize: 26,
  },
  buttonStyles: {
    flex: 1,
    margin: 4,
    borderRadius: 5,
  },
});
