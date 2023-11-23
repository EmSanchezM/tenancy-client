import { Category } from "./category.model";
import { Ingredient } from "./ingredient.model";
import { RequisitionItems } from "./requisition.model";
import { Supplier } from "./supplier.model";
import { Unit } from "./unit.model";

export interface RawMaterial {
  id: string;
  name: string;
  description: string;
  barCode: string;
  expirationDate: Date;
  price?: number;
  costPrice: number;
  quantity: number;
  minStock: number;
  maxStock: number;
  ingredients: Ingredient[];
  unitsOfMeasure: Unit[];
  requisitionItems: RequisitionItems[];
  category?: Category;
  suppliers: Supplier[];
  isActive: boolean;
  createdAt: string;
  updatedAt: Date;
}
