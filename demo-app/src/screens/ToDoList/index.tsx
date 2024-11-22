import { SetStateAction, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, theme } from "../../themes/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ITask } from "../../@types/task";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export function ToDoList() {
  const [text, setText] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);

  const save = (value: string) => {
    setId((prev) => prev + 1);
    console.log(id, "id");

    const newList = [
      ...list,
      {
        id: id,
        title: value,
      },
    ];

    setList(newList);
    storeData(newList, "TodoList");
    setText("");
  };

  const storeData = async (value: ITask[], key: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (key: string): Promise<ITask[] | undefined> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const retrievedData = JSON.parse(value);
        return retrievedData;
      }
      return [];
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const fetchData = async () => {
    const storageList = await getData("TodoList");
    console.log("🚀 ~ fetchData ~ storageList:", storageList);

    if (storageList) {
      setList(storageList);
      for (let index = 0; index < storageList.length; index++) {
        const id = storageList[index].id;

        setId(id + 1);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Item = ({ title, id }: ITask) => (
    <View style={theme.listContainer}>
      <Text style={theme.listItem}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          const copy = [...list];
          const newArr = copy.filter((ele, ind) => ele.id !== id);

          setList(newArr);
          storeData(newArr, "TodoList");
        }}
      >
        <Text>
          <FontAwesome5 name="trash-alt" size={24} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          onChangeText={(value) => setText(value)}
          value={text}
          style={theme.input}
          onSubmitEditing={() => {
            save(text);
          }}
        />
        <Text style={theme.label}>Lista de tarefas</Text>

        <FlatList
          data={list}
          renderItem={({ item }) => <Item title={item.title} id={item.id} />}
          keyExtractor={(item: ITask, index: number) => "key" + index}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
