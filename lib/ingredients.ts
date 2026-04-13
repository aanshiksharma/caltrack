import { IngredientForm } from "@/types/forms/ingredient-form";
import { Ingredient } from "@/types/ingredient";

export const getIngredients = (): Ingredient[] => {
  try {
    const data = localStorage.getItem("ingredients");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error parsing ingredients from localStorage:", error);
    return [];
  }
};

export const saveIngredient = (formData: IngredientForm) => {
  const existingIngredients = getIngredients();

  const newIngredient: Ingredient = {
    id: Math.random().toString(36).substr(2, 9),
    name: formData.name,
    unit: formData.unit,
    calories: formData.calories,
    macros: {
      carbs: formData.carbs,
      protein: formData.protein,
      fat: formData.fat,
    },
    createdAt: new Date().toISOString(),
  };

  existingIngredients.push(newIngredient);
  localStorage.setItem("ingredients", JSON.stringify(existingIngredients));
};
