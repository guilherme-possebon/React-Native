import React from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../theme/global";

export function Cep() {
  return (
    <View style={[theme.container, { gap: 8 }]}>
      <Text style={styles.label}>CEP</Text>

      <TextInput style={styles.input} />
    </View>
  );
}
