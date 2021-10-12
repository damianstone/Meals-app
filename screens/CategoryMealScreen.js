import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  //PASAR PARAMS
  const catId = props.navigation.getParam("categoryId");
  //SELECTEDCATEGORY ahora funciona como el item intero por lo que puedo extraer lo demas como el title
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

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

/*

      <Text>The category meal screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />

*/
