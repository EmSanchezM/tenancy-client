import { Category } from "./category.model";
import { CashierOrderItem, OrderItemsInLine } from "./order.model";
import { Recipe } from "./recipe.model";

export interface VariantProduct {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  product?: Product;
}

export interface ProductImage {
  id: string;
  url: string;
  product: Product;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  barCode?: string;
  expirationDate?: string;
  price?: number;
  costPrice?: number;
  variants?: VariantProduct[];
  images?: ProductImage[];
  orderItems?: OrderItemsInLine[];
  cashierOrderItems?: CashierOrderItem;
  recipe: Recipe;
  category?: Category;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
