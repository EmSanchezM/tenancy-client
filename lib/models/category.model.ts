export interface Category {
  id: string;
  name: string;
  description: string;
  isMenu: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface QueryParamsCategory {
  isMenu?: boolean;
}
