import { createProfile, getProfile, updateProfile } from "@/services/profile";
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

async function PUT(request: NextRequest) {
  const body = await request.json();

  const authorizationHeader = request.headers?.get("authorization");

  try {
    const responseApi = await updateProfile(
      authorizationHeader as string,
      body
    );

    const data = await responseApi.json();

    if (!responseApi.ok) throw new Error(responseApi.statusText);

    return NextResponse.json({ status: 200, data, message: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error }, { status: 400 });
  }
}

async function POST(request: NextRequest) {
  const body = await request.json();

  const authorizationHeader = request.headers?.get("authorization");

  try {
    const responseApi = await createProfile(
      authorizationHeader as string,
      body
    );

    const data = await responseApi.json();

    if (!responseApi.ok) throw new Error(responseApi.statusText);

    return NextResponse.json({ status: 200, data, message: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error }, { status: 400 });
  }
}

export { GET, PUT, POST };
