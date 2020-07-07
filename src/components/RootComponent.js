import React, { useContext, useEffect } from "react";

import AuthNavigation from "../Navigation/AuthNavigation";
import MainNavigation from "../Navigation/MainNavigation";
import TabNavigation from "../Navigation/TabNavigation";

import { AuthContext } from "../context/ContextProvider";

const RootComponent = () => {
  const { state } = useContext(AuthContext);

  return !state.token ? <AuthNavigation /> : <TabNavigation />;
};

export default RootComponent;
