import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function Category({
  children,
  color = "lightgreen",
  name = "meal",
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}
    >
      <View style={[styles.imageContainer, { backgroundColor: color }]}>
        {children}
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  name: {
    color: colors.secondary,
    fontFamily: "Cairo_600SemiBold",
  },
});
