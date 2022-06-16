import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CardGspace(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textCard}>
        {props.t1} <Text style={styles.destaque}>{props.dest}</Text>
      </Text>
      <Text style={styles.textCard}>{props.t2}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    paddingLeft: 20,
    justifyContent: "center",
    width: 250,
    borderRadius: 20,
    height: 80,
    backgroundColor: "#ced4da",
  },
  textCard: {
    color: "#6c757d",
  },
  destaque: {
    color: "#343a40",
  },
});
