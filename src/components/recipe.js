import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Rating } from "react-native-ratings";
import colors from "../config/colors";
import Label from "./label";
import CalIcon from "./../assets/icons/calories.svg";
import TimeIcon from "./../assets/icons/time.svg";
import Tag from "./tag";
import DoctorName from "./doctor/doctor-name";
export default function Recipe({
  image,
  name,
  cal,
  time,
  tag,
  onPress,
  rate,
  doctorName,
  doctorImage,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.name}>{name}</Text>
              <Rating
                type="custom"
                ratingColor="#FFC107"
                minValue={1}
                ratingCount={5}
                imageSize={14}
                startingValue={rate}
                readonly
              />
            </View>
            <DoctorName name={doctorName} image={doctorImage} />
          </View>
          <View style={styles.row}>
            <View style={styles.labelsContainer}>
              <Label Icon={TimeIcon} color={colors["neutral-300"]}>
                <Text style={{ fontFamily: "Cairo_600SemiBold" }}>{time}</Text>
                {` دقيقة`}
              </Label>
              <Label
                Icon={CalIcon}
                containerStyle={styles.label}
                color={colors["neutral-300"]}
              >
                <Text style={{ fontFamily: "Cairo_600SemiBold" }}>{cal}</Text>
                {` سعر حرارية`}
              </Label>
            </View>
            <Tag>{tag}</Tag>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 268,
    alignSelf: "stretch",
    borderRadius: 16,
    backgroundColor: colors["neutral-100"],
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    height: 160,
    width: "auto",
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    alignItems: "flex-start",
  },
  name: {
    fontFamily: "Cairo_700Bold",
    fontSize: 14,
    marginBottom: 2,
    color: colors.secondary,
  },
  labelsContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  label: {
    marginStart: 16,
  },
});
