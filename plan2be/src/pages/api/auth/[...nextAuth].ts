import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../path-to-your-prisma-client";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    // Email/Password Provider
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Check credentials and return user data if valid, otherwise null
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signUp: "/auth/register", // Redirect to your registration page
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true,
  },
});
