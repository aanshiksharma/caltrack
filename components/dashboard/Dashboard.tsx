"use client";

import { useState } from "react";
import useOverlay from "@/hooks/useOverlay";

import useIngredients from "@/hooks/useIngredients";
import useMeals from "@/hooks/useMeals";
import IngredientCard, {
  IngredientCardLoading,
} from "../ingredient/IngredientCard";
import MealCard, { MealCardLoading } from "../meal/MealCard";

function Dashboard() {
  const [showMode, setShowMode] = useState<"INGREDIENTS" | "MEALS">("MEALS");

  const {
    ingredients,
    loading: ingredientsLoading,
    deleteIngredient,
  } = useIngredients();
  const { meals, loading: mealsLoading, deleteMeal } = useMeals();
  const { openOverlay } = useOverlay();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="grid grid-cols-2 gap-4 mt-10 w-full">
          <button
            onClick={() => openOverlay("ADD_INGREDIENT")}
            className="bg-pink-800 py-3 rounded"
          >
            Add Ingredient
          </button>

          <button
            onClick={() => openOverlay("ADD_MEAL")}
            className="bg-pink-800 py-3 rounded"
          >
            Add Meal
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 p-2 rounded-lg bg-neutral-950">
          <button
            onClick={() => {
              setShowMode("MEALS");
            }}
            className={`font-semibold cursor-pointer px-4 py-2 rounded ${showMode === "MEALS" ? "bg-neutral-900" : "bg-transparent"}`}
          >
            Meals
          </button>

          <button
            onClick={() => {
              setShowMode("INGREDIENTS");
            }}
            className={`font-semibold cursor-pointer px-4 py-2 rounded ${showMode === "INGREDIENTS" ? "bg-neutral-900" : "bg-transparent"}`}
          >
            Ingredients
          </button>
        </div>

        {showMode === "INGREDIENTS" &&
          (ingredientsLoading ? (
            <IngredientCardLoading />
          ) : (
            <div className="w-full">
              {ingredients.length > 0 ? (
                ingredients.map((ingredient) => (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    deleteIngredient={deleteIngredient}
                  />
                ))
              ) : (
                <p>No Ingredients Found</p>
              )}
            </div>
          ))}

        {showMode === "MEALS" &&
          (mealsLoading ? (
            <MealCardLoading />
          ) : (
            <div className="w-full">
              {meals.length > 0 ? (
                meals.map((meal) => (
                  <MealCard key={meal.id} meal={meal} deleteMeal={deleteMeal} />
                ))
              ) : (
                <p>No Meals Found</p>
              )}
            </div>
          ))}
      </main>
    </div>
  );
}

export default Dashboard;
