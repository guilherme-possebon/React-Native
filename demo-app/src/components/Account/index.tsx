import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IUser } from "../../@types/user";

export function Account() {
  const [user, setUser] = useState<IUser>({} as IUser);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Name: {user.name}</Text>
      <Text style={styles.textStyle}>Age: {user.age}</Text>
      <Text style={styles.textStyle}>City: {user.city}</Text>
      <TouchableOpacity
        onPress={() => setUser({ ...user, age: user.age + 1 })}
        style={styles.button}
      >
        <Text style={styles.textButton}>Make birthday</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3f51b5",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  textStyle: {
    color: "black",
    fontSize: 20,
  },
  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
