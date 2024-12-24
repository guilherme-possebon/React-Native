import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "../contexts/AppContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <AppProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Login" }} />
          <Stack.Screen name="home/index" options={{ title: "Home" }} />
          <Stack.Screen name="contacts/index" options={{ title: "Contatos" }} />
        </Stack>
      </AppProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
