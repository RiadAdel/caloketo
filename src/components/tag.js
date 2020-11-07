import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import { hexToRgba } from "../config/utils";

export default function Tag({ children }) {
  return <Text style={styles.container}>{children}</Text>;
}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: hexToRgba(colors.primary),
    borderRadius: 4,
    color: colors["neutral-100"],
    fontFamily: "Cairo_400Regular",
    fontSize: 12,
  },
});
