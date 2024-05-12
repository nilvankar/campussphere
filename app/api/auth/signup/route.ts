import dbConnect from "@/app/db/database";
import User, { userType } from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";
import { createTransport } from "nodemailer";
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const reqBody = await req.json();
      const { fullName, instituteName, email, role, password } = reqBody;
      const salt = await genSalt(10);
      const hashPass = await hash(password, salt);
      const newUser: userType = await User.create({
        fullName: fullName,
        instituteName: instituteName,
        email: email,
        role: role,
        password: hashPass,
      });

      // sending mail
      const transporter = createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const malOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to Our Campussphere College ERP Platform!",
        text: `Dear ${fullName},

        We are excited to welcome you to our College ERP platform. Your account has been successfully created with the following credentials:
        
        Username: [User's Username]
        Temporary Password: [User's Temporary Password]
        To access the ERP platform, please follow these steps:
        
        Go to our ERP login page at ${process.env.LOGIN_PAGE}
        Use the above credentials to log in.
        Upon your first login, you will be prompted to change your password for security reasons.
        As a [User's Role] in our college community, you now have access to a range of features and resources tailored to support your needs. Whether you are a staff member, faculty, student, parent, director, principal, or hold another role within our institution, the ERP platform is designed to streamline communication, provide academic information, and facilitate administrative tasks.
        
        Should you encounter any issues during the login process or while using the ERP platform, please don't hesitate to reach out to our support team at [Support Email Address]. We are here to assist you and ensure a smooth experience with our system.
        
        Thank you for joining us in this digital transformation journey. We look forward to enhancing our collaboration and efficiency with the help of our College ERP.
        
        Best regards,
        
        ${fullName}
        ${role}
        ${instituteName}
        `,
      };
      transporter.sendMail(malOptions, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
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
