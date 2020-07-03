import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainHomeScreen from "../screens/MainHomeScreen";
import MainComponentsScreen from "../screens/MainComponentsScreen";
import MainListScreen from "../screens/MainListScreen";

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#379683",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainStack.Screen
        name="Home"
        component={MainHomeScreen}
        options={({ route }) => ({ title: route.name })}
      />
      <MainStack.Screen
        name="Components"
        component={MainComponentsScreen}
        options={({ route }) => ({ title: route.name })}
      />
      <MainStack.Screen
        name="List"
        component={MainListScreen}
        options={({ route }) => ({ title: route.name })}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
