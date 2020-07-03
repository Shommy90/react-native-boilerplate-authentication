import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthLandingScreen from "../screens/AuthLandingScreen";
import AuthLoginScreen from "../screens/AuthLoginScreen";
import AuthSignUpScreen from "../screens/AuthSignUpScreen";

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8EE4AF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AuthStack.Screen
        name="Landing"
        component={AuthLandingScreen}
        options={{ title: "Welcome" }}
      />
      <AuthStack.Screen
        name="Login"
        component={AuthLoginScreen}
        options={({ route }) => ({ title: route.name })}
      />
      <AuthStack.Screen
        name="SignUp"
        component={AuthSignUpScreen}
        options={{
          title: "Sign Up",
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
