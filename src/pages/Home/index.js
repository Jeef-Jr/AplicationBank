import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
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
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import CardSpace from "../../components/CardSpace";
import CardGspace from "../../components/CardGspace";
import CardActions from "../../components/CardActions";

export default function Home() {
  return (
    <View>
      <Header />
      <Balance />
      <ScrollView>
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
              name="Trânsferir"
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
                <FontAwesomeIcon
                  style={styles.icons}
                  size={25}
                  icon={faMobile}
                />
              }
            />
            <Actions
              name="Doação"
              icon={
                <FontAwesomeIcon
                  style={styles.icons}
                  size={25}
                  icon={faHeart}
                />
              }
            />
            <Actions
              name="Trâns. Inter"
              icon={
                <FontAwesomeIcon
                  style={styles.icons}
                  size={25}
                  icon={faGlobe}
                />
              }
            />
          </ScrollView>
        </View>
        <CardSpace
          icon={
            <FontAwesomeIcon
              style={styles.iconCard}
              icon={faCreditCard}
              size={24}
            />
          }
          name="Meus Cartões"
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardGspace
            t1="Você tem até"
            dest="R$ 20.000,00"
            t2="disponíveis para empréstimo."
          />
          <CardGspace
            t1="Convide seus"
            dest="amigos."
            t2="Para fazer parte desse novo melhor."
          />
        </ScrollView>
        <CardActions />
      </ScrollView>
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
  iconCard: {
    color: "#6c757d",
  },
});
