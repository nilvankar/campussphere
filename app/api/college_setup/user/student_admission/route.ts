import connectDb from "@/app/lib/database/db";
import student from "@/app/lib/models/student";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export const POST = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    const reqBody = await req.json();
    const {
      firstLanguage,
      firstName,
      lastName,
      ethnicity,
      gender,
      adharNo,
      alternateEmail,
      bloodGroup,
      cast,
      middleName,
      dob,
      email,
      maritalStatus,
      isDisable,
      isOrhpan,
      address,
      residentialNo,
      secondLanguage,
      religion,
      nationality,
      panNo,
      profilePhoto,
      mobile,
    } = reqBody;
    try {
      const checkAlreadyExists = await student.findOne({email});
      if (checkAlreadyExists) {
        return NextResponse.json(
          { success: false, message: "already exists" },
          { status: 400 }
        );
      }
      const newStudent = await student.create({
        address: address,
        adharNo: adharNo,
        alternateEmail: alternateEmail,
        bloodGroup: bloodGroup,
        cast: cast,
        dob: dob,
        email: email,
        ethnicity: ethnicity,
        firstLanguage: firstLanguage,
        firstName: firstName,
        gender: gender,
        isDisable: isDisable,
        isOrhpan: isOrhpan,
        lastName: lastName,
        maritalStatus: maritalStatus,
        middleName: middleName,
        mobile: mobile,
        nationality: nationality,
        panNo: panNo,
        profilePhoto: profilePhoto,
        religion: religion,
        residentialNo: residentialNo,
        secondLanguage: secondLanguage,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Student Enrolled Successfully",
          student: newStudent,
        },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, message: error },
        { status: 500 }
      );
    }
  }
};
