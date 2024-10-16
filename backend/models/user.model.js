import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
        match:/^\+?\d{1,15}$/
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        required:true,
    },
    profile:{
        bio:{type:String},
        skills:[{type:Array}],
        resume:{type:String},   // URL to resume profile
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:"company"},
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true})
export default User=mongoose.model("User",userSchema);