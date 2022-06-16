import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight, faEye } from "@fortawesome/free-solid-svg-icons";

export default function CardActions() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>
          <View style={styles.ball}></View> Fatura
        </Text>
        <Text style={styles.title}>
          Venc. <Text>16/06</Text>
        </Text>
      </View>
      <View style={styles.midCard}>
        <View style={styles.row}>
          <Text style={styles.textCurency}>R$</Text>
          <Text style={styles.textPrice}>3.020,00</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon icon={faEye} size={20} color="#495057" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.textButton2}>Parcelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    borderRadius: 20,
    height: 150,
    backgroundColor: "#ced4da",
  },
  ball: {
    width: 10,
    height: 10,
    borderRadius: "100%",
    backgroundColor: "#9b2226",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#6c757d",
    fontSize: 16,
  },
  midCard: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    height: 40,
  },
  textPrice: {
    color: "#343a40",
    fontSize: 25,
    marginLeft: 5,
  },
  textCurency: {
    color: "#6c757d",
  },
  icon: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  buttons: {
    flexDirection: "row",
    height: 40,
  },
  button: {
    width: "50%",
    backgroundColor: "#6c757d",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
    marginHorizontal: 1,
  },
  button2: {
    width: "50%",
    backgroundColor: "#ffca3a",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 1,
  },
  textButton: {
    color: "#fff",
  },
  textButton2: {
    color: "#6c757d",
  },
});
