import { PAYMENT_METHODS } from "../constants/payment-methods.constant";
import { CashierOrder, OrdersInLine } from "./order.model";

export interface CashPayment {
  id: string;
  paymentMethod: PAYMENT_METHODS;
  order: CashierOrder;
  totalAmount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OnlinePayment {
  id: string;
  paymentMethod: PAYMENT_METHODS;
  transactionId: string;
  accountType: string;
  customerId: string;
  email: string;
  transactionNumber: string;
  order: OrdersInLine;
  totalAmount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
