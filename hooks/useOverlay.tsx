import { useContext } from "react"
import { OverlayContext } from "../context/overlay/overlayContext"

function useOverlay() {
    const context = useContext(OverlayContext);

    if (!context) {
        throw new Error("useOverlay muse be used within an OverlayProvider");
    }
    
    return context;
}

export default useOverlay;