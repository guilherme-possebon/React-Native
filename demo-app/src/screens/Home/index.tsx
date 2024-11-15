import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationButton } from "./components/NavigationButton";
import { StyleSheet } from "react-native";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationButton pageName="Account" />
      <NavigationButton pageName="Contador" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
