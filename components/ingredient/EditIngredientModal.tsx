import useOverlay from "@/hooks/useOverlay";
import Modal from "../ui/Modal";

function EditIngredientModal() {
  const { closeOverlay } = useOverlay();

  return (
    <Modal>
      <button onClick={closeOverlay}>Close</button>
      <h1 className="text-2xl font-bold">Add Meal Modal</h1>
    </Modal>
  );
}

export default EditIngredientModal;
