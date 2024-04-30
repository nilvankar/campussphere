import { batchModel } from "@/app/lib/models/academics";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
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
      const res = await batchModel.create({
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
