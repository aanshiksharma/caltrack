import { ReactNode } from "react";
import { IngredientProvider } from "@/hooks/useIngredients";
import { MealProvider } from "@/hooks/useMeals";
import OverlayProvider from "@/context/overlay/OverlayProvider";

function Providers({ children }: { children: ReactNode }) {
  return (
    <IngredientProvider>
      <MealProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </MealProvider>
    </IngredientProvider>
  );
}

export default Providers;
