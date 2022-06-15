import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currebncySymbol}>R$</Text>
          <Text style={styles.balance}>15.000,00</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currebncySymbol}>R$</Text>
          <Text style={styles.balance}>390,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
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
  itemTitle: {
    fontSize: 20,
    color: "#adb5bd",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currebncySymbol: {
    color: "#adb5bd",
    marginRight: 6,
  },
});
