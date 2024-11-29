import { StyleSheet } from "react-native";

export const colors = {
  background: "#F5F5F5",
  text: "#37474F",
  error: "#e74c3c",
  success: "#2ecc71",
  warning: "#f1c40f",
  info: "#3498db",
  light: "#EEEEEE",
  dark: "#9E9E9E",
};

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: colors.text,
  },
});
