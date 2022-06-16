import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Conta</Text>
        <View style={styles.content}>
          <Text style={styles.currebncySymbol}>R$</Text>
          <Text style={styles.balance}>15.000,00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item}>
          <FontAwesomeIcon style={styles.icons} icon={faEye} size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Feather
            style={styles.icons}
            name="chevron-right"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 18,
    paddingEnd: 18,
    borderRadius: 4,
    marginTop: -20,
    marginStart: 14,
    marginEnd: 14,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {
    marginHorizontal: 5,
  },
  itemTitle: {
    fontSize: 20,
    color: "#adb5bd",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    fontSize: 20,
  },
  currebncySymbol: {
    color: "#adb5bd",
    marginRight: 6,
  },
  row: {
    flexDirection: "row",
  },
  icons: {
    color: "#6c757d",
  },
});
