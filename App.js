import { I18nManager, ScrollView } from "react-native";
// Arabic support
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);
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
import SpecialRecipe from "./src/components/special-recipe";
import Recipe from "./src/components/recipe";
import Category from "./src/components/category";
import Breakfast from "./src/assets/images/categories/breakfast.svg";
import List from "./src/components/list/list";
import Categories from "./src/assets/data/categories";
import Recipes from "./src/assets/data/recipes";
export default function App() {
  let [fontLoaded] = useFonts({
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });

  if (!fontLoaded) return <AppLoading />;

  function renderSpecialRecipes({ item }) {
    return (
      <SpecialRecipe
        image={item.pic}
        name={item.name}
        tag={item.category}
        cal={item.cals}
        time={item.time}
      />
    );
  }
  function renderCategories({ item }) {
    console.log(item.color);
    return (
      <Category color={item.color} name={item.name} key={item.name}>
        {item.icon()}
      </Category>
    );
  }
  return (
    <View style={styles.container}>
      <Tile />
      <ScrollView style={styles.main} contentContainerStyle={{ padding: 16 }}>
        <List
          title="وصفات مميزة"
          buttonName="شاهد الكل"
          data={Recipes}
          renderItem={renderSpecialRecipes}
        />
        <List
          title="الفئات"
          buttonName="شاهد الكل"
          data={Categories}
          renderItem={renderCategories}
        />
        <Recipe
          image={require("./src/assets/images/recipes/tabola-salad.png")}
          name="تبولة بالسلطة الخضراء"
          tag="سلطات"
          doctorName="محمد فخري"
          cal={50}
          time={30}
          rate={2}
        />
      </ScrollView>
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
  main: {
    alignSelf: "stretch",
    flex: 1,
  },
});
