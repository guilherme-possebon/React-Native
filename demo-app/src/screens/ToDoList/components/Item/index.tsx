import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "../../../../components/Icon";
import { ITask } from "../../../../@types/task";
import { theme } from "../../../../themes/global";
import { useState } from "react";

interface IItem extends ITask {
  isCheckedState: (isChecked: boolean) => void;
  onRemove: (id: number) => void;
}

export function Item({ title, id, onRemove, isCheckedState }: IItem) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={theme.listContainer}>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => {
            setIsChecked(!isChecked);
            isCheckedState(isChecked);
          }}
        >
          <Icon name={isChecked ? "check-square" : "square"} size={24} />
        </TouchableOpacity>
        <Text
          style={[theme.listItem, isChecked ? [theme.listItemLineThrough] : {}]}
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onRemove(id)} style={{ marginLeft: 30 }}>
        <Icon name="trash-2" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    alignContent: "center",
  },
});
