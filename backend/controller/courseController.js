import uploadOnCloudinary from "../config/cloudinary.js"
import Course from "../model/courseModel.js"
import Lecture from "../model/lectureModel.js"


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


//Get all published courses
export const getPublishedCourses = async (req,res) => {
    try {

        // Find all courses where isPublished = true
        const courses = await Course.find({isPublished:true})
        if(!courses){
            return res.status(400).json({message:"No published courses found"})
        }
        return res.status(200).json({courses})
    } catch (error) {
        res.status(500).json({message:`Error fetching published courses ${error}`})
    }
}

// GET COURSES CREATED BY CURRENT USER
export const getCreatorCourses = async (req,res) => {
    try {

        // Get logged-in user's ID
        const userId = req.userId

        // Find courses where creator = logged in user
        const courses = await Course.find({creator:userId})
        if(!courses){
            return res.status(400).json({message:"No courses found for this creator"})
        }
        return res.status(200).json({courses})
    } catch (error) {
        return res.status(500).json({message:`Error fetching creator courses ${error}`})
    }
}

// EDIT COURSE DETAILS
export const editCourse = async (req,res) => {
    try {

        // Get courseId from URL params
        const {courseId} = req.params
        // Get updated course data from request body
        const {title,subTitle ,description, category, level,isPublished ,price} = req.body
        let thumbnail
        // If thumbnail image is uploaded
        if(req.file){
            thumbnail = await uploadOnCloudinary(req.file.path)
        }

        // Find course by ID
        let course = await Course.findById(courseId)
        if(!course){
            return res.status(400).json({message:"Course not found"})
        }

        // Prepare updated data object
        const updateData =  {
                title,
                subTitle,
                description,
                category,
                level,
                isPublished,
                price,
                thumbnail }

                // Update course in database
            course = await Course.findByIdAndUpdate(courseId, updateData, {new:true})
        
        res.status(200).json({course:course})
    } catch (error) {
        res.status(500).json({message:`Error editing course ${error}`})
    }
}

// GET COURSE BY ID
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

// DELETE COURSE
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



//LECTURE CONTROLLERS 

// CREATE LECTURE
export const createLecture = async (req,res) => {
    try {
        const {lectureTitle} = req.body
        const {courseId} = req.params

        // Validate lecture title
        if(lectureTitle || courseId){
            return res.status(400).json({message:"lectureTitle is required"})
        }

        // Create lecture document
        const lecture = await Lecture.create({lectureTitle})
        
        // Find the course and add lecture to its lectures array
        const course = await Course.findById({courseId})
        if(!course){
            course.lectures.push(lecture._id)
        }

        // Populate lectures field
        await course.populate("lectures")
        await course.save()

        return res.status(201).json({lecture , course})
    } catch (error) {
        return res.status(500).json({message:`Error creating course ${error}`})
    }
}

// GET LECTURES OF A COURSE
export const getCourseLecture = async (req,res) => {
    try {
        const {courseId} = req.params
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }

        // Populate lectures array
        await course.populate(lectures)
        await course.save()

        return res.status(201).json(course)
    } catch (error) {
        return res.status(500).json({message:`Error getting course lecture ${error}`})
    }
}


// EDIT LECTURE
export const editLecture = async (req,res)=>{
    try {
        const {lectureId} = req.params
        const {isPreviewFree , lectureTitle} = req.body
        const lecture = await Lecture.findById(lectureId)
        if(!lecture){
            return res.status(404).json({message:"Lecture not found"})
        }
        let videoUrl
        // Upload video if file exists
        if(req.file){
            videoUrl = await uploadOnCloudinary(req.file.path)
            lecture.videoUrl = videoUrl

        }
        // Update lecture title
        if(lectureTitle){
            lecture.lectureTitle = lectureTitle

        }
        // Update preview status
        lecture.isPreviewFree = isPreviewFree

        await lecture.save()
        return res.status(200).json(lecture)
    } catch (error) {
        return res.status(500).json({message:`Error editting lecture ${error}`})
        
    }
}

// DELETE LECTURE
export const removeLecture = async (req,res) =>{
    try {
        const {lectureId} = req.params
        const lecture = await Lecture.findByIdAndDelete(lectureId)
        if(!lecture){
                return res.status(404).json({message:`Lecture not found ${error}`})

        }
        await Course.updateOne(
            {lectures:lectureId},
            {$pull:{lectures:lectureId}}
        )
        return res.status(200).json({message:"Lecture removed"})
    } catch (error) {
        return res.status(500).json({message:`Error removing lecture ${error}`})
    }
}