import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors, theme } from "../../theme/global";
import Item from "./components/item";
import { IContacts } from "../../@types";
import { StatusBar } from "expo-status-bar";

export default function contacts() {
  const [contacts, setContacts] = useState<IContacts>({} as IContacts);
  const [contactsList, setContactsList] = useState<IContacts[]>([]);
  const [id, setId] = useState<number>(0);

  const save = () => {
    setId((prev) => prev + 1);

    const newList = [
      ...contactsList,
      { id: id, name: contacts.name, phoneNumber: contacts.phoneNumber },
    ];

    setContactsList(newList);
    setContacts({ ...contacts, name: "", phoneNumber: "" });
  };

  return (
    <>
      <SafeAreaView style={theme.container}>
        <View style={theme.textInputContainer}>
          <TextInput
            placeholder="Escreva o nome do contato"
            placeholderTextColor={colors.white}
            value={contacts.name}
            onChangeText={(name) => setContacts({ ...contacts, name: name })}
            style={theme.textInput}
          />
          <TextInput
            placeholder="Escreva o numero do contato"
            placeholderTextColor={colors.white}
            value={contacts.phoneNumber}
            onChangeText={(number) =>
              setContacts({ ...contacts, phoneNumber: number })
            }
            style={theme.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => save()}
          style={[theme.button, { marginTop: 12 }]}
        >
          <Text style={theme.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <FlatList
          data={contactsList}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              phoneNumber={item.phoneNumber}
              id={item.id}
            />
          )}
          keyExtractor={(item: IContacts, index: number) => "key" + index}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
