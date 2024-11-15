import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface NavigationButtonProps {
  pageName: string;
}

export function NavigationButton({ pageName }: NavigationButtonProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${pageName}`)}
      style={styles.buttonStyles}
    >
      <Text style={styles.text}>Navegar para {pageName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyles: {
    padding: 16,
    backgroundColor: "#6e06af",
    borderRadius: 8,
    margin: 8,
  },
  text: {
    color: "#fff",
  },
});
