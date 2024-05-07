"use server";
import dbConnect from "@/app/db/database";
import { configLibrary, configLibraryType } from "@/app/lib/models/library";
import User from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";

// create new univeristy
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const reqBody = await req.json();
      const { userRole, materialType, max_allow, max_day_allow, feesPerDay } =
        reqBody;

      const newUniveristy: configLibraryType = await configLibrary.create({
        userRole: userRole,
        materialType: materialType,
        max_allow: max_allow,
        max_day_allow: max_day_allow,
        feesPerDay: feesPerDay,
      });
      return NextResponse.json(
        { success: true, message: "successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

// edit for admin or director
export const PUT = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "PUT") {
    const reqBody = await req.json();
    const {
      email,
      alternateEmail,
      instituteName,
      founderName,
      affiliation,
      shortcode,
      contactno,
      officeno,
      panNo,
      address,
      logo,
    } = reqBody;
    try {
      const checkuniveristyExists = await configLibrary.findOne({
        instituteName,
      });
      if (!checkuniveristyExists) {
        return NextResponse.json({ success: false }, { status: 404 });
      }
      const updatedUniversity = await configLibrary.updateOne({
        email: email,
        logo: logo,
        alternateEmail: alternateEmail,
        instituteName: instituteName,
        founderName: founderName,
        affiliation: affiliation,
        shortcode: shortcode,
        contactno: contactno,
        officeno: officeno,
        panNo: panNo,
        address: address,
      });
      return NextResponse.json(
        { success: true, message: "successfully update" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

// getting university data
export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    await dbConnect();
    try {
      const data = await configLibrary.find({});
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "DELETE") {
    const reqBody = await req.json();
    const { email } = reqBody;
    try {
      const res = await configLibrary.deleteOne({ email });
      return NextResponse.json(
        { success: true, message: "library Configuration deleted" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
