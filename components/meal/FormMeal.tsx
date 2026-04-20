import { useFieldArray, useForm } from "react-hook-form";
import { MealForm } from "@/types/forms/meal-form";
import { getIngredients } from "@/lib/ingredients";
import { saveMeal } from "@/lib/meals";
import useOverlay from "@/hooks/useOverlay";

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
  const existingIngredients = getIngredients();

  const { register, control, handleSubmit, reset } = useForm<MealForm>({
    defaultValues: defaultFormData,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data: MealForm) => {
    console.log(data);
    saveMeal(data);
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
                {existingIngredients.length > 0 ? (
                  existingIngredients.map((existingIngredient) => (
                    <option
                      key={existingIngredient.id}
                      value={existingIngredient.id}
                    >
                      {existingIngredient.name}
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
