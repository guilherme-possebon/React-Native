import { View, Text } from "react-native";
import React from "react";
import { IContacts } from "../../../../@types";

export default function Item({ name, phoneNumber, id }: IContacts) {
  return (
    <View>
      <Text>id: {id}</Text>
      <Text>name: {name}</Text>
      <Text>phoneNumber: {phoneNumber}</Text>
    </View>
  );
}
