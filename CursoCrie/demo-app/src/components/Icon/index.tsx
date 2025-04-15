import Feather from "@expo/vector-icons/Feather";
import { Text } from "react-native";

interface IIcon {
  name: string | any;
  size: number;
}

export function Icon({ name, size }: IIcon) {
  return (
    <Text>
      <Feather name={name} size={size} color="black" />
    </Text>
  );
}
