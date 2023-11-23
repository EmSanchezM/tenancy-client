export interface ProfileUser {
  id: string;
  email?: string;
  username?: string;
  roles: string[];
  token: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export interface UserAuthenticate {
  id: string;
  email?: string;
  username?: string;
  roles: string[];
  token: string;
}

export interface User {
  id: string;
  email?: string;
  username?: string;
  roles: string[];
  token: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
