export type MealFormIngredient = {
  ingredientId: string;
  quantity: number;
};

export type MealForm = {
  name: string;

  ingredients: MealFormIngredient[];
};
