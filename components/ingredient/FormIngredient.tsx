import { useState } from "react";
import { IngredientForm } from "@/types/forms/ingredient-form";
import { saveIngredient } from "@/lib/ingredients";
import useOverlay from "@/hooks/useOverlay";

const defaultFormData: IngredientForm = {
  name: "",
  unit: "g",
  calories: 0,
  carbs: 0,
  protein: 0,
  fat: 0,
};

function FormIngredient() {
  const { closeOverlay } = useOverlay();
  const [formData, setFormData] = useState<IngredientForm>(defaultFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === "number"
          ? Number(value)
          : value,
    }));
  };

  const resetForm = () => setFormData(defaultFormData);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    saveIngredient(formData);
    resetForm();
    closeOverlay();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-2">
        <input
          autoFocus
          value={formData.name}
          onChange={handleChange}
          name="name"
          placeholder="Name..."
          className="input"
        />

        <select
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          className="input"
        >
          <option value="g">Grams (g)</option>
          <option value="ml">MilliLitres (mL)</option>
          <option value="unit">Unit</option>
        </select>

        <input
          type="number"
          value={formData.calories}
          onChange={handleChange}
          name="calories"
          placeholder="Calories per unit..."
          className="input"
        />

        <input
          type="number"
          value={formData.carbs}
          onChange={handleChange}
          name="carbs"
          placeholder="Carbs"
          className="input"
        />

        <input
          type="number"
          value={formData.protein}
          onChange={handleChange}
          name="protein"
          placeholder="Protein"
          className="input"
        />

        <input
          type="number"
          value={formData.fat}
          onChange={handleChange}
          name="fat"
          placeholder="Fats"
          className="input"
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default FormIngredient;
