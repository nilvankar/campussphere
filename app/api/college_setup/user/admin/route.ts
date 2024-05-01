import dbConnect from "@/app/db/database";
import connectDb from "@/app/db/database";
import admin from "@/app/lib/models/admin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDb();
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
        { success: true, message: "successfully create new branch admin" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
  await connectDb();
  if (req.method === "PUT") {
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
      const newAdmin = await admin.updateOne({
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
        { success: true, message: "successfully update admin" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};


export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      const data = await admin.find({});
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};

export const DELETE=async(req:NextRequest,res:NextResponse)=>{
  if(req.method==="DELETE"){
    try {
      const reqBody=await req.json()
      const {email}=reqBody
      const res=await admin.deleteOne({email})
      if(!email){
        return NextResponse.json({success:false},{status:404})
      }
      return NextResponse.json({success:true,message:"admin deleted"},{status:200})
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
  
    }
  }
}