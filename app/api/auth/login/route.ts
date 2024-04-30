
import User from "@/app/lib/models/user";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  if (req.method === "POST") {
    try {
      const reqBody = await req.json();
      const { email, password } = reqBody;
      const findUser = await User.findOne({ email });
      if (!findUser) {
        return NextResponse.json(
          { success: false, message: "Not exists" },
          { status: 404 }
        );
      }
      const comparePass = await compare(password, findUser.password);
      if (!comparePass) {
        return NextResponse.json(
          { success: false, message: "PASSWORD IS INCORRECT" },
          { status: 400 }
        );
      }
      const payLoad = {
        User: {
          id: User.id,
        },
      };
      const secret:string=process.env.SECRET_KEY as string
      const token =  sign(payLoad, secret, {
        algorithm: "HS256",
        expiresIn: "1h",
      });
      if(!token){
        return NextResponse.json({success:false,message:"UnAuthorized user"},{status:401})
      }
      
      return NextResponse.json(
        { success: true, message: "successfully logged in",token:token },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }
};
