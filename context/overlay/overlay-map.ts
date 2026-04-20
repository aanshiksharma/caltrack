import AddMealModal from "@/components/meal/AddMealModal";
import EditMealModal from "@/components/meal/EditMealModal";

import AddIngredientModal from "@/components/ingredient/AddIngredientModal";
import EditIngredientModal from "@/components/ingredient/EditIngredientModal";

export const overlayMap = {
  ADD_MEAL: AddMealModal,
  ADD_INGREDIENT: AddIngredientModal,
  EDIT_MEAL: EditMealModal,
  EDIT_INGREDIENT: EditIngredientModal,
} as const;
