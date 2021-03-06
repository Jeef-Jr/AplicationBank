import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 70;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>Jefferson Filho</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonUser}>
            <View style={styles.notify}>
              <Text style={styles.TextNotify}>1</Text>
            </View>
            <Feather name="bell" size={27} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonUser}>
            <Feather name="user" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#495057",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 30,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonUser: {
    backgroundColor: "rgba(255,255,255,0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    padding: 5,
    marginHorizontal: 3,
  },
  row: {
    flexDirection: "row",
  },
  notify: {
    zIndex: 1,
    backgroundColor: "#000",
    borderRadius: "100%",
    position: "absolute",
    width: 20,
    alignItems: "center",
    bottom: 25,
    right: 5,
  },
  TextNotify: {
    margin: 3,
    color: "#ffca3a",
  },
});
