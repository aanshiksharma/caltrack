"use client";

import { useState } from "react";
import useOverlay from "@/hooks/useOverlay";
import Modal from "./Modal";
import { IngredientForm } from "@/types/forms/ingredient-form";
import { saveIngredient } from "@/lib/ingredients";

const defaultFormData: IngredientForm = {
  name: "",
  unit: "g",
  calories: 0,
  carbs: 0,
  protein: 0,
  fat: 0,
};

function AddIngredientModal() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveIngredient(formData);
    resetForm();
    closeOverlay();
  };

  return (
    <Modal>
      <button onClick={closeOverlay}>Close</button>
      <h1 className="text-2xl font-bold">Add Ingredient Modal</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-2">
          <input
            value={formData.name}
            onChange={(e) => handleChange(e)}
            name="name"
            placeholder="Name..."
            className="input"
          />

          <select
            name="unit"
            value={formData.unit}
            onChange={(e) => handleChange(e)}
            className="input"
          >
            <option value="g">Grams (g)</option>
            <option value="ml">MilliLitres (mL)</option>
            <option value="unit">Unit</option>
          </select>

          <input
            type="number"
            value={formData.calories}
            onChange={(e) => handleChange(e)}
            name="calories"
            placeholder="Calories per unit..."
            className="input"
          />

          <input
            type="number"
            value={formData.carbs}
            onChange={(e) => handleChange(e)}
            name="carbs"
            placeholder="Carbs"
            className="input"
          />

          <input
            type="number"
            value={formData.protein}
            onChange={(e) => handleChange(e)}
            name="protein"
            placeholder="Protein"
            className="input"
          />

          <input
            type="number"
            value={formData.fat}
            onChange={(e) => handleChange(e)}
            name="fat"
            placeholder="Fats"
            className="input"
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </Modal>
  );
}

export default AddIngredientModal;
