import mongoose, { Document, Schema } from "mongoose";

export interface adminType extends Document {
  firstName: string;
  lastName: string;
  middleName: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  branchName: string;
  email: string;
  alternateEmail: string;
  landLineNumber: number;
  adharNo: number;
  panNo: number;
  joiningData: string;
  salary: number;
  address: string;
  profilePhoto: string;
  contactNo: number;
  jobDesignation: string;
}
const adminSchema: Schema<adminType> = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: true },
  dob: { type: String, required: true },
  branchName: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  maritalStatus: {
    type: String,
    required: true,
    enum: ["Married", "UnMarried"],
  },
  email: { type: String, required: true },
  alternateEmail: { type: String, required: false },
  landLineNumber: { type: Number, required: true },
  adharNo: { type: Number, required: false },
  panNo: { type: Number, required: false },
  joiningData: { type: String, required: true },
  salary: { type: Number, required: true },
  address: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  contactNo: { type: Number, required: true },
  jobDesignation: { type: String, required: true },
});

const admin =
  mongoose.models.admin || mongoose.model<adminType>("admin", adminSchema);
export default admin;
