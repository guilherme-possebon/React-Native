import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../../themes/global";
import { Icon } from "../../components/Icon";
import { useState } from "react";
import axios from "axios";

export function Cep() {
  const [cep, setCep] = useState({
    cep: "95970-000",
  });

  const SearchCep = async () => {
    const response = await axios.get(
      `https://brasilapi.com.br/api/cep/v2/${cep.cep}`
    );
    console.log(response.data);
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
