import { getToken } from "next-auth/jwt";
import { jwtDecode, JwtPayload } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const createUrl = (givenUrl: string) => new URL(givenUrl, request.url);

  // check if the user currently on public route and no token provided then we return next function
  if (!token && ["/login", "/register"].includes(request.nextUrl.pathname))
    return NextResponse.next();

  if (!token) return NextResponse.redirect(createUrl("/login"));

  // check if the user currently on private route but try to access auth page
  if (
    ["/login", "/register"].includes(request.nextUrl.pathname) &&
    token?.access_token
  )
    return NextResponse.redirect(createUrl("/private/home"));

  if (token?.access_token) {
    const { exp } = jwtDecode<JwtPayload>(String(token?.access_token));

    if ((exp as number) < new Date().getTime() / 1000) {
      return NextResponse.redirect(createUrl("/login"));
    }

    return NextResponse.next();
  }

  return NextResponse.redirect(createUrl("/login"));
}

export const config = {
  matcher: ["/private/:path*", "/login", "/register"],
};
