import uploadOnCloudinary from "../config/cloudinary.js"
import Course from "../model/courseModel.js"


//create course
export const createCourse = async (req,res) => {
    try {
        const {title, category} = req.body
        if(!title || !category){
            return res.status(400).json({
                message:"Title and category are required"
            })
        }
        // Create new course in database
        const course = await Course.create({
            title,
            description,
            creator:req.userId   // userId coming from isAuth middleware
        })
        res.status(201).json({course})
    } catch (error) {
        res.status(500).json({message:`Error creating course ${error}`})
    }
}

export const getPublishedCourses = async (req,res) => {
    try {
        const courses = await Course.find({isPublished:true})
        if(!courses){
            return res.status(400).json({message:"No published courses found"})
        }
        return res.status(200).json({courses})
    } catch (error) {
        res.status(500).json({message:`Error fetching published courses ${error}`})
    }
}

export const getCreatorCourses = async (req,res) => {
    try {
        const userId = req.userId
        const courses = await Course.find({creator:userId})
        if(!courses){
            return res.status(400).json({message:"No courses found for this creator"})
        }
        return res.status(200).json({courses})
    } catch (error) {
        return res.status(500).json({message:`Error fetching creator courses ${error}`})
    }
}

export const editCourse = async (req,res) => {
    try {
        const {courseId} = req.params
        const {title,subTitle ,description, category, level,isPublished ,price} = req.body
        let thumbnail
        if(req.file){
            thumbnail = await uploadOnCloudinary(req.file.path)
        }
        let course = await Course.findById(courseId)
        if(!course){
            return res.status(400).json({message:"Course not found"})
        }
        const updateData =  {
                title,
                subTitle,
                description,
                category,
                level,
                isPublished,
                price,
                thumbnail }

            course = await Course.findByIdAndUpdate(courseId, updateData, {new:true})
        
        res.status(200).json({course:course})
    } catch (error) {
        res.status(500).json({message:`Error editing course ${error}`})
    }
}

export const getCourseById = async (req,res) => {
    try {
        const {courseId} = req.params
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(400).json({message:"Course not found"})
        }
        return res.status(200).json({course})
    } catch (error) {
        return res.status(500).json({message:`Error fetching course ${error}`})
    }
}

export const removeCourse = async (req,res) => {
    try {
        const {courseId} = req.params
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(400).json({message:"Course not found"})
        }
        course = await Course.findByIdAndDelete(courseId, {new:true})
        return res.status(200).json({message:"Course removed successfully"})
    } catch (error) {
        return res.status(500).json({message:`Error removing course ${error}`})
    }
}