import { Meal } from "@/types/meal";

export function MealCardLoading() {
  return <div>Loading...</div>;
}

function MealCard({
  meal,
  deleteMeal,
}: {
  meal: Meal;
  deleteMeal: (id: string) => void;
}) {
  return (
    <div className="p-4 bg-neutral-900 rounded mb-2">
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

      <button onClick={() => deleteMeal(meal.id)}>Delete Meal</button>
    </div>
  );
}

export default MealCard;
