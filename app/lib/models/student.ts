import mongoose from "mongoose";
const studentAdmissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  maritalStatus: {
    type: String,
    required: true,
    enum: ["Married", "Unmarried"],
  },
  email: { type: String, required: true },
  nationality: { type: String, required: true },
  ethnicity: { type: String, required: false },
  bloodGroup: { type: String, required: true },
  religion: { type: String, required: false },
  cast: { type: String, required: false },
  alternateEmail: { type: String, required: false },
  residentialNo: { type: String, required: true },
  adharNo: { type: Number, required: false },
  panNo: { type: Number, required: false },
  address: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  isOrhpan:{type:Boolean,required:true},
  isDisable:{type:Boolean,required:true},
  firstLanguage:{type:String,required:true},
  secondLanguage:{type:String,required:true},
  mobile:{type:Number,required:true},
});
const student = mongoose.model("student", studentAdmissionSchema);
export default student;
