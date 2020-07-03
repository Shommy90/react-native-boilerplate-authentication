import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={style.fontStyle}>Components Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  fontStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
