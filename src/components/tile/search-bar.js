import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../../config/colors";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar({ onPress, ...other }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ابحث عن وصفة"
        placeholderTextColor={colors["neutral-200"]}
        {...other}
      />
      <EvilIcons name="search" style={styles.icon} onPress={onPress} />
    </View>
  );
}

const height = 47;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: height,
    paddingHorizontal: height / 2,
    backgroundColor: colors["neutral-100"],
    borderRadius: height,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: colors["neutral-400"],
    fontFamily: "Cairo_400Regular",
  },
  icon: {
    fontSize: height / 2,
    color: colors["neutral-200"],
  },
});
