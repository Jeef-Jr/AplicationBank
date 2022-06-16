import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/router";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
    </>
  );
}
