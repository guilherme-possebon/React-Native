import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../themes/global";
import { Icon } from "../../components/Icon";
import { ILogin } from "../../@types";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export function Login() {
  const [login, setLogin] = useState<ILogin>({
    username: "emilys",
    password: "emilyspass",
  });

  const doLogin = async () => {
    if (login && login.username.length > 0 && login.password.length > 0) {
      const response = await axios.post("/auth/login", {
        username: login.username,
        password: login.password,
      });

      console.log(response.status);

      if (response.status === 200) {
        Alert.alert(
          "Login feito",
          "Bem-vindo ao sistema",
          [
            {
              text: "OK",
              onPress: () => {
                console.log("OK Pressed");
                setLogin({ ...login, username: "", password: "" });
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Login incorreto",
          "Nome de usuario ou senha inválidos",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Aviso",
        "Por favor, preencha todos os campos",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  return (
    <SafeAreaView style={[theme.container, { gap: 24 }]}>
      <Icon name={"lock"} size={40} />
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

      <TouchableOpacity
        style={[theme.button, { width: "auto" }]}
        onPress={doLogin}
      >
        <Text style={theme.textButton}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   inputsContainer: {

//   },
// });
