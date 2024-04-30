import connectDb from "@/app/db/database";
import branchModel, { branchType } from "@/app/lib/models/branch";
import { NextRequest, NextResponse } from "next/server";

connectDb()
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
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
      instituteName
    } = reqBody;
    const newBranch: branchType = await branchModel.create({
      branchLogo: branchLogo,
      instituteName:instituteName,
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
    try {
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
