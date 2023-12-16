import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  id?: string;
  email?: string;
  username?: string;
  roles?: string[];
  token?: string;
  branch?: { id: string; name: string };
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
