import { getProfile } from "@/services/profile";
import { NextRequest, NextResponse } from "next/server";

async function GET(request: NextRequest) {
  const authorizationHeader = request.headers?.get("authorization");

  try {
    const responseApi = await getProfile(authorizationHeader as string);

    const data = await responseApi.json();

    if (!responseApi.ok) throw new Error(responseApi.statusText);

    return NextResponse.json({ status: 200, data, message: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error }, { status: 400 });
  }
}

export { GET };
