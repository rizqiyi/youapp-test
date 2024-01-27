import { RegisterPayload, signUp } from "@/services/auth";
import { NextRequest, NextResponse } from "next/server";

async function POST(request: NextRequest) {
  try {
    const body: RegisterPayload = await request.json();
    const responseApi = await signUp(body);

    const data = await responseApi.json();

    if (data?.message === "User already exists") throw data?.message;

    if (responseApi.ok)
      return NextResponse.json({ status: 201, message: "Success" });

    throw data?.message;
  } catch (error) {
    return NextResponse.json({ status: 400, message: error }, { status: 400 });
  }
}

export { POST };
