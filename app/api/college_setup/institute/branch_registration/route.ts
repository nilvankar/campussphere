import connectDb from "@/app/lib/database/db";
import branch from "@/app/lib/models/branch";
import { NextRequest, NextResponse } from "next/server";

connectDb()
export const POST=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="POST"){
        try {
            const reqBody=await req.json()
            const { address,alias,alteranteEmail,branchLogo,branchName,contactNo,email,officeNo,registrationNumber,yearOfEstablishment
            }=reqBody
            const checkAlreadyExists = await branch.findOne({branchName});
            if (checkAlreadyExists) {
              return NextResponse.json(
                { success: false, message: "already exists" },
                { status: 400 }
              );
            }
            const newBranch=await branch.create({
              address:address,
              alias:alias,
              alteranteEmail:alteranteEmail,
              branchLogo:branchLogo,
              branchName:branchName,
              contactNo:contactNo,
              email:email,
              officeNo:officeNo,
              registrationNumber:registrationNumber,
              yearOfEstablishment:yearOfEstablishment
            })
            return NextResponse.json({success:true,message:"New Branch added",branch:newBranch},{status:200})
        } catch (error) {
            console.error(error)
            return NextResponse.json({error:error},{status:500})
        }
    }
}