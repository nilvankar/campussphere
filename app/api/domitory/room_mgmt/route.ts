import dbConnect from "@/app/db/database";
import { dormBuildingModel, roomMgmtModel } from "@/app/lib/models/domitory";
import { roomMgmtType } from "@/app/lib/types/schema";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "POST") {
    const reqbody = await req.json();
    const { FloorNo, RoomType, RoomNo, TotalBeds, AvailableBeds } = reqbody;
    try {
      const res: roomMgmtType = await roomMgmtModel.create({
        FloorNo: FloorNo,
        RoomType: RoomType,
        RoomNo: RoomNo,
        TotalBeds: TotalBeds,
        AvailableBeds: AvailableBeds,
      });
      return NextResponse.json(
        { success: true, message: "New Room details added" },
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
      const res = await roomMgmtModel.find({});
      return NextResponse.json(res, { status: 200 });
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
