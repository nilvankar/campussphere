import connectDb from "@/app/lib/database/db";
import {domitory_summary_schema,teaching_plan_summary_schema,toppers_summary_Schema,user_summary,vehical_summary_schema,visitor_summary_Schema} from '@/app/lib/models/statistics'
import { NextRequest, NextResponse } from "next/server";
connectDb()
const checkRequest=async(req:NextRequest)=>{
   
    if(req.method!=='POST'){
        return 'not available for http request'
    }
  
}

export const create_summary_dom=async(req:NextRequest,res:NextResponse)=>{

        checkRequest(req)
        const reqBody=await req.json()
        const {bed_no,bulding_name,courseYear,degreeCode,floor_no,rom_no,room_type,section,type,userId,userName}=reqBody
    const newDom=await domitory_summary_schema.create({
        bed_no:bed_no,
        bulding_name:bulding_name,
        courseYear:courseYear,
        degreeCode:degreeCode,
        floor_no:floor_no,
        rom_no:rom_no,
        room_type:room_type,
        section:section,
        type:type,
        userId:userId,
        userName:userName
    })
    console.log(`new dom building added`);
    return NextResponse.json({success:true,message:newDom},{status:200})
}
export const create_summary_teaching_plan=async(req:NextRequest,res:NextResponse)=>{
checkRequest(req)
}
export const create_summary_toppers=async(req:NextRequest,res:NextResponse)=>{

    

checkRequest(req)
}
export const create_summary_users=async(req:NextRequest,res:NextResponse)=>{
checkRequest(req)
}
export const create_summary_vehical=async(req:NextRequest,res:NextResponse)=>{
checkRequest(req)
}
export const create_summary_visitors=async(req:NextRequest,res:NextResponse)=>{
    
    checkRequest(req)
}