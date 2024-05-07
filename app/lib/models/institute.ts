import mongoose, { Document, Schema } from "mongoose";

export interface instituteType extends Document {
  email: string;
  alternateEmail: string;
  instituteName: string;
  founderName: string;
  affiliation: string;
  shortcode: number;
  contactno: number;
  officeno: number;
  panNo: number;
  instituteLogo: string;
  address: string;
}
const institute: Schema<instituteType> = new mongoose.Schema({
  email: { type: String, required: true },
  instituteLogo: { type: String, required: true },
  alternateEmail: { type: String, required: true },
  instituteName: { type: String, required: false },
  founderName: { type: String, required: true },
  affiliation: { type: String, required: true },
  shortcode: { type: Number, required: false },
  contactno: { type: Number, required: true },
  officeno: { type: Number, required: true },
  panNo: { type: Number, required: false },
  address: { type: String, required: true },
});

const instituteCollection =
  mongoose.models.institute ||
  mongoose.model<instituteType>("institute", institute);
export default instituteCollection;
