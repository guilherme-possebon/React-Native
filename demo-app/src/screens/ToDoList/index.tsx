import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { theme } from "../../themes/global";

export function ToDoList() {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const save = (value: string) => {
    setList([...list, value]);
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={theme.input}
        onSubmitEditing={() => save(text)}
      />
      <Text style={theme.label}>Lista de tarefas</Text>
      {list.map((todo, index) => (
        <Text key={index} style={theme.listItem}>
          {todo}
        </Text>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
