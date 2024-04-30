import { NextRequest, NextResponse } from "next/server";

export const POST=async(req:NextRequest,res:NextResponse)=>{
    if(req.method=="POST"){
        try {
            
        } catch (error) {
            console.error(error)
            return NextResponse.json(error,{status:500})
        }
    }

}