import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../themes/global";
import { Icon } from "../../components/Icon";
import { useState } from "react";
import axios from "axios";
import { ICep } from "../../@types";

export function Cep() {
  const [cep, setCep] = useState({
    cep: "95900020",
  });

  const SearchCep = async () => {
    try {
      const response = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${cep.cep}`
      );
      console.log(response.data);
      const cepInfos: ICep = response.data;
      Alert.alert(
        "CEP Encontrado",
        `Cep: ${cepInfos.cep} \nCidade: ${cepInfos.city} ${
          cepInfos.neighborhood && cepInfos.neighborhood
            ? `\nBairro: ${cepInfos.neighborhood}`
            : ""
        } \nEstado: ${cepInfos.state} ${
          cepInfos.street && cepInfos.street ? `\nRua: ${cepInfos.street}` : ""
        } `
      );
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao buscar CEP", "CEP inválido");
    }
  };

  return (
    <SafeAreaView style={[theme.container, { gap: 24 }]}>
      <Icon name={"map-pin"} size={40} />
      <TextInput
        style={theme.input}
        placeholder="Digite o CEP"
        value={cep.cep}
        onChangeText={(text) => setCep({ ...cep, cep: text })}
      />

      <TouchableOpacity
        style={[theme.button, { width: "auto" }]}
        onPress={() => SearchCep()}
      >
        <Text style={theme.textButton}>Buscar CEP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
