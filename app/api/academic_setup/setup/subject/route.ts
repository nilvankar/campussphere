import dbConnect from "@/app/db/database";
import { subject } from "@/app/lib/models/academics";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    await dbConnect();
    const reqBody = await req.json();
    const { sno, subjectName, subjectCode, electiveName, subjectGroup } =
      reqBody;
    try {
      const newSubject = await subject.create({
        sno: sno,
        subjectName: subjectName,
        subjectCode: subjectCode,
        electiveName: electiveName,
        subjectGroup: subjectGroup,
      });
      return NextResponse.json(
        { success: true, message: "successfuly add subject" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
