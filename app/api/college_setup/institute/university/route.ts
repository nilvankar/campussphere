'use server'
import dbConnect from "@/app/db/database";
import instituteCollection, { instituteType } from "@/app/lib/models/institute";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      await dbConnect()
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
      } = reqBody;
      
      const newUniveristy:instituteType = await instituteCollection.create({
        email: email,
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
        { success: true, message: "successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
export const GET=async(req:NextRequest,res:NextResponse)=>{
  if(req.method==="GET"){
    const reqBody=await req.json()
    const {instituteName}=reqBody
    try {
      const res=await instituteCollection.find()
      
      if(!res){
        return NextResponse.json({success:false,message:"not found"},{status:404})
      }
      return NextResponse.json(res,{status:200})
    } catch (error) {
      console.error(error)
      return NextResponse.json({error:error},{status:500})
    }
  }
}

export const PUT=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="PUT"){
        try {
            return NextResponse.json({success:true,message:"successfully"},{status:200})
        } catch (error) {
            console.error(error)
            return NextResponse.json({error:error},{status:500})
        }
    }
}