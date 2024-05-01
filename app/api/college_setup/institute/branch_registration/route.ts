import connectDb from "@/app/db/database";
import branchModel, { branchType } from "@/app/lib/models/branch";
import instituteCollection from "@/app/lib/models/institute";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    await connectDb();
    try {
      const reqBody = await req.json();
      const {
        branchLogo,
        branchName,
        registrationNumber,
        alias,
        email,
        alteranteEmail,
        contactNo,
        officeNo,
        address,
        instituteName,
      } = reqBody;
      const newBranch: branchType = await branchModel.create({
        branchLogo: branchLogo,
        instituteName: instituteName,
        branchName: branchName,

        registrationNumber: registrationNumber,
        alias: alias,
        email: email,
        alteranteEmail: alteranteEmail,
        contactNo: contactNo,
        officeNo: officeNo,
        address: address,
        yearOfEstablishment: new Date().toLocaleDateString(),
      });
      const checkuniveristyExists = await instituteCollection.findOne({
        instituteName,
      });
      if (!checkuniveristyExists) {
        return NextResponse.json({ success: false }, { status: 403 });
      }
      return NextResponse.json(
        { success: true, message: "successfully create new branch" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "PUT") {
    await connectDb();
    try {
      const reqBody = await req.json();
      const {
        branchLogo,
        branchName,
        registrationNumber,
        alias,
        email,
        alteranteEmail,
        contactNo,
        officeNo,
        address,
        instituteName,
      } = reqBody;
      const res = await branchModel.updateOne({
        branchLogo: branchLogo,
        branchName: branchName,
        registrationNumber: registrationNumber,
        alias: alias,
        email: email,
        alteranteEmail: alteranteEmail,
        contactNo: contactNo,
        officeNo: officeNo,
        address: address,
        instituteName: instituteName,
      });
      return NextResponse.json(
        { success: true, message: "Updated successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 505 });
    }
  }
};
export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      const data = await branchModel.find({});
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
