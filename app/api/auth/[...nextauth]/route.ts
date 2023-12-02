import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { Login } from "@/lib/services/auth";

const options: NextAuthOptions = {
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
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
