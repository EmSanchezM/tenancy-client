import { STATUS_INVOICE } from "../constants/status_invoice.constant";
import { User } from "./auth/user.model";
import { CashierOrder } from "./order.model";

export interface Invoice {
  id: string;
  invoiceNumber: string;
  invoiceDate: string;
  subtotal: number;
  taxRate: number;
  total: number;
  vatNumber: string;
  status: STATUS_INVOICE;
  orders: CashierOrder[];
  user: User;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
