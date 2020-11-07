import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function DoctorName({ name, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={image} resizeMode="cover" />
      <View style={styles.nameContainer}>
        <Text style={styles.label}>بواسطة دكتور</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  profile: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    overflow: "hidden",
    backgroundColor: colors["neutral-200"],
  },
  nameContainer: {
    marginStart: 8,
  },
  label: {
    fontFamily: "Cairo_400Regular",
    fontSize: 11,
    color: colors["neutral-200"],
  },
  name: {
    fontFamily: "Cairo_600SemiBold",
    fontSize: 14,
    color: colors["secondary"],
  },
});
