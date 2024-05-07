import { NextRequest, NextResponse } from "next/server";
export const POST=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="POST"){
        try {
            
        } catch (error) {
            console.error(error)
            return NextResponse.json(error,{status:500})
        }
    }
}
export const GET=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="GET"){
        try {
            
        } catch (error) {
            console.error(error)
            return NextResponse.json(error,{status:500})
        }
    }
}
export const PUT=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="PUT"){
        try {
            
        } catch (error) {
            console.error(error)
            return NextResponse.json(error,{status:500})
        }
    }
}
export const DELETE=async(req:NextRequest,res:NextResponse)=>{
    if(req.method==="DELETE"){
        try {
            
        } catch (error) {
            console.error(error)
            return NextResponse.json(error,{status:500})
        }
    }
}
