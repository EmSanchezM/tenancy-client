export interface ContactInformation {
  email: string;
  phoneNumbers: string[];
  website: string;
  facebook: string;
  instagram: string;
}

export interface CreateContactInformationDto {
  email?: string;
  phoneNumbers?: string[];
  website?: string;
  facebook?: string;
  instagram?: string;
}
