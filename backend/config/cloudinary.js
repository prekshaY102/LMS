import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

// upload file to cloudinary and return the secure url, also delete the file from server after uploading
const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if(!filePath){
            return null
        }

        // Upload file to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(filePath,{resource_type:"auto"})
        fs.unlinkSync(filePath) // Delete file from server after uploading to cloudinary

        return uploadResult.secure_url    // Return secure URL of uploaded file
    } catch (error) {
        fs.unlinkSync(filePath) // Delete file from server if upload fails
        console.log("Cloudinary upload error",error)
    }
}

export default uploadOnCloudinary