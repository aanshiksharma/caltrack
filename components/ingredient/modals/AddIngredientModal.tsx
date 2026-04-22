import useOverlay from "@/hooks/useOverlay";
import Modal from "../../ui/Modal";
import FormIngredient from "./FormIngredient";

function AddIngredientModal() {
  const { closeOverlay } = useOverlay();

  return (
    <Modal>
      <button onClick={closeOverlay}>Close</button>
      <h1 className="text-2xl font-bold">Add Ingredient Modal</h1>

      <FormIngredient />
    </Modal>
  );
}

export default AddIngredientModal;
