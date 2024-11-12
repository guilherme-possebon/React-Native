import { Account } from "./src/components/Account";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import { Contador } from "./src/components/Contador";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Account />
    </>
  );
}
