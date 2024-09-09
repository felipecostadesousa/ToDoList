import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    marginHorizontal: 16,
  },
  taskNotDone: {
    flex: 1,
    fontSize: 14,
    color: "#F2F2F2",
  },
  taskDone: {
    flex: 1,
    fontSize: 14,
    color: "#808080",
    textDecorationLine: "line-through",
  }
});