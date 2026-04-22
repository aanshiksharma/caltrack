import { Ingredient } from "@/types/ingredient";

export function IngredientCardLoading() {
  return <div>Loading...</div>;
}

function IngredientCard({
  ingredient,
  deleteIngredient,
}: {
  ingredient: Ingredient;
  deleteIngredient: (id: string) => void;
}) {
  return (
    <div className="p-4 bg-neutral-900 rounded mb-2">
      <h2 className="text-lg font-bold">{ingredient.name}</h2>
      <p>
        Calories per <span className="lowercase">{ingredient.unit}</span>:{" "}
        {ingredient.calories}
      </p>
      <p>Carbs: {ingredient.macros.carbs}g</p>
      <p>Protein: {ingredient.macros.protein}g</p>
      <p>Fat: {ingredient.macros.fat}g</p>

      <button onClick={() => deleteIngredient(ingredient.id)}>
        Delete Ingredient
      </button>
    </div>
  );
}

export default IngredientCard;
