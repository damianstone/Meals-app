import React from "react";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealScreen = (props) => {

  //PASAR PARAMS
  const catId = props.navigation.getParam("categoryId");
  //SELECTEDCATEGORY ahora funciona como el item intero por lo que puedo extraer lo demas como el title

  // TRAER LOS MEALS
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  // SI NO HAY MEALS
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;

};

// en las opciones necesito algo de las props, como en este caso con los params,
// entonces navigation options tmbn puede ser una funcion
CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
