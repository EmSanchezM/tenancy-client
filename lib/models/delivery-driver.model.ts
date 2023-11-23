import { OrdersInLine } from "./order.model";

export interface DeliveryDriver {
  id: string;
  firstName: string;
  lastName: string;
  orders: OrdersInLine[];
  isAvailable: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
