import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import Label from "./label";
import Overlay from "./overlay";
import Tag from "./tag";
import CalIcon from "./../assets/icons/calories.svg";
import TimeIcon from "./../assets/icons/time.svg";
export default function SpecialRecipe({
  image,
  name,
  cal,
  time,
  tag,
  onPress,
}) {
  return (
    // TouchableWithoutFeedback works only if the child is View
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="cover"
      >
        <Overlay style={styles.overlay}>
          <Tag>{tag}</Tag>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.labelsContainer}>
            <Label Icon={CalIcon}>{`${cal} س.ع`}</Label>
            <Label
              Icon={TimeIcon}
              containerStyle={styles.label}
            >{`${time} د`}</Label>
          </View>
        </Overlay>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 204,
    height: 162,
    borderRadius: 18,
    overflow: "hidden",
  },
  labelsContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label: {
    marginStart: 16,
  },
  overlay: {
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  name: {
    fontFamily: "Cairo_600SemiBold",
    fontSize: 18,
    color: colors["neutral-100"],
  },
});
