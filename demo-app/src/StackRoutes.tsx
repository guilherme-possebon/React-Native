import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { Account } from "./screens/Account";
import { Contador } from "./screens/Contador";
import { ToDoList } from "./screens/ToDoList";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contador" component={Contador} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="ToDoList" component={ToDoList} />
    </Stack.Navigator>
  );
}
