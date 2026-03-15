import Course from "../model/courseModel.js"
import Review from "../model/reviewModel.js"


export const createReview = async (req,res) =>{
    try {
        const {rating, comment, courseId} = req.body
        const userId = req.userId

        const course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
        const alreadyReviewed = await Review.findOne({course:courseId, user:userId})
        if(alreadyReviewed){
            return res.status(400).json({message:"You have already reviewed this course"})
        }
        const review = await Review.create({
            course:courseId,
            user:userId,
            rating,
            comment
        })
        await review.save()

        await course.reviews.push(review._id)
        await course.save()
        res.status(201).json({message:"Review created successfully", review})
    } catch (error) {
        res.status(500).json({message:`Internal server error Failed to create review: ${error}`}) 
    }
}

export const getReviews = async (req,res) => {
    try {
        const review = await Review.find().populate("user","course").sort({ reviewedAt: -1 })
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({message:`Internal server error Failed to get reviews: ${error}`}) 
    }
}