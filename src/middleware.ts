import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds

  const tokenAgeInSeconds = currentTimestamp - token?.iat;
  const maxTokenAgeInSeconds = 60 * 60; // 1 hourca

  if (tokenAgeInSeconds > maxTokenAgeInSeconds) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/private/:path*"] };
