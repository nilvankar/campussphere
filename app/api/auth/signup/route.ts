import dbConnect from "@/app/db/database";
import User, { userType } from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const reqBody = await req.json();
      const { fullName, instituteName, email, role, password } =
        reqBody;
      const salt = await genSalt(10);
      const hashPass = await hash(password, salt);
      const newUser: userType = await User.create({
        fullName: fullName,
        instituteName: instituteName,
        email: email,
        role: role,
        password: hashPass,
      });

      return NextResponse.json(
        { sccess: true, message: "Successfully signup" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
