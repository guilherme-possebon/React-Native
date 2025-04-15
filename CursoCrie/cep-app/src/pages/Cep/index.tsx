import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme/global";
import axios from "axios";
import { ICep } from "../../@types";

export function Cep() {
  const [cep, setCep] = useState<string>("");
  const [obgCep, setObgCep] = useState<ICep>({} as ICep);

  const getCep = async () => {
    console.log(cep);
    if (cep.length === 8) {
      axios
        .get<ICep>(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            setObgCep(res.data);
          }
        })
        .catch(() => {
          setObgCep({} as ICep);
          Alert.alert("Atenção", "Erro ao buscar o CEP!");
        });
    }
  };

  return (
    <View style={[theme.container, { gap: 8 }]}>
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={cep}
        maxLength={8}
        onChangeText={(text) => setCep(text)}
        onSubmitEditing={getCep}
      />

      <View>
        <Text style={styles.labelInfo}>{obgCep.logradouro}</Text>
        <Text style={styles.labelInfo}>{obgCep.bairro}</Text>
        <Text style={styles.labelInfo}>{obgCep.localidade}</Text>
        <Text style={styles.labelInfo}>{obgCep.uf}</Text>
      </View>
    </View>
  );
}
