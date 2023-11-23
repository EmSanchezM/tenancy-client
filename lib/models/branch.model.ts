import { Address } from "./address.model";
import { Area } from "./area.model";
import { User } from "./auth/user.model";
import { ContactInformation } from "./contact-information.model";

export interface Branch {
  id: string;
  name: string;
  address: Address;
  contactInformation: ContactInformation;
  users?: User[];
  areas?: Area[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
