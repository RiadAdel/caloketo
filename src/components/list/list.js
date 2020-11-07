import React from "react";
import {
  FlatList,
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";

export default function List({
  title,
  buttonName,
  data,
  renderItem,
  horizontal = true,
  children,
  ...other
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonName}</Text>
          <AntDesign
            name={I18nManager.isRTL ? "left" : "right"}
            size={12}
            color={colors["neutral-200"]}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
        keyExtractor={(_, indx) => indx + ""}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 8 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  title: {
    fontFamily: "Cairo_600SemiBold",
    color: colors.primary,
    fontSize: 18,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Cairo_600SemiBold",
    color: colors["neutral-200"],
    fontSize: 14,
    paddingHorizontal: 8,
  },

  buttonIcon: {},
});
