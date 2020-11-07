import React from "react";
import { StyleSheet, View } from "react-native";

export default function Overlay({ children, style }) {
  return <View style={[styles.overlay, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});
