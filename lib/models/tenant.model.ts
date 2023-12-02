import { MODULES_AVAILABLES } from "../constants/modules-availables.constants";

export interface ContactInformation {
  email?: string;
  phoneNumbers?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
}

export interface TaxesInformation {
  invoiceNumber?: string;
  vatNumber?: string;
  taxRate?: number;
  taxType?: string;
  taxExempt: boolean;
}

export interface Tenant {
  id: string;
  name: string;
  logo?: string;
  language?: string;
  modulesAvailables: MODULES_AVAILABLES[];
  branches: number;
  contactInformation: ContactInformation;
  taxInformation: TaxesInformation;
}
