import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { AuthContext } from "../context/ContextProvider";

const AuthLandingScreen = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Landing</Text>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Login"
          onPress={() => {
            console.log("LOGIN");
            dispatch({ type: "SET_TOKEN", payload: "tokennn" });
            // navigation.navigate("Login");
          }}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      </View>
    </View>
  );
};

export default AuthLandingScreen;
