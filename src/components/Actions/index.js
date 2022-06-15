import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Actions(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content}>
        <View style={styles.icons}>{props.icon}</View>
      </TouchableOpacity>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    marginHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "#adb5bd",
    borderRadius: "100%",
  },

  text: {
    color: "#495057",
  },
});
