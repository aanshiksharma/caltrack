"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { getMeals, saveMeal, removeMeal } from "@/lib/meals";
import { MealForm } from "@/types/forms/meal-form";
import { Meal } from "@/types/meal";

type MealContextType = {
  meals: Meal[];
  loading: boolean;
  addMeal: (data: MealForm) => void;
  deleteMeal: (id: string) => void;
  refreshMeals: () => void;
};

const MealContext = createContext<MealContextType | null>(null);

export function MealProvider({ children }: { children: ReactNode }) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshMeals = () => {
    const data = getMeals();
    setMeals(data);
  };

  useEffect(() => {
    refreshMeals();
    setLoading(false);
  }, []);

  const addMeal = (formData: MealForm) => {
    saveMeal(formData);
    refreshMeals();
  };

  const deleteMeal = (id: string) => {
    removeMeal(id);
    refreshMeals();
  };

  return (
    <MealContext.Provider
      value={{ meals, loading, addMeal, deleteMeal, refreshMeals }}
    >
      {children}
    </MealContext.Provider>
  );
}

export function useMeals() {
  const context = useContext(MealContext);

  if (!context) {
    throw new Error("useMeal must be used within MealProvider");
  }

  return context;
}

export default useMeals;
