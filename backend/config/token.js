import jwt from "jsonwebtoken"

// Function to generate JWT token
 const genToken = async (userId) => {
    try {

        // Create token with userId and secret key (valid for 1 day)
        const token = await jwt.sign({userId},process.env.JWT_SECRET, {expiresIn:"1d"})
        return token
        
    } catch (error) {
        console.log(error)
    }
 }

 export default genToken