"use client";

import { useState } from "react";
import useOverlay from "@/hooks/useOverlay";

import useIngredients from "@/hooks/useIngredients";
import useMeals from "@/hooks/useMeals";

function Dashboard() {
  const [showMode, setShowMode] = useState<"INGREDIENTS" | "MEALS">("MEALS");

  const { ingredients, deleteIngredient } = useIngredients();
  const { meals, deleteMeal } = useMeals();
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

        {showMode === "INGREDIENTS" && (
          <div className="w-full">
            {ingredients.length > 0 ? (
              ingredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="p-4 bg-neutral-900 rounded mb-2"
                >
                  <h2 className="text-lg font-bold">{ingredient.name}</h2>
                  <p>
                    Calories per{" "}
                    <span className="lowercase">{ingredient.unit}</span>:{" "}
                    {ingredient.calories}
                  </p>
                  <p>Carbs: {ingredient.macros.carbs}g</p>
                  <p>Protein: {ingredient.macros.protein}g</p>
                  <p>Fat: {ingredient.macros.fat}g</p>

                  <button onClick={() => deleteIngredient(ingredient.id)}>
                    Delete Ingredient
                  </button>
                </div>
              ))
            ) : (
              <p>No Ingredients Found</p>
            )}
          </div>
        )}

        {showMode === "MEALS" && (
          <div className="w-full">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <div key={meal.id} className="p-4 bg-neutral-900 rounded mb-2">
                  <h2 className="text-lg font-bold">{meal.name}</h2>
                  <p>
                    Calories in this meal :{" "}
                    {meal.ingredients.reduce((total, ingredient) => {
                      return total + ingredient.snapshot.calories;
                    }, 0)}
                    kCal
                  </p>
                  <p>
                    Carbs:{" "}
                    {meal.ingredients.reduce((total, ingredient) => {
                      return total + ingredient.snapshot.macros.carbs;
                    }, 0)}
                    g
                  </p>
                  <p>
                    Protein:{" "}
                    {meal.ingredients.reduce((total, ingredient) => {
                      return total + ingredient.snapshot.macros.protein;
                    }, 0)}
                    g
                  </p>
                  <p>
                    Fat:{" "}
                    {meal.ingredients.reduce((total, ingredient) => {
                      return total + ingredient.snapshot.macros.fat;
                    }, 0)}
                    g
                  </p>

                  <button onClick={() => deleteMeal(meal.id)}>
                    Delete Meal
                  </button>
                </div>
              ))
            ) : (
              <p>No Meals Found</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
