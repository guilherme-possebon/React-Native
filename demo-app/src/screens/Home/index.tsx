import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationButton } from "./components/NavigationButton";
import { theme } from "../../themes/global";
import { StyleSheet, View } from "react-native";

export function Home() {
  return (
    <SafeAreaView style={theme.container}>
      <View style={styles.navigationContainer}>
        <NavigationButton pageName="Account" navigate="Account" />
        <NavigationButton pageName="Contador" navigate="Contador" />
        <NavigationButton pageName="Lista de tarefas" navigate="ToDoList" />
        <NavigationButton pageName="Login" navigate="Login" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    gap: 8,
  },
});
