import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardSpace(props) {
  return (
    <TouchableOpacity style={styles.cardCartao}>
      {props.icon}
      <Text style={styles.textCard}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardCartao: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    backgroundColor: "#ced4da",
    height: 60,
    margin: 20,
    borderRadius: 15,
  },
  textCard: {
    color: "#6c757d",
    paddingLeft: 20,
  },
});
