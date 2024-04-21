import mongoose from "mongoose";
const adminSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    middleName:{type:String,required:true},
    dob:{type:String,required:true},
    gender:{type:String,required:true,enum:["Male","Female"]},
    maritalStatus:{type:String,required:true,enum:["Married","Unmarried"]},
    email:{type:String,required:true},
    alternateEmail:{type:String,required:false},
    landLineNumber:{type:String,required:false},
    adharNo:{type:Number,required:false},
    panNo:{type:Number,required:false},
    joiningData:{type:String,required:true},
    salary:{type:Number,required:true},
    address:{type:String,required:true},
    profilePhoto:{type:String,required:true},
    contactNo:{type:Number,required:true},
    jobDesignation:{type:String,required:true}
})
const admin=mongoose.model('admin',adminSchema)
export default admin