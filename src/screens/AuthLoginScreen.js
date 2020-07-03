import React from "react";
import { Text, View, Button } from "react-native";

const AuthLoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login</Text>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Login again..."
          onPress={() => navigation.push("Login")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Update title"
          onPress={() => navigation.setOptions({ title: "Title updated!" })}
        />
      </View>
    </View>
  );
};

export default AuthLoginScreen;
