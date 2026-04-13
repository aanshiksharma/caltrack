import { Unit } from "../unit";

export type MealForm = {
  name: string;

  ingredients: {
    name: string;
    quantity: {
      value: number;
      unit: Unit;
    };
  }[];
};
