import { MealForm, MealFormIngredient } from "@/types/forms/meal-form";
import { Meal, Snapshot } from "@/types/meal";
import { getIngredients } from "./ingredients";
import { Unit } from "@/types/unit";
import { Ingredient } from "@/types/ingredient";

const createSnapshot = (
  formIngredient: MealFormIngredient,
): { unit: Unit; snapshot: Snapshot } => {
  const existingIngredients = getIngredients();

  const ingredient: Ingredient = existingIngredients.filter(
    (existingIngredient) =>
      existingIngredient.id === formIngredient.ingredientId,
  )[0];

  const unit: Unit = ingredient ? ingredient.unit : "g";

  const snapshot = {
    name: ingredient.name,
    calories: ingredient.calories,
    macros: ingredient.macros,
  };

  return { unit, snapshot };
};

export const getMeals = (): Meal[] => {
  try {
    const data = localStorage.getItem("meals");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error parsing meals from localStorage:", error);
    return [];
  }
};

export const saveMeal = (formData: MealForm) => {
  const existingMeals = getMeals();

  const newMeal: Meal = {
    id: Math.random().toString(36).substr(2, 9),

    name: formData.name,

    ingredients: formData.ingredients.map((ingredient) => {
      const { unit, snapshot } = createSnapshot(ingredient);

      return {
        ingredientId: ingredient.ingredientId,
        quantity: {
          value: ingredient.quantity,
          unit,
        },

        snapshot,
      };
    }),

    createdAt: new Date().toISOString(),
  };

  existingMeals.push(newMeal);
  localStorage.setItem("meals", JSON.stringify(existingMeals));
};

export const deleteMeal = (id: string) => {
  const existingMeals = getMeals();

  const newMeals = existingMeals.filter((meal) => meal.id !== id);

  localStorage.setItem("meals", JSON.stringify(newMeals));
};
