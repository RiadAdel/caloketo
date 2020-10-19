import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import SearchBar from "./search-bar";

export function Tile() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./../../assets/images/tile-background.png")}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>وصفات وطبخات</Text>
        <Text style={[styles.title, styles.strong]}>مذهلة</Text>
        <SearchBar />
      </View>
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
  overlay: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(0,0,0,.4)",
    justifyContent: "center",
    alignItems: "center",
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
