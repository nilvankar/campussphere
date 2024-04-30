import mongoose, { Document, Schema } from "mongoose";

export interface batchType extends Document {
  academicDegree: string;
  degree: string;
  degreeGroup: string;
  medium: string;
  frombatch: string;
  tobatch: string;
  managedDepartment: string;
}
const batchSchema: Schema<batchType> = new mongoose.Schema({
  academicDegree: { type: String, required: true, enum: ["UG", "PG"] },
  degree: { type: String, required: true },
  degreeGroup: { type: String, required: true },
  medium: { type: String, required: true },
  frombatch: { type: String, required: true },
  tobatch: { type: String, required: true },
  managedDepartment: { type: String, required: true },
});
export const batchModel =
  mongoose.models.batchSchema ||
  mongoose.model<batchType>("batch", batchSchema);
export interface subjectType extends Document {
  sno: number;
  subjectName: string;
  subjectCode: string;
  electiveName: string;
  subjectGroup: string;
}
const subjectManagement: Schema<subjectType> = new mongoose.Schema({
  sno: { type: Number, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
  electiveName: {
    type: String,
    required: true,
    enum: ["Elective", "Non-Elective"],
  },
  subjectGroup: { type: String, required: true, enum: ["Theory", "Practicle"] },
});

export interface sectionType extends Document {}
const sectionSchema = new mongoose.Schema({
  section: { type: String, required: true },
  degreeCode: { type: String, required: true },
  courseYear: { type: String, required: true },
  maxStrength: { type: String, required: true },
  primaryFaculty: { type: String, required: true },
  secondaryFaculty: { type: String, required: true },
});
