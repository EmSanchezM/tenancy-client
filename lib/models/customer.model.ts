import { Address, CreateAddressDto } from "./address.model";
import {
  ContactInformation,
  CreateContactInformationDto,
} from "./contact-information.model";
import { TableReservation } from "./table-reservation.model";

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  address: Address;
  contactInformation: ContactInformation;
  birthday?: string;
  reservation?: TableReservation;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomerDto {
  firstName: string;
  lastName: string;
  address?: CreateAddressDto;
  contactInformation?: CreateContactInformationDto;
  birthday?: string;
}
