import { userModel } from "@/app/lib/models/statistics";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      const data = await userModel.find({});
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    const rebody = await req.json();
    const {
      branchname,
      degreecode,
      courseyear,
      section,
      male_no,
      female_no,
      doms_no,
      transportation,
      total_count,
    } = rebody;
    try {
      const data = await userModel.create({
        branchname: branchname,
        degreecode: degreecode,
        courseyear: courseyear,
        section: section,
        male_no: male_no,
        female_no: female_no,
        doms_no: doms_no,
        transportation: transportation,
        total_count: total_count,
      });
      return NextResponse.json({success:true,message:"user summary added"}, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
