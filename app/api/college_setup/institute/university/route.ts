import connectDb from "@/app/lib/database/db";
import institute from "@/app/lib/models/institute";
import { NextRequest, NextResponse } from "next/server";
import {} from 'zod'
connectDb();
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    
    try {
      
      const reqBody = await req.json();
      const {
        address,
        affiliation,
        alteranteEmail,
        anyBranch,
        contactNumber,
        email,
        founderName,
        instituteName,
        logo,
        noOfBranch,
        officeNumber,
        panNumber,
        shortCode,
      } = reqBody;
      const checkAlreadyExists = await institute.findOne({ instituteName });
      if (checkAlreadyExists) {
        return NextResponse.json(
          { success: false, message: "University already exists" },
          { status: 400 }
        );
      }
      const newUniversity = await institute.create(reqBody);
      console.log(newUniversity);

      return NextResponse.json(
        {
          success: true,
          message: "new university successfuly purchase pacakge",
        },
        { status: 200 }
      );
    } catch (error) {
      console.error(`$Something went wrong in route institute registration:::{error}`);
      return NextResponse.json(
        { success: false, message: error },
        { status: 500 }
      );
    }
  }
};
