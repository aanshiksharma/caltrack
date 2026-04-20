"use client";

import { useState, createContext } from "react";
import { Overlay, OverlayType, OverlayContextType } from "./types";
import { overlayMap } from "./overlay-map";

export const OverlayContext = createContext<OverlayContextType | null>(null);

function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [overlay, setOverlay] = useState<Overlay>({ type: null });

  const openOverlay = (type: OverlayType, props?: any) => {
    setOverlay({ type, props });
  };

  const closeOverlay = () => {
    setOverlay({ type: null });
  };

  const ActiveOverlay = overlay.type ? overlayMap[overlay.type] : null;

  return (
    <OverlayContext.Provider value={{ overlay, openOverlay, closeOverlay }}>
      {children}

      {ActiveOverlay && (
        <div className="fixed inset-0 flex items-center justify-center px-4 py-6 bg-transparent backdrop-blur-md z-99">
          <ActiveOverlay {...overlay.props} />
        </div>
      )}
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
