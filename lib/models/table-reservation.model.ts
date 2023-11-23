import { Customer } from "./customer.model";
import { Table } from "./table.model";
import { STATUS_TABLE_RESERVATION } from "../constants/status-table-reservation";

export interface TableReservation {
  id: string;
  reservationDate: string;
  reservationHour: string;
  reservationNumber: number;
  table: Table;
  customer: string | Customer;
  status: STATUS_TABLE_RESERVATION;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
