import mongoose, { Document, Schema } from "mongoose";
import {
  domitorySummarySchemaType,
  teachingPlanSummarySchemaType,
  toppersSummarySchemaType,
  userSummarySchemaType,
  vehicalSummarySchemaType,
  visitorSummarySchemaType,
} from "../types/schema";

const userSummarySchema: Schema<userSummarySchemaType> = new mongoose.Schema({
  branchname: { type: String, required: true },
  degreecode: { type: String, required: true },
  courseyear: { type: String, required: true },
  section: { type: String, required: true },
  male_no: { type: Number, required: true },
  female_no: { type: Number, required: true },
  doms_no: { type: Number, required: true },
  transportation: { type: Number, required: true },
  total_count: { type: Number, required: true },
});
const visitorSummarySchema: Schema<visitorSummarySchemaType> =
  new mongoose.Schema({
    Sno: { type: Number, required: true },
    userName: { type: String, required: true },
    visitorName: { type: String, required: true },
    courseyear: { type: String, required: true },
    section: { type: String, required: true },
    date: { type: String, required: true },
    mobileNo: { type: Number, required: true },
    meetingPurpose: { type: String, required: true },
  });
const toppersSummarySchema: Schema<toppersSummarySchemaType> =
  new mongoose.Schema({
    fullname: { type: String, required: true },
    degreecode: { type: String, required: true },
    courseyear: { type: String, required: true },
    section: { type: String, required: true },
    gender: { type: String, required: true },
    percentage: { type: Number, required: true },
    grade: { type: String, required: true },
    CGPA: { type: String, required: true },
    rank: { type: Number, required: true },
  });
const domitorySummarySchema: Schema<domitorySummarySchemaType> =
  new mongoose.Schema({
    buldingName: { type: String, required: true },
    domType: { type: String, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    branchname: { type: String, required: true },
    degreecode: { type: String, required: true },
    courseyear: { type: String, required: true },
    section: { type: String, required: true },
    roomType: { type: String, required: true, enum: ["AC", "Non-AC"] },
    floorNO: { type: Number, required: true },
    roomNo: { type: Number, required: true },
    bedNo: { type: Number, required: true },
  });
const teachingPlanSummarySchema: Schema<teachingPlanSummarySchemaType> =
  new mongoose.Schema({
    subjectName: { type: String, required: true },
    lessNo: { type: Number, required: true },
    noPeriods: { type: Number, required: true },
    lessonName: { type: String, required: true },
    from_Date: { type: String, required: true },
    status: { type: String, required: true },
    completionDate: { type: String, required: true },
    to_date: { type: String, required: true },
    lessonplan: { type: String, required: true },
  });
const vehicalSummarySchema: Schema<vehicalSummarySchemaType> =
  new mongoose.Schema({
    vehicalName: { type: String, required: true },
    vehicaltype: { type: String, required: true },
    vehicalroute: { type: String, required: true },
    max_capacity: { type: Number, required: true },
    allocated_capacity: { type: Number, required: true },
    staff_count: { type: Number, required: true },
    student_count: { type: Number, required: true },
    available_seats: { type: Number, required: true },
  });

export const userModel =
  mongoose.models.user_summary ||
  mongoose.model<userSummarySchemaType>("user_summary", userSummarySchema);
export const vehicalModel =
  mongoose.models.vehical_summary ||
  mongoose.model<vehicalSummarySchemaType>(
    "vehical_summary",
    vehicalSummarySchema
  );
export const visitorModel =
  mongoose.models.visitors_summary ||
  mongoose.model<visitorSummarySchemaType>(
    "visitors_summary",
    visitorSummarySchema
  );
export const teachingplan =
  mongoose.models.teaching_plan_summary ||
  mongoose.model<teachingPlanSummarySchemaType>(
    "teaching_plan_summary",
    teachingPlanSummarySchema
  );
export const toppersmodel =
  mongoose.models.toppers_summary ||
  mongoose.model<toppersSummarySchemaType>(
    "toppers_summary",
    toppersSummarySchema
  );
export const domitoryModel =
  mongoose.models.domitory_summary ||
  mongoose.model<domitorySummarySchemaType>(
    "domitory_summary",
    domitorySummarySchema
  );
