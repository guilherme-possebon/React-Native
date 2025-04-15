import React, { StrictMode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/StackRoutes";

export default function App() {
  return (
    <>
      <StrictMode>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </StrictMode>
    </>
  );
}
