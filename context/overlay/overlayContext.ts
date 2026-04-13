import { createContext } from "react";
import { OverlayContextType } from "./types";

export const OverlayContext = createContext<OverlayContextType | null>(null);