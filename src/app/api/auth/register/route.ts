import { RegisterPayload, signUp } from "@/services/auth";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

async function POST(request: NextRequest, response: NextApiResponse) {
  try {
    const body: RegisterPayload = await request.json();
    const responseApi = await signUp(body);

    const data = await responseApi.json();

    if (data?.message === "User already exists") throw new Error(data?.message);

    if (responseApi.ok)
      return NextResponse.json({ status: 201, message: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 400, message: error }, { status: 400 });
  }
}

export { POST };
