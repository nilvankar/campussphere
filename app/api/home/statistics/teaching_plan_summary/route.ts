import { batch } from "@/app/lib/models/academics";
import { teachingplan } from "@/app/lib/models/statistics";
import { NextRequest, NextResponse } from "next/server";

export const GET=async(req:NextRequest,res:NextResponse)=>{
    if(req.method=="GET"){
        try {
            const data=await teachingplan.find({})

            return NextResponse.json(data,{status:200})
        } catch (error) {
            console.error(error)
            return NextResponse.json(error,{status:500})
        }
    }

}