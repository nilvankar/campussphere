import dbConnect from "@/app/db/database";
import instituteCollection from "@/app/lib/models/institute";
import User from "@/app/lib/models/user";
import bcryptjs from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const reqBody = await req.json();
      const { email, password } = reqBody;
      const user = await User.findOne({ email });

      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }

      const comparePass = await bcryptjs.compare(password, user.password);

      if (!comparePass) {
        return NextResponse.json(
          { success: false, message: "Incorrect password" },
          { status: 400 }
        );
      }

      // Fetch university data based on user's instituteName
      const instituteData = await instituteCollection.findOne({
        instituteName: user.instituteName
      });

      if (!instituteData) {
        return NextResponse.json(
          { success: false, message: "University data not found" },
          { status: 404 }
        );
      }

      // Generate token
      const payLoad = {
        User: {
          id: user.id,
        },
      };
      const secret: string = process.env.SECRET_KEY as string;
      const token = sign(payLoad, secret, {
        algorithm: "HS256",
        expiresIn: "1h",
      });

      if (!token) {
        return NextResponse.json(
          { success: false, message: "Unauthorized user" },
          { status: 401 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Successfully logged in", user: instituteData, token: token },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
