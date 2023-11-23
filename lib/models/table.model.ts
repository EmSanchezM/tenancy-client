import { Area } from "./area.model";
import { TableReservation } from "./table-reservation.model";

export interface Table {
  id: string;
  tableNumber: number;
  capacity: number;
  area: Area;
  reservation: string | TableReservation;
  isAvailableForReservation: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
