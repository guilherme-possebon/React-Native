import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../../themes/global";

interface NavigationButtonProps {
  pageName: string;
  navigate: string;
}

export function NavigationButton({
  pageName,
  navigate,
}: NavigationButtonProps) {
  const navigation = useNavigation<NavigationPropType>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${navigate}`)}
      style={theme.button}
    >
      <Text style={theme.textButton}>{pageName}</Text>
    </TouchableOpacity>
  );
}
