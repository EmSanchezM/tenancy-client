import { RecipeDifficulty } from "../constants/recipe-difficulty.constant";
import { Ingredient } from "./ingredient.model";
import { PreparationTime } from "./preparation-time.type";
import { Product } from "./product.model";

export interface Recipe {
  id: string;
  name?: string;
  portions: number;
  category: string;
  preparationTime: PreparationTime;
  difficulty: RecipeDifficulty;
  product: Product;
  ingredients: Ingredient[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
