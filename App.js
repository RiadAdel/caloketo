import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
} from "@expo-google-fonts/cairo";
import { Tile } from "./src/components/tile";

export default function App() {
  let [fontLoaded] = useFonts({
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <Tile />
      <StatusBar style="light" translucent trabackgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
