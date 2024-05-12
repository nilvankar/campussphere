import dbConnect from "@/app/db/database";
import { NextRequest, NextResponse } from "next/server";
import { outPassType, wardenType } from "@/app/lib/types/schema";
import { wardenMgmtModel } from "@/app/lib/models/domitory";
export const POST = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "POST") {
    const reqbody = await req.json();
    const { Status, name, phonNo, roomNO } = reqbody;
    reqbody;
    try {
      const res: outPassType = await wardenMgmtModel.create({
        Status: Status,
        name: name,
        phonNo: phonNo,
        roomNO: roomNO,
      });
      return NextResponse.json(
        { success: true, message: "New Status is create details added" },
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
      const res = await wardenMgmtModel.find({});
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
