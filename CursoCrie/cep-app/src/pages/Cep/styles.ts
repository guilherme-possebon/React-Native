import { StyleSheet } from "react-native";
import { colors } from "../../theme/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 32,
  },
  input: {
    backgroundColor: colors.light,
    width: 300,
    fontSize: 18,
    padding: 16,
    color: colors.text,
    borderRadius: 12,
    borderColor: colors.dark,
    borderWidth: 0.5,
  },
  info: {
    marginTop: 16,
    fontSize: 16,
    color: colors.text,
  },
  labelInfo: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: colors.dark,
  },
});
