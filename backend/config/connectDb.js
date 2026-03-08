import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDb  = async () => {
    try {
        // Connect using environment variable URL
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected")
    } catch (error) {
        // Handle connection error
        console.log(error)
    }
}

export default connectDb