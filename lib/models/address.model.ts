export interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface CreateAddressDto {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}
