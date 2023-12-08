import { ContactInformation } from "./contact-information.model";
import { OrdersInLine } from "./order.model";

export interface DeliveryDriver {
  id: string;
  firstName: string;
  lastName: string;
  contactInformation: ContactInformation;
  orders: OrdersInLine[];
  isAvailable: boolean;
  isActive: boolean;
  createdAt: string;
}
