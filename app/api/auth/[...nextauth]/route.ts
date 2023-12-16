import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { Login } from "@/lib/services/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "test@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const responseUser = await Login({
            emailOrUsername: credentials?.email!,
            password: credentials?.password!,
          });

          if (!responseUser.success) throw new Error("Credentials not valid");

          return responseUser.data;
        } catch {
          throw new Error("Credentials not valid");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      let t = {};
      let u = {};
      if (token) t = token;
      if (user) u = user;

      return { ...t, ...u };
    },
    async session({ session, token }) {
      session.user = {
        name: token?.username,
        token: token?.token,
        ...token,
      } as any;

      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
