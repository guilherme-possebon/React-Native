import {
  ActivityIndicator,
  Alert,
  ListRenderItem,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, theme } from "../../themes/global";
import { router } from "expo-router";
import { IContact } from "../../@types/contact";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Icon } from "../../components/Icon";
import Modal from "../../components/Modal";

//com o expo-router, todas as telas precisam retornar DEFAULT
export default function Home() {
  const { contactsList, getContacts } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [getParticipantes, setParticipantes] = useState<IContact[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  async function realizarSorteio() {
    try {
      let participantes: IContact[] = contactsList;

      if (participantes.length > 2) {
        //cria um array de números para armazenar os IDs já sorteados
        let sorteados: number[] = [];

        let notSort: boolean;
        //percorre a lista de contatos
        for (let x = 0; x < participantes.length; x++) {
          notSort = true;
          let attempt = 0;
          const maxAttempts = 1000;

          while (notSort && attempt < maxAttempts) {
            const random = parseInt(
              (Math.random() * participantes.length).toString()
            );
            /*verifica se o sorteado é diferente do participante em questão
                        e o sorteado não pode estar na lista de contatos já sorteados */
            if (random != x && !sorteados.includes(random)) {
              participantes[x].idFriend = participantes[random].id;
              sorteados.push(random); //adiciona o n sorteado na lista de sorteados
              notSort = false;
            } else if (random === x && x === participantes.length - 1) {
              participantes[x].idFriend = participantes[0].idFriend;
              participantes[0].idFriend = participantes[random].id;
              sorteados.push(random); //adiciona o n sorteado na lista de sorteados
              notSort = false;
            }
            attempt++;
          }
          if (attempt >= maxAttempts) {
            Alert.alert(
              "Erro",
              "Impossível completar a ação após múltiplas tentativas"
            );
            break;
          }
        }
        setIsOpen(true);
        setParticipantes(participantes);
      } else {
        Alert.alert("Atenção", "Número de participantes é insuficiente");
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert("Erro", "Ocorreu um erro ao realizar o sorteio");
    }
  }

  const handleSorteio = () => {
    setLoading(true);
    realizarSorteio();
  };

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <SafeAreaView style={theme.container}>
      {loading && <ActivityIndicator size="large" />}
      <Text style={theme.title}>App Amigo Secreto</Text>
      <View style={theme.marginBottom}>
        <Icon name="handshake-o" color={colors.primary} size={40} />
      </View>
      <TouchableOpacity
        onPress={() => router.navigate("contacts")}
        style={[theme.button, theme.marginBottom]}
      >
        <Text style={theme.textButton}>CONTATOS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSorteio}
        style={[theme.button, theme.marginBottom]}
      >
        <Text style={theme.textButton}>REALIZAR SORTEIO</Text>
      </TouchableOpacity>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        participantesList={getParticipantes}
      />
    </SafeAreaView>
  );
}
