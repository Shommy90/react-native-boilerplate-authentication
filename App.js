import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./src/context/ContextProvider";
import RootComponent from "./src/components/RootComponent";

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <RootComponent />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
