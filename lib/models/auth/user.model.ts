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
  id?: string;
  email?: string;
  username?: string;
  roles?: string[];
  token?: string;
  branch?: { id: string; name: string };
  sub?: string;
  iat?: number;
  exp?: number;
  jti?: string;
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
}
