import jwt from 'jsonwebtoken'

// Middleware to check authentication
const isAuth = async (req,res,next)=>{
    try {
        // Get token from cookies
        let {token} = req.cookies
    // Check if token exists
    if(!token){
        return res.status(400).json({message:"User doesn't have token"})
    }

    // Verify token using secret key
    let verifyToken = await jwt.verify(token, process.env.JWT_SECRET)

    // If token is invalid
    if(!verifyToken){
        return res.status(400).json({message:"User doesn't have token"})
    }

    // Store userId in request object
    req.userId = verifyToken.userId

    // Move to next middleware/controller
    next()
    } catch (error) {
        return res.status(500).json({message:`isAuth error ${error}`})
    }
}

export default isAuth