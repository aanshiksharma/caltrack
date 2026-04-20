import { Unit } from "./unit";

export type Snapshot = {
  name: string;
  calories: number;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
};

export type Meal = {
  id: string;
  name: string;

  ingredients: {
    ingredientId: string;

    quantity: {
      value: number;
      unit: Unit;
    };

    snapshot: Snapshot;
  }[];

  createdAt: string;
};
