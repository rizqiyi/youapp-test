import NextAuth from "next-auth/next";
import type { User } from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@/services/auth";
import { JwtPayload, jwtDecode } from "jwt-decode";

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

          if (api.ok) return { ...res, username: credentials.username };

          throw res;
        } else {
          throw new Error("Missing credentials");
        }
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 1 * 60 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (user && account) {
        return { ...token, ...user, accessToken: account.access_token };
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token?.access_token && session instanceof Object) {
        const { exp } = jwtDecode<JwtPayload>(String(token?.access_token));

        if ((exp as number) < new Date().getTime() / 1000) {
          session.error = "unauthenticated";

          return session;
        }

        session.user = token;
        session.accessToken = token.access_token;

        return session;
      }

      return {};
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
