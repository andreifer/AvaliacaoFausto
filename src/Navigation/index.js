import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { ConfigScreen } from "../screens/ConfigScreen";
import { StackActions } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
export const RootNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Formulário"} component={HomeScreen} />
      <Tab.Screen name={"Concluir"} component={ConfigScreen} />
    </Tab.Navigator>
  );
};