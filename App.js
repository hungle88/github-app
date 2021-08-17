import "react-native-gesture-handler";

import * as React from "react";
import {
  DrawerLayoutAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import ProfileDetails from "./components/ProfileDetails";
import Repositories from "./components/Repositories";
import WebView from "./components/WebView";
import Notes from "./components/Notes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ route }) => ({ title: route.params.result.name })}
        />

        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{ title: "Profile Details" }}
        />

        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="WebView" component={WebView} />

        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    paddingTop: 50,
    backgroundColor: "green",
    padding: 50,
  },
});
