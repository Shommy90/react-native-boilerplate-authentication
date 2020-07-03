import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={style.fontStyle}>List Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  fontStyle: {
    fontSize: 30,
  },
});

export default ListScreen;
