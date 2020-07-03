import React, { useContext } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

import { AuthContext } from "../context/ContextProvider";

const HomeScreen = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Components")}
        style={{ marginVertical: 10 }}
      >
        <Text>Go to ComponentsScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => navigation.navigate("List")}
      >
        <Text>Go to ListScreen</Text>
      </TouchableOpacity>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="logout"
          onPress={() => {
            console.log("LOGOUT");
            dispatch({ type: "REMOVE_TOKEN", payload: null });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
