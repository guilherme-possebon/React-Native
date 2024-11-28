import { StyleSheet } from "react-native";

export const colors = {
  background: "#CFD8DC",
  blue: "#2196F3",
  orange: "#BF360C",
  backgroundInput: "#90A4AE",
  borderInput: "#455A64",
  white: "#FFF",
  black: "#000",
};

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.blue,
    padding: 12,
    borderRadius: 8,
    width: "50%",
  },
  textButton: {
    textAlign: "center",
    fontSize: 24,
    color: colors.white,
  },
  marginBottom: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: colors.backgroundInput,
    fontSize: 14,
    padding: 12,
    borderWidth: 0.5,
    borderColor: colors.borderInput,
    borderRadius: 8,
    width: "60%",
  },
  label: {
    fontSize: 20,
    fontWeight: 500,
    marginVertical: 8,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.black,
  },
  listItemLineThrough: {
    textDecorationLine: "line-through",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.blue,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
  },
});
