export type OverlayType = "ADD_INGREDIENT" | "ADD_MEAL" | "EDIT_INGREDIENT" | "EDIT_MEAL" | null;

export type Overlay = {
    type: OverlayType,
    props?: any
}

export type OverlayContextType = {
  overlay: Overlay;
  openOverlay: (type: OverlayType, props?: any) => void;
  closeOverlay: () => void;
};