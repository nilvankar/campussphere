import dbConnect from "@/app/db/database";
import { section } from "@/app/lib/models/academics";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    const reqBody = await req.json();
    const {
      section,
      degreeCode,
      courseYear,
      maxStrength,
      primaryFaculty,
      secondaryFaculty,
    } = reqBody;
    try {
      const res = await section.create({
        section: section,
        degreeCode: degreeCode,
        courseYear: courseYear,
        maxStrength: maxStrength,
        primaryFaculty: primaryFaculty,
        secondaryFaculty: secondaryFaculty,
      });
      return NextResponse.json(
        { success: true, message: "Section Create" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const res = await section.find({});
      return NextResponse.json(res, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
