type Unit = "g" | "ml" | "unit"

export type Ingredient = {
    id: string,
    name: string,

    unit: Unit,

    // values per unit
    calories: number,
    macros: {
        carbs: number,
        protein: number,
        fat: number
    },

    createdAt: string
}