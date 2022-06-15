import React from "react";
import { View, StyleSheet } from "react-native";
import Balance from "../../components/Balance";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
});
