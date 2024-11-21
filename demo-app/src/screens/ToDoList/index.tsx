import { SetStateAction, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors, theme } from "../../themes/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export function ToDoList() {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const save = (value: string) => {
    setList([...list, value]);
    storeData([...list, value]);
    setText("");
  };

  const remove = (id: number) => {
    setList(list.filter((todo, index) => index !== id));
  };

  const storeData = async (value: string[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(jsonValue);
      await AsyncStorage.setItem("TodoList", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const retrievedData: SetStateAction<string[]> = JSON.parse(value);
        return retrievedData;
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const fetchData = async () => {
    const storageData = await getData("TodoList");
    if (storageData) {
      setList(storageData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <TouchableOpacity
            onPress={() => {
              const copy = [...list];
              copy.splice(index, 1);
              console.log(copy);
            }}
            style={styles.deleteButton}
          >
            <Text>
              <FontAwesome5 name="trash-alt" size={24} color="black" />
            </Text>
          </TouchableOpacity>
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
  deleteButton: {
    fontSize: 16,
    backgroundColor: colors.background,
    color: colors.orange,
  },
});
