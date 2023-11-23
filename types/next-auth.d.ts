import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userName: string;
      name: string;
      email: string;
      roles: string[];
      token: string;
    };
  }
}
