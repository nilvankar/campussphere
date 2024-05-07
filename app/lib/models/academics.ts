import mongoose, {  Schema } from "mongoose";
import { batchType, sectionType, subjectType } from "../types/schema";

const batchSchema: Schema<batchType> = new mongoose.Schema({
  academicDegree: {
    type: String,
    required: true,
    enum: ["Bachalors", "Masters"],
  },
  degree: { type: String, required: true, enum: ["UG", "PG"] },
  degreeGroup: { type: String, required: true },
  medium: { type: String, required: true },
  frombatch: { type: Number, required: true },
  tobatch: { type: Number, required: true },
  managedDepartment: { type: String, required: true },
});

const subjectManagement: Schema<subjectType> = new mongoose.Schema({
  sno: { type: Number, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
  electiveType: {
    type: String,
    required: true,
    enum: ["Elective", "Non-Elective"],
  },
  electiveName: {
    type: String,
    required: true,
  
  },
  subjectGroup: { type: String, required: true, enum: ["Theory", "Practicle"] },
});

const sectionSchema: Schema<sectionType> = new mongoose.Schema({
  section: { type: String, required: true },
  degreeCode: { type: String, required: true },
  courseYear: { type: String, required: true },
  maxStrength: { type: Number, required: true },
  primaryFaculty: { type: String, required: true },
  secondaryFaculty: { type: String, required: true },
});

// models
export const subject =
  mongoose.models.subject ||
  mongoose.model("subject", subjectManagement);
export const section =
  mongoose.models.section || mongoose.model("section", sectionSchema);
export const batch =
  mongoose.models.batch || mongoose.model("batch", batchSchema);
