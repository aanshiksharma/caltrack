import { useFieldArray, useForm } from "react-hook-form";
import { MealForm } from "@/types/forms/meal-form";
import useOverlay from "@/hooks/useOverlay";
import useIngredients from "@/hooks/useIngredients";
import useMeals from "@/hooks/useMeals";

const defaultFormData: MealForm = {
  name: "",
  ingredients: [
    {
      ingredientId: "select-ingredient",
      quantity: 0,
    },
  ],
};

function FormMeal() {
  const { closeOverlay } = useOverlay();
  const { ingredients } = useIngredients();
  const { meals, addMeal } = useMeals();

  const { register, control, handleSubmit, reset } = useForm<MealForm>({
    defaultValues: defaultFormData,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data: MealForm) => {
    addMeal(data);
    reset();
    closeOverlay();
  };

  const handleAddIngredient = () => {
    append(defaultFormData.ingredients);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <input
          {...register("name")}
          autoFocus
          placeholder="Name"
          className="input"
        />

        <div className="grid gap-2">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <select
                {...register(`ingredients.${index}.ingredientId`)}
                className="input"
              >
                <option value={"select-ingredient"}>Choose Ingredient</option>
                {ingredients.length > 0 ? (
                  ingredients.map((ingredient) => (
                    <option key={ingredient.id} value={ingredient.id}>
                      {ingredient.name}
                    </option>
                  ))
                ) : (
                  <option disabled className="">
                    No Ingredients Found
                  </option>
                )}
              </select>

              <input
                type="number"
                {...register(`ingredients.${index}.quantity`, {
                  valueAsNumber: true,
                })}
                placeholder="Quantity"
                className="input"
              />

              <button
                type="button"
                disabled={fields.length === 1}
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default FormMeal;
