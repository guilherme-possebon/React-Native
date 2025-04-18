import {
  Alert,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, theme } from "../../themes/global";
import { useContext, useState } from "react";
import { IContact } from "../../@types/contact";
import { Icon } from "../../components/Icon";

import styles from "./styles";
import { AppContext } from "../../contexts/AppContext";

export default function Contacts() {
  const { contactsList, storeData } = useContext(AppContext);
  const [contact, setContact] = useState<IContact>({} as IContact);

  const save = () => {
    let maxId = 0;
    contactsList.map((item) => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    });

    const newList = [
      ...contactsList,
      {
        id: maxId + 1,
        name: contact.name,
        number: contact.number,
      },
    ];

    storeData(newList);
    setContact({
      name: "",
      number: "",
    } as IContact);
  };

  const removeItem = (id: number) => {
    try {
      Alert.alert("Remover Item", "Tem certeza disso?", [
        {
          text: "Cancelar",
        },
        {
          text: "Sim",
          onPress: () => {
            const newList = contactsList.filter((item) => item.id != id);

            storeData(newList);
          },
        },
      ]);
    } catch (err) {
      Alert.alert("Erro: " + err);
    }
  };

  const Item: ListRenderItem<IContact> = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.contact}>
        {item.name} - {item.number}
      </Text>
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Icon name="trash" size={18} color={colors.red} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={theme.container}>
      <View style={styles.form}>
        <TextInput
          style={[theme.input, { width: "40%" }]}
          onChangeText={(value) =>
            setContact({
              ...contact,
              name: value,
            })
          }
          placeholder="Nome"
          autoCapitalize="characters"
          value={contact.name}
        />

        <TextInput
          style={[theme.input, { width: "40%" }]}
          onChangeText={(value) =>
            setContact({
              ...contact,
              number: value,
            })
          }
          placeholder="Telefone"
          value={contact.number}
        />

        <TouchableOpacity onPress={() => save()}>
          <Icon name="save" size={38} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <Text style={[theme.title, theme.marginTop]}>Lista de Contatos:</Text>

      <FlatList
        data={contactsList}
        renderItem={Item}
        ListEmptyComponent={<Text style={styles.placeholder}>Lista Vazia</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
