import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/StackRoutes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </>
  );
}
