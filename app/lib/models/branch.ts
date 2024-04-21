import mongoose from "mongoose";

const branchSchema=new mongoose.Schema({
    branchName:{type:String,required:true},
    yearOfEstablishment:{type:String,required:true},
    registrationNumber:{type:Number,required:true},
    alias:{type:String,required:false},
    email:{type:String,required:false},
    alteranteEmail:{type:String,required:false},
    contactNo:{type:Number,required:true},
    officeNo:{type:Number,required:false},
    address:{type:Number,required:false},
    branchLogo:{type:String,required:false}
})
const branch=mongoose.model('branch',branchSchema)
export default branch