import { Unit } from "../unit";

export type IngredientForm = {
  name: string;
  unit: Unit;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};
