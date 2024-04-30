import mongoose, { Schema } from "mongoose";
import { studentType } from "../types/schema";
const studentSchema: Schema<studentType> = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  email: { type: String, required: true },
  religion: { type: String, required: true },
  cast: { type: String, required: true },
  bloogGroup: { type: String, required: true },
  ethnicity: { type: String, required: true },
  nationality: { type: String, required: true },
  address: { type: String, required: true },
  alternateEmail: { type: String, required: true },
  adharNo: { type: Number, required: false },
  panNo: { type: Number, required: false },
  contactNo: { type: Number, required: false },
  firstLang: { type: String, required: true },
  secondLang: { type: String, required: true },
  identification: {
    type: String,
    required: true,
    enum: ["he/him", "she/her", "other"],
  },
});
const student =
  mongoose.models.studentSchema ||
  mongoose.model<studentType>("student", studentSchema);
export default student;
