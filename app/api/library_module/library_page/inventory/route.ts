"use server";
import dbConnect from "@/app/db/database";
import { inventory, inventoryType } from "@/app/lib/models/library";
import { NextRequest, NextResponse } from "next/server";

// create new univeristy
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const reqBody = await req.json();
      const {
        title,
        lang,
        publisher,
        materialType,
        ISBN,
        availableQuantity,
        Price,
        totalQuantity,
      } = reqBody;

      const newUniveristy: inventoryType = await inventory.create({
        title: title,
        lang: lang,
        publisher: publisher,
        materialType: materialType,
        ISBN: ISBN,
        availableQuantity: availableQuantity,
        Price: Price,
        totalQuantity: totalQuantity,
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
  await dbConnect();
  if (req.method === "PUT") {
    const reqBody = await req.json();
    const {} = reqBody;
    try {
      const updatedUniversity = await inventory.updateOne({});
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
    await dbConnect();
    try {
      const data = await inventory.find({});
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  await dbConnect();
  if (req.method === "DELETE") {
    const reqBody = await req.json();
    const { email } = reqBody;
    try {
      const res = await inventory.deleteOne({ email });
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
