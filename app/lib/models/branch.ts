import mongoose, { Document, Schema } from "mongoose";
import { branchType, qualificationAdminType, yearOfExperience } from "../types/schema";

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

 const adminQualification:Schema<qualificationAdminType> = new mongoose.Schema({
  qualification: { type: String, required: true },
  university: { type: String, required: true },
  instituteName: { type: String, required: true },
  yearOfPassing: { type: String, required: true },
  marksheet: { type: String, required: true },
});

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
export const yearOfExperienceModel=mongoose.models.yearOfExperience||mongoose.model('yearOfExperience',yearOfExperienceSchema)

const branchModel =
  mongoose.models.branch || mongoose.model<branchType>("branch", branch);
export default branchModel;
