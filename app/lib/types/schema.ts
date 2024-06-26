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
export interface batchType extends Document {
  academicDegree: string;
  degree: string;
  degreeGroup: string;
  medium: string;
  frombatch: number;
  tobatch: number;
  managedDepartment: string;
}
export interface subjectType extends Document {
  sno: number;
  subjectName: string;
  subjectCode: string;
  electiveType: string;
  electiveName: string;
  subjectGroup: string;
}
export interface sectionType extends Document {
  section: string;
  degreeCode: string;
  courseYear: string;
  maxStrength: number;
  primaryFaculty: string;
  secondaryFaculty: String;
}

export interface branchType extends Document {
  branchLogo: string;
  branchName: string;
  registrationNumber: number;
  instituteName: string;
  alias: string;
  email: string;
  alteranteEmail: string;
  contactNo: string;
  officeNo: string;
  address: string;
  yearOfEstablishment: string;
}
export interface qualificationAdminType extends Document {
  qualification: string;
  university: string;
  instituteName: string;
  yearOfPassing: string;
  marksheet: string;
}
export interface yearOfExperience extends Document {
  instituteName: string;
  designation: string;
  from_date: string;
  to_date: string;
  yearofExp: number;
  startingSalary: number;
  endingSalary: number;
  attatchments: string;
}

export interface dormBuildingType extends Document {
  BuldingName: string;
  DomType: string;
  NumberofFloor: number;
  InCharge: string;
  MaximumCapacityl: number;
}

export interface roomMgmtType extends Document {
  FloorNo: number;
  RoomType: string;
  RoomNo: number;
  TotalBeds: number;
  AvailableBeds: number;
}
export interface dormTimetableType extends Document {
  DormitoryActivity: string;
  StartTime: string;
  EndTime: string;
}
export interface dormVisitorsType extends Document {
  dateOfVisit: string;
  whom: string;
  visitorName: string;
  relation: string;
  purpose: string;
  mobileNumber: number;
  checkInTime: string;
  checkOutTime: string;
}
export interface outPassType extends Document{
 Status:string
 name:string;
 phonNo:number;
 roomNO:number
}
export interface wardenType extends Document {
  wardenName: string;
}