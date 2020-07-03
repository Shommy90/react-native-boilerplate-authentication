import React, { createContext, useReducer } from "react";

const initialState = {
  token: null,
};

export const AuthContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "REMOVE_TOKEN":
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
