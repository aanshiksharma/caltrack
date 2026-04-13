import AddMealModal from "@/components/modals/AddMealModal";
import AddIngredientModal from "@/components/modals/AddIngredientModal";
import EditMealModal from "@/components/modals/EditMealModal";
import EditIngredientModal from "@/components/modals/EditIngredientModal";

export const overlayMap = {
  ADD_MEAL: AddMealModal,
  ADD_INGREDIENT: AddIngredientModal,
  EDIT_MEAL: EditMealModal,
  EDIT_INGREDIENT: EditIngredientModal,
} as const;