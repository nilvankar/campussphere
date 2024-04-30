import mongoose, { Document, Schema } from "mongoose";
export interface userType extends Document {
  fullName: string;
  instituteName: string;
  email: string;
  role: string;
  password: string;
}
const userSchema: Schema<userType> = new mongoose.Schema({
  fullName: { type: String, required: true },
  instituteName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: [
      "Staff or Faculty",
      "Student or Parent",
      "Director",
      "Principal",
      "Other",
    ],
  },
});

const User =
  mongoose.models.User || mongoose.model<userType>("User", userSchema);
export default User;
