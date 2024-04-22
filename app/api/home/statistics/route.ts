import connectDb from "@/app/lib/database/db";
import {
  domitory_summary_schema,
  teaching_plan_summary_schema,
  toppers_summary_Schema,
  user_summary,
  vehical_summary_schema,
  visitor_summary_Schema,
} from "@/app/lib/models/statistics";
import { NextRequest, NextResponse } from "next/server";
connectDb();

// common function to check http request
export const checkRequest = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return "not available for http request";
  }
};

export const create_summary_dom = async (
  req: NextRequest,
  res: NextResponse
) => {
  checkRequest(req);
  const reqBody = await req.json();
  const {
    bed_no,
    bulding_name,
    courseYear,
    degreeCode,
    floor_no,
    rom_no,
    room_type,
    section,
    type,
    userId,
    userName,
  } = reqBody;
  const newDom = await domitory_summary_schema.create({
    bed_no: bed_no,
    bulding_name: bulding_name,
    courseYear: courseYear,
    degreeCode: degreeCode,
    floor_no: floor_no,
    rom_no: rom_no,
    room_type: room_type,
    section: section,
    type: type,
    userId: userId,
    userName: userName,
  });
  console.log(`new dom building added`);
  return NextResponse.json({ success: true, message: newDom }, { status: 200 });
};
export const create_summary_teaching_plan = async (
  req: NextRequest,
  res: NextResponse
) => {
  checkRequest(req);
  try {
    const reqBody = await req.json();
    const {
      from_date,
      less_name,
      less_no,
      lesson_plan,
      no_period,
      subject,
      to_date,
    } = reqBody;
    const teachingplan = await teaching_plan_summary_schema.create({
      from_date: from_date,
      less_name: less_name,
      less_no: less_no,
      lesson_plan: lesson_plan,
      no_period: no_period,
      subject: subject,
      to_date: to_date,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
};
export const create_summary_toppers = async (
  req: NextRequest,
  res: NextResponse
) => {
  checkRequest(req);
  try {
    const reqBody = await req.json();
    const {
      courseYear,
      degreeCode,
      gender,
      grade,
      name,
      percentage,
      Rank,
      section,
      CGPA,
    } = reqBody;
    const toppers = await toppers_summary_Schema.create({
      CGPA: CGPA,
      courseYear: courseYear,
      degreeCode: degreeCode,
      gender: gender,
      grade: grade,
      name: name,
      percentage: percentage,
      Rank: Rank,
      section: section,
    });
    return NextResponse.json(
      { success: true, message: "new data entered", toppers: toppers },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: error }, { status: 500 });
  }
};
export const create_summary_users = async (
  req: NextRequest,
  res: NextResponse
) => {
  checkRequest(req);
  try {
    const reqBody = await req.json();
    const {
      branchName,
      CourseYear,
      DegreeCode,
      doms,
      Female,
      Male,
      Section,
      total_count,
      transporations,
    } = reqBody;
    const newEntry = await user_summary.create({
      branchName: branchName,
      CourseYear: CourseYear,
      DegreeCode: DegreeCode,
      doms: doms,
      Female: Female,
      Male: Male,
      Section: Section,
      total_count: total_count,
      transporations: transporations,
    });
    return NextResponse.json(
      { success: true, message: "new user entered" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: error }, { status: 500 });
  }
};
export const create_summary_vehical = async (
  req: NextRequest,
  res: NextResponse
) => {
  checkRequest(req);
  try {
    const reqBody = await req.json();
    const {
      allocated_capacity,
      available_seats,
      max_capacity,
      name,
      route_name,
      staff_count,
      student_count,
      type,
    } = reqBody;
    const newvehical = await vehical_summary_schema.create({
      allocated_capacity: allocated_capacity,
      available_seats: available_seats,
      max_capacity: max_capacity,
      name: name,
      route_name: route_name,
      staff_count: staff_count,
      student_count: student_count,
      type: type,
    });
    return NextResponse.json(
      { success: true, message: "new vehical entered" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
export const create_summary_visitors = async (
  req: NextRequest,
  res: NextResponse
) => {
  checkRequest(req);
  try {
    const reqBody = await req.json();
    const {
      courseYear,
      date,
      dept,
      meeting_purpose,
      mobile_no,
      s_no,
      section,
      userName,
      visitor_name,
    } = reqBody;
    const visitors = await visitor_summary_Schema.create({
      courseYear: courseYear,
      date: date,
      dept: dept,
      meeting_purpose: meeting_purpose,
      mobile_no: mobile_no,
      s_no: s_no,
      section: section,
      userName: userName,
      visitor_name: visitor_name,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
