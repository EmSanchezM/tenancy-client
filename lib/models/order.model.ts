import { CASHIER_ORDER_TYPES } from "../constants/cashier-order-types.constant";
import { ORDER_TYPES } from "../constants/order-type.constants";
import { ORDER_CASHIER_STATUSES } from "../constants/status-cashier-order.constant";
import { ORDER_STATUSES } from "../constants/status-order.constants";
import { Address } from "./address.model";
import { User } from "./auth/user.model";
import { Customer } from "./customer.model";
import { DeliveryDriver } from "./delivery-driver.model";
import { Invoice } from "./invoice.model";
import { CashPayment, OnlinePayment } from "./payment.model";
import { Product } from "./product.model";
import { Table } from "./table.model";

export interface CashierOrderItem {
  id: string;
  order?: CashierOrder;
  product?: Product;
  quantityOrdered: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CashierOrder {
  id: string;
  orderDate: string;
  invoices: Invoice[];
  orderType: CASHIER_ORDER_TYPES;
  table?: Table;
  customer: Customer;
  items: CashierOrderItem[];
  payments: CashPayment[];
  totalAmount: number;
  status: ORDER_CASHIER_STATUSES;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItemsInLine {
  id: string;
  order?: OrdersInLine;
  product?: Product;
  quantityOrdered: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OrdersInLine {
  id: string;
  orderDate: string;
  invoices: Invoice[];
  orderType: ORDER_TYPES;
  shippingAddress: Address;
  user: User;
  assingedDriver?: DeliveryDriver;
  items: OrderItemsInLine[];
  payments: OnlinePayment[];
  deliveryFee: number;
  totalAmount: number;
  status: ORDER_STATUSES;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
