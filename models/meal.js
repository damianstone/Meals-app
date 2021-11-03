class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imgUrl,
    duration,
    ingredients,
    steps,
    glutenFree,
    vegan,
    vegetarian,
    lactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imgUrl = imgUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.glutenFree = glutenFree;
    this.vegan = vegan;
    this.lactoseFree = lactoseFree;
    this.vegetarian = vegetarian
  }
}

export default Meal;
