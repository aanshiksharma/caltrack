export type Meal = {
    id: string,
    name: string,

    ingredients: {
        ingredientId: string,
        
        quantity: {
            value: number,
            unit: string,
        }

        snapshot: {
            name: string,
            calories: number,
            macros: {
                carbs: number,
                protein: number,
                fat: number
            }
        }
    }[],

    createdAt: string
}