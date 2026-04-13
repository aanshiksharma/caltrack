import { Meal } from "./meal"
import { Ingredient } from "./ingredient"

export type Storage = {
    meals: Meal[],
    ingredients: Ingredient[]
}