import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
export default function Label({
  Icon,
  children,
  containerStyle,
  color = colors["neutral-100"],
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {Icon ? <Icon width={20} height={20} /> : null}
      <Text style={[styles.label, { marginStart: Icon ? 4 : 0, color }]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: colors["neutral-100"],
    fontSize: 14,
    fontFamily: "Cairo_400Regular",
    marginStart: 4,
  },
});
