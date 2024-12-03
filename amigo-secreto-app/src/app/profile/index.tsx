import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { theme } from "../../theme/global";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function Profile() {
  return (
    <>
      <SafeAreaView style={theme.container}>
        <Text>Profile</Text>
        <Button
          onPress={() => {
            if (router.canGoBack()) {
              router.back;
            }
          }}
          title="Navegar para profile"
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
