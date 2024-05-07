import dbConnect from "@/app/db/database";
import { batch } from "@/app/lib/models/academics";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect()
  if (req.method === "POST") {
    const reqBody = await req.json();
    const {
      academicDegree,
      degree,
      degreeGroup,
      medium,
      frombatch,
      tobatch,
      managedDepartment,
    } = reqBody;
    try {
      const res = await batch.create({
        academicDegree: academicDegree,
        degree: degree,
        degreeGroup: degreeGroup,
        medium: medium,
        frombatch: frombatch,
        tobatch: tobatch,
        managedDepartment: managedDepartment,
      });
      return NextResponse.json(
        { success: true, message: "Batch created" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  await dbConnect()
  if (req.method === "GET") {
    try {
      const res = await batch.find({});
      return NextResponse.json(res, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
