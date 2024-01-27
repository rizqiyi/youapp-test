import type { NextAuthOptions } from "next-auth/index";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      username?: string;
      token?: string;
      email?: string;
      accessToken?: string;
    };
  }
}
