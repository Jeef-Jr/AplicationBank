import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBarcode,
  faMoneyBillTransfer,
  faCommentDollar,
  faDollarSign,
  faMobile,
  faHeart,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <View>
      <Header />
      <Balance />
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Actions
            name="Pagar"
            icon={
              <FontAwesomeIcon
                style={styles.icons}
                size={25}
                icon={faBarcode}
              />
            }
          />
          <Actions
            name="Trânferir"
            icon={
              <FontAwesomeIcon
                style={styles.icons}
                size={25}
                icon={faMoneyBillTransfer}
              />
            }
          />
          <Actions
            name="Depositar"
            icon={
              <FontAwesomeIcon
                style={styles.icons}
                size={25}
                icon={faDollarSign}
              />
            }
          />
          <Actions
            name="Cobrar"
            icon={
              <FontAwesomeIcon
                style={styles.icons}
                size={25}
                icon={faCommentDollar}
              />
            }
          />
          <Actions
            name="Recargar"
            icon={
              <FontAwesomeIcon style={styles.icons} size={25} icon={faMobile} />
            }
          />
          <Actions
            name="Doação"
            icon={
              <FontAwesomeIcon style={styles.icons} size={25} icon={faHeart} />
            }
          />
          <Actions
            name="Trâns. Inter"
            icon={
              <FontAwesomeIcon style={styles.icons} size={25} icon={faGlobe} />
            }
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  icons: {
    color: "#fff",
  },
});
