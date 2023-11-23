import { STATUS_REQUISITION } from "../constants/status-requisition.constant";
import { Area } from "./area.model";
import { User } from "./auth/user.model";
import { RawMaterial } from "./raw-material.model";
import { Unit } from "./unit.model";

export interface RequisitionItems {
  id: string;
  quantity: number;
  price: number;
  requisition: Requisition;
  product: RawMaterial;
  unit: Unit;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Requisition {
  id: string;
  status: STATUS_REQUISITION;
  dateToMeet: string;
  items: RequisitionItems[];
  user: User;
  area: Area;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
