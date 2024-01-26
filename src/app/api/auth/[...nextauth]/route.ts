import NextAuth from "next-auth/next";
import type { User } from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@/services/auth";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          name: "username",
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        email: {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(
        credentials:
          | Record<"username" | "email" | "password", string>
          | undefined,
        req: any
      ): Promise<User | null> {
        if (typeof credentials !== "undefined") {
          const api: any = await signIn({
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
          });

          const res = await api.json();

          console.log(api.ok, api.status);
          if (api.ok) return { ...res, username: credentials.username };

          throw new Error("Missing credentials");
        } else {
          throw new Error("Missing credentials");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
