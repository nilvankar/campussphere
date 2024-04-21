import connectDb from "@/app/lib/database/db";
import admin from "@/app/lib/models/admin";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const reqBody = await req.json();
      const {
        address,
        adharNo,
        alternateEmail,
        email,
        firstName,
        gender,
        jobDesignation,
        landLineNumber,
        lastName,
        maritalStatus,
        middleName,
        panNo,
        profilePhoto,
        salaray,
      } = reqBody;
      const checkAlreadyExists = await admin.findOne({ email });
      if (checkAlreadyExists) {
        return NextResponse.json(
          { success: false, message: "already exists" },
          { status: 400 }
        );
      }
      const newAdmin = await admin.create({
        address: address,
        adharNo: adharNo,
        alternateEmail: alternateEmail,
        dob: new Date().toLocaleDateString(),
        maritalStatus: maritalStatus,
        middleName: middleName,
        firstName: firstName,
        lastName: lastName,
        landLineNumber: landLineNumber,
        panNo: panNo,
        profilePhoto: profilePhoto,
        salaray: salaray,
        gender: gender,
        jobDesignation: jobDesignation,
        joiningData: new Date().toLocaleDateString(),
      });
      return NextResponse.json(
        { success: true, message: "Admin assigned", admin: newAdmin },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, message: error },
        { status: 500 }
      );
    }
  }
}
