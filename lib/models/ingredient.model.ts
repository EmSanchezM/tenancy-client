import { RawMaterial } from "./raw-material.model";
import { Recipe } from "./recipe.model";
import { Unit } from "./unit.model";

export interface Ingredient {
  id: string;
  quantity: number;
  unit: Unit;
  rawMaterial: RawMaterial;
  recipe: Recipe;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
