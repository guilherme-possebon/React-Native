import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ILogin } from "../@types/login";
import axios from "axios";
import { theme } from "../themes/global";

export default function login() {
  const [login, setLogin] = useState({} as ILogin);

  const handleLogin = async () => {
    try {
      if (login.username && login.password) {
        const options = {};
        const result = await axios.get("http://168.75.68.178", options);
        console.log();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={theme.container}>
      <View>
        <TextInput
          style={theme.input}
          placeholder="Nome de usuario"
          value={login?.username}
          onChangeText={(text) => setLogin({ ...login, username: text })}
        />
        <TextInput
          style={theme.input}
          placeholder="Digite a senha"
          value={login?.password}
          onChangeText={(text) => setLogin({ ...login, password: text })}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => handleLogin()}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
