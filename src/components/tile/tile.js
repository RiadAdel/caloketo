import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import Overlay from "../overlay";
import SearchBar from "./search-bar";

export function Tile() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./../../assets/images/tile-background.png")}
    >
      <Overlay>
        <Text style={styles.title}>وصفات وطبخات</Text>
        <Text style={[styles.title, styles.strong]}>مذهلة</Text>
        <SearchBar />
      </Overlay>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 204,
    resizeMode: "cover",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
  },
  title: {
    color: colors["neutral-100"],
    fontSize: 24,
    fontFamily: "Cairo_400Regular",
  },
  strong: {
    fontFamily: "Cairo_700Bold",
  },
});
