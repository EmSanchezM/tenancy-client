import { Address, CreateAddressDto } from "./address.model";
import {
  ContactInformation,
  CreateContactInformationDto,
} from "./contact-information.model";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  address: Address;
  contactInformation: ContactInformation;
  birthday?: string;
  workPosition: string;
  workLocation: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEmployeeDto {
  firstName: string;
  lastName: string;
  workPosition: string;
  workLocation: string;
  address?: CreateAddressDto;
  contactInformation?: CreateContactInformationDto;
  birthday?: string;
}
