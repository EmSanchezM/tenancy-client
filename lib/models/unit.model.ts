import { Ingredient } from "./ingredient.model";
import { RawMaterial } from "./raw-material.model";
import { RequisitionItems } from "./requisition.model";

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number;
  ingredient?: Ingredient;
  product?: RawMaterial;
  requisitionItems?: RequisitionItems[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
