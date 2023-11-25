import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { Login } from "@/lib/services/auth";

const handler: NextAuthOptions = NextAuth({
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
          const user = await Login({
            emailOrUsername: credentials?.email!,
            password: credentials?.password!,
          });

          if (!user.success) throw new Error("Credentials not valid");

          return user.data;
        } catch {
          throw new Error("Credentials not valid");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user });
      return { ...token };
    },
    async session({ session, token }) {
      console.log({ session, token });
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
