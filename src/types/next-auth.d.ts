declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      token?: string;
      email?: string;
      accessToken?: string;
    };
  }
}
