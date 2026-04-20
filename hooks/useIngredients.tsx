"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Ingredient } from "@/types/ingredient";
import { IngredientForm } from "@/types/forms/ingredient-form";
import {
  removeIngredient,
  getIngredients,
  saveIngredient,
} from "@/lib/ingredients";

type IngredientContextType = {
  ingredients: Ingredient[];
  loading: boolean;
  addIngredient: (data: IngredientForm) => void;
  deleteIngredient: (id: string) => void;
  refreshIngredients: () => void;
};

const IngredientContext = createContext<IngredientContextType | null>(null);

export function IngredientProvider({ children }: { children: ReactNode }) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshIngredients = () => {
    const data = getIngredients();
    setIngredients(data);
  };

  useEffect(() => {
    refreshIngredients();
    setLoading(false);
  }, []);

  const addIngredient = (formData: IngredientForm) => {
    saveIngredient(formData);
    refreshIngredients();
  };

  const deleteIngredient = (id: string) => {
    removeIngredient(id);
    refreshIngredients();
  };

  return (
    <IngredientContext.Provider
      value={{
        ingredients,
        loading,
        addIngredient,
        deleteIngredient,
        refreshIngredients,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
}

function useIngredients() {
  const context = useContext(IngredientContext);

  if (!context) {
    throw new Error("useIngredients must be used within an IngredientProvider");
  }

  return context;
}

export default useIngredients;
