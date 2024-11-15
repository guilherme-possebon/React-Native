import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from "./src/screens/Account";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Contador } from "./src/screens/Contador";
import { Home } from "./src/screens/Home";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contador" component={Contador} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
