import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    marginTop: -30,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: "#5E60CE",
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    marginHorizontal: 24,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20,
  },
  created: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  done: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  doneText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  counter: {
    height: 19,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counterText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
  flatList: {
    marginHorizontal: 24,
  },
  listEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    marginTop: 20,
  },
  listEmptyImage: {
    marginBottom: 16,
  },
  listEmptyFirstText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
  },
  listEmptySecondText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "regular",
  },
});