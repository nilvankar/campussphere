import mongoose, { Document, Schema } from "mongoose";

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
const branch: Schema<branchType> = new mongoose.Schema({
  branchLogo: { type: String, required: true },
  branchName: { type: String, required: true },
  registrationNumber: { type: Number, required: true },
  alias: { type: String, required: true },
  email: { type: String, required: true },
  alteranteEmail: { type: String, required: false },
  contactNo: { type: String, required: true },
  officeNo: { type: String, required: false },
  address: { type: String, required: true },
  instituteName: { type: String, required: true },
  yearOfEstablishment: { type: String, required: true },
});

export interface qualificationAdminType extends Document {
  qualification: string;
  university: string;
  instituteName: string;
  yearOfPassing: string;
  marksheet: string;
}
export const adminQualification = new mongoose.Schema({
  qualification: { type: String, required: true },
  university: { type: String, required: true },
  instituteName: { type: String, required: true },
  yearOfPassing: { type: String, required: true },
  marksheet: { type: String, required: true },
});
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
const yearOfExperienceSchema: Schema<yearOfExperience> = new mongoose.Schema({
  instituteName: { type: String, required: true },
  designation: { type: String, required: true },
  from_date: { type: String, required: true },
  to_date: { type: String, required: true },
  yearofExp: { type: Number, required: true },
  startingSalary: { type: Number, required: true },
  endingSalary: { type: Number, required: true },
  attatchments: { type: String, required: true },
});
const branchModel =
  mongoose.models.branch || mongoose.model<branchType>("branch", branch);
export default branchModel;
