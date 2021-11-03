import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/mealActions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_FAVORITE: //CASE 1
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      ); // check if the meals matchs
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals]; // copy the state
        updatedFavMeals.splice(existingIndex, 1); // remove the favorite meal
        return { ...state, favoriteMeals: updatedFavMeals }; // return a new state
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal)};
      }

    case SET_FILTERS: // CASE 2 
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.glutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.lactoseFree) {
          return false;
        }

        if (appliedFilters.vegetarian && !meal.vegetarian) {
          return false;
        }

        if (appliedFilters.vegan && !meal.vegan) {
          return false;
        }

        return true
      });

      return {...state, filteredMeals: updatedFilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
