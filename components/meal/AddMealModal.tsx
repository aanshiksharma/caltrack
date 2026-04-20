import useOverlay from "@/hooks/useOverlay";

import Modal from "../ui/Modal";
import FormMeal from "./FormMeal";

function AddMealModal() {
  const { closeOverlay } = useOverlay();

  return (
    <Modal>
      <button onClick={closeOverlay}>Close</button>
      <h1 className="text-2xl font-bold">Add Meal Modal</h1>

      <FormMeal />
    </Modal>
  );
}

export default AddMealModal;
