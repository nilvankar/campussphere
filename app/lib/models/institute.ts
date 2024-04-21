import mongoose from "mongoose";
const instituteSchema=new mongoose.Schema({
    instituteName:{type:String,required:true},
    founderName:{type:String,required:true},
    affiliation:{type:String,required:true},
    shortCode:{type:String,required:false},
    email:{type:String,required:true},
    alteranteEmail:{type:String,required:false},
    contactNumber:{type:Number,required:true},
    officeNumber:{type:Number,required:false},
    panNumber:{type:Number,required:false},
    address:{type:Number,required:true},
    logo:{type:String,required:true},
    anyBranch:{type:Boolean,required:true},
    noOfBranch:{type:Number,required:true}    
})
const institute=mongoose.model('institute',instituteSchema);
export default institute