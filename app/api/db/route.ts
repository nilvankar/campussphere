import dbConnect from "@/app/db/database";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await dbConnect();
    return NextResponse.json({ message: "Connected!" },{status:200});
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}