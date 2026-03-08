import mongoose from "mongoose";

//create course schema
const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subTtile:{
        type:String
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        required:true
    },
    level:{
        type:String,
        enum:["Beginner","Intermediate","Advanced"],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
    
    },
    enrolledStudents:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    lectures:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Lecture"
    }],
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]


}, {timestamp:true})

const Course = mongoose.model("Course", courseSchema)

export default Course