import dbConnect from "@/app/db/database";
import { wardenMgmtModel } from "@/app/lib/models/domitory";
import { NextRequest, NextResponse } from "next/server";
import { wardenType } from "@/app/lib/types/schema";
export const POST = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "POST") {
    const reqbody = await req.json();
    const { wardenName } = reqbody;
    reqbody;
    try {
      const res: wardenType = await wardenMgmtModel.create({
        wardenName: wardenName,
      });
      return NextResponse.json(
        { success: true, message: "New warden details added" },
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
