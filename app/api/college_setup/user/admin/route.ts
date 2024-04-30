import connectDb from "@/app/db/database";
import admin from "@/app/lib/models/admin";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      const reqBody = await req.json();
      const {
        firstName,
        lastName,
        middleName,
        dob,
        gender,
        maritalStatus,
        email,
        alternateEmail,
        landLineNumber,
        adharNo,
        panNo,
        branchName,
        salary,
        address,
        profilePhoto,
        contactNo,
        jobDesignation,
      } = reqBody;
      const newAdmin = await admin.create({
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        dob: new Date().toLocaleDateString(),
        branchName: branchName,
        gender: gender,
        maritalStatus: maritalStatus,
        email: email,
        alternateEmail: alternateEmail,
        landLineNumber: landLineNumber,
        adharNo: adharNo,
        panNo: panNo,
        joiningData: new Date().toLocaleDateString(),
        salary: salary,
        address: address,
        profilePhoto: profilePhoto,
        contactNo: contactNo,
        jobDesignation: jobDesignation,
      });
      return NextResponse.json(
        { success: true, message: "successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
