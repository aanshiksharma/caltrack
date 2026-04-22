import AddMealModal from "@/components/meal/modals/AddMealModal";
import EditMealModal from "@/components/meal/modals/EditMealModal";

import AddIngredientModal from "@/components/ingredient/modals/AddIngredientModal";
import EditIngredientModal from "@/components/ingredient/modals/EditIngredientModal";

export const overlayMap = {
  ADD_MEAL: AddMealModal,
  ADD_INGREDIENT: AddIngredientModal,
  EDIT_MEAL: EditMealModal,
  EDIT_INGREDIENT: EditIngredientModal,
} as const;
