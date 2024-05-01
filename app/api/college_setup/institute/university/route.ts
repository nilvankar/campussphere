"use server";
import dbConnect from "@/app/db/database";
import instituteCollection, { instituteType } from "@/app/lib/models/institute";
import User from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";

// create new univeristy
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
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
        logo,
      } = reqBody;

      const newUniveristy: instituteType = await instituteCollection.create({
        email: email,
        alternateEmail: alternateEmail,
        logo: logo,
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

// edit for admin or director
export const PUT = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "PUT") {
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
      logo,
    } = reqBody;
    try {
      const checkuniveristyExists = await instituteCollection.findOne({
        instituteName,
      });
      if (!checkuniveristyExists) {
        return NextResponse.json({ success: false }, { status: 404 });
      }
      const updatedUniversity = await instituteCollection.updateOne({
        email: email,
        logo: logo,
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
        { success: true, message: "successfully update" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

// getting university data
export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      const data = await instituteCollection.find({});
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "DELETE") {
    const reqBody = await req.json();
    const { email } = reqBody;
    try {
      const checkuniveristyExists=await instituteCollection.findOne({email})
      if(!checkuniveristyExists){
        return NextResponse.json({success:false},{status:404})
      }
      const res = await instituteCollection.deleteOne({ email });
      return NextResponse.json(
        { success: true, message: "Membership cancedled" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
