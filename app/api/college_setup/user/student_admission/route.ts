import connectDb from "@/app/db/database";
import student from "@/app/lib/models/student";
import { NextRequest, NextResponse } from "next/server";

connectDb()
export const POST=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="POST"){
        try {
            const reqBody=await req.json()
            const {}=reqBody
            const newStudent=await student.create({
                
            })
            return NextResponse.json({success:true,message:"successfully"},{status:200})
        } catch (error) {
            console.error(error)
            return NextResponse.json({error:error},{status:500})
        }
    }
}