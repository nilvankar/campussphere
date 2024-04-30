import { Document } from "mongoose";

export interface userSummarySchemaType extends Document {
  branchname: string;
  degreecode: string;
  courseyear: string;
  section: string;
  male_no: number;
  female_no: number;
  doms_no: number;
  transportation: number;
  total_count: number;
}
export interface vehicalSummarySchemaType extends Document {
  vehicalName: string;
  vehicaltype: string;
  vehicalroute: string;
  max_capacity: number;
  allocated_capacity: number;
  staff_count: number;
  student_count: number;
  available_seats: number;
}
export interface toppersSummarySchemaType extends Document {
  fullname: string;
  degreecode: string;
  courseyear: string;
  section: string;
  gender: string;
  percentage: number;
  grade: string;
  CGPA: string;
  rank: number;
}
export interface domitorySummarySchemaType extends Document {
  buldingName: string;
  domType: string;
  userId: string;
  userName: string;
  branchname: string;
  degreecode: string;
  courseyear: string;
  section: string;
  roomType: string;
  floorNO: number;
  roomNo: number;
  bedNo: number;
}
export interface teachingPlanSummarySchemaType extends Document {
  subjectName: string;
  lessNo: number;
  noPeriods: number;
  lessonName: string;
  from_Date: string;
  status: string;
  completionDate: string;
  to_date: string;
  lessonplan: string;
}
export interface visitorSummarySchemaType extends Document {
  Sno: number;
  userName: string;
  visitorName: string;
  courseyear: string;
  section: string;
  date: string;
  mobileNo: number;
  meetingPurpose: string;
}

export interface studentType extends Document {
  firstName: string;
  lastName: string;
  middleName: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  email: string;
  alternateEmail: string;
  identification: string;
  adharNo: number;
  panNo: number;
  contactNo: number;
  religion: string;
  cast: string;
  firstLang: string;
  secondLang: string;
  bloogGroup: string;
  ethnicity: string;
  nationality: string;
  address: string;
}
