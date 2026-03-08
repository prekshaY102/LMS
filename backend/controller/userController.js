import uploadOnCloudinary from "../config/cloudinary.js"
import User from "../model/userModel.js"


export const getCurrentUser = async (req, res) => {
    try {

        // Find user by ID and exclude password field
        const user = await User.findById(req.userId).select("-password")   
        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`GetCurrent User error ${error}`})
    }
}


export const updateProfile = async (req, res) => {
    try {
        const userId = req.userId
        const{description, name} = req.body
        let photoUrl = ""
        if(req.file){
            // Upload photo to cloudinary and get URL
            photoUrl = await uploadOnCloudinary(req.file.path)
        }
        const user = await User.findByIdAndUpdate(userId, {
            name,
            description,
            photoUrl
        })
         if(!user){
            return res.status(404).json({message:"User Not Found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`Update Profile error ${error}`})
    }
}