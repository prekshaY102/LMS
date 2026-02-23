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