import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainNavigation from "../Navigation/MainNavigation";
import MainSettingsScreen from "../screens/MainSettingsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Main" component={MainNavigation} />
      <Tab.Screen name="Settings" component={MainSettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
