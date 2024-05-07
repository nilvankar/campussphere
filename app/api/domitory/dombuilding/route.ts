import dbConnect from "@/app/db/database";
import { dormBuildingModel } from "@/app/lib/models/domitory";
import { dormBuildingType } from "@/app/lib/types/schema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "POST") {
    const reqbody = await req.json();
    const { BuldingName, DomType, NumberofFloor, InCharge, MaximumCapacityl } =
      reqbody;
    try {
      const res:dormBuildingType = await dormBuildingModel.create({
        BuldingName: BuldingName,
        DomType: DomType,
        NumberofFloor: NumberofFloor,
        InCharge: InCharge,
        MaximumCapacityl: MaximumCapacityl,
      });
      return NextResponse.json({success:true,message:"New Building details added"},{status:200})
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
export const GET = async (req: NextRequest, res: NextResponse) => {
    await dbConnect()
  if (req.method === "GET") {
    try {
        const res=await dormBuildingModel.find({})
        return NextResponse.json(res,{status:200})
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
export const PUT = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "PUT") {
    try {
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
export const DELETE = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "DELETE") {
    try {
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
