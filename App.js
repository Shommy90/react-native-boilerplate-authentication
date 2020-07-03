import React from "react";
// react-native-gesture-handler MUST BE ON TOP OF APP.JS OR INDEX.JS
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./src/context/ContextProvider";
import RootComponent from "./src/components/RootComponent";

// import AuthNavigation from "./src/Navigation/AuthNavigation";
// import MainNavigation from "./src/Navigation/MainNavigation";

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <RootComponent />
        {/* {!token ? <AuthNavigation /> : <MainNavigation />} */}
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;

// const navigator = createStackNavigator(
//   {
//     Home: MainHomeScreen,
//     Components: MainComponentsScreen,
//     List: MainListScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "Home",
//     },
//   }
// );

// export default createAppContainer(navigator);
