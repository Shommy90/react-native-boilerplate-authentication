import React, { useContext, useEffect } from "react";
import { View } from "react-native";

import AuthNavigation from "../Navigation/AuthNavigation";
import MainNavigation from "../Navigation/MainNavigation";

import { AuthContext } from "../context/ContextProvider";

const RootComponent = () => {
  const { state } = useContext(AuthContext);

  useEffect(() => {
    console.log(state);
  }, []);

  return !state.token ? <AuthNavigation /> : <MainNavigation />;
};

export default RootComponent;
