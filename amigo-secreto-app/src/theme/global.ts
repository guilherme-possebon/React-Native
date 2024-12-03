import { StyleSheet } from "react-native";

export const colors = {
  blue: "#2962FF",
  white: "#fff",
  grey: "#BDBDBD",
  black: "#000",
};

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    gap: 6,
  },
  button: {
    backgroundColor: colors.blue,
    padding: 8,
    borderRadius: 8,
    color: colors.white,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  buttonContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  textInputContainer: {
    justifyContent: "center",
    gap: 6,
    width: "70%",
    marginTop: 16,
  },
  textInput: {
    backgroundColor: colors.grey,
    borderRadius: 8,
    padding: 8,
    color: colors.black,
  },
});
