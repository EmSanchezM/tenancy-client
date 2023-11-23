import { RawMaterial } from "./raw-material.model";

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  code: string;
  description: string;
  address: string;
  products: RawMaterial[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSupplierDto {
  name: string;
  email: string;
  phone: string;
  code: string;
  description: string;
  address: string;
}
