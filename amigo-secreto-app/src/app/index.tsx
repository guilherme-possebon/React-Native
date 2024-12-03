import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../theme/global";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function App() {
  return (
    <>
      <SafeAreaView style={[theme.container, styles.homeContainer]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>App Amigo Secreto</Text>
          <FontAwesome name="handshake-o" size={48} color="black" />
        </View>
        <View style={theme.buttonContainer}>
          <TouchableOpacity
            onPress={() => router.navigate("/contacts")}
            style={theme.button}
          >
            <View style={theme.buttonContent}>
              <MaterialCommunityIcons name="contacts" size={24} color="white" />
              <Text style={theme.buttonText}>Contatos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.navigate("/sorteio")}
            style={theme.button}
          >
            <View style={theme.buttonContent}>
              <MaterialCommunityIcons
                name="horseshoe"
                size={24}
                color="white"
              />
              <Text style={theme.buttonText}>Realizar sorteio</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    gap: 16,
  },
  header: {
    alignItems: "center",
    gap: 8,
  },
  headerText: {
    fontSize: 28,
  },
});
