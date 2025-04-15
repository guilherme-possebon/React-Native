import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../themes/global";

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={theme.container}>
      <Text style={styles.text}>Contador: {count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 10)}
      >
        <Text style={styles.textButton}>Incrementar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#f00",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3f51b5",
    padding: 16,
    borderRadius: 8,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },
});
