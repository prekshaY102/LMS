import express from "express"
import { createCourse, editCourse, getCourseById, getCreatorCourses, getPublishedCourses, removeCourse } from "../controller/courseController.js"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"


const courseRouter = express.Router()

courseRouter.post("/create",isAuth, createCourse)
courseRouter.get("/getpublished",isAuth,getPublishedCourses)
courseRouter.get("/getcreator", isAuth, getCreatorCourses)
courseRouter.put("/editcourse/:courseId", isAuth, upload.single("thumbnail"), editCourse)
courseRouter.get("/getcourse", isAuth, getCourseById)
courseRouter.delete("/deletecourse/:courseId", isAuth, removeCourse)


export default courseRouter