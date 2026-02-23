import User from "../model/userModel.js"
import validator from "validator"
import bcrypt from 'bcryptjs'
import genToken from "../config/token.js"
import sendMail from "../config/sendMail.js"

//  SIGNUP 
export const signUp = async (req,res) => {
    try {
        // Get user data from request body
        const {name, email, password, role} = req.body

        // Check if user already exists
        let existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User is alredy exist"})
        }
        
        //email validation
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter valid email"})
        }
        //password strength checking
        if(password.length < 8){
            return res.status(400).json({message:"Enter Strong Password"})
        }

        // Hash password before saving
        let hashPassword = await  bcrypt.hash(password,10)

        // Create new user in database
        const user = await User.create({
            name,
            email,
            password:hashPassword,
            role
        })

        // Generate JWT token
        let token = await genToken(user._id)
        //Store token in cookie
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message:`Signup error ${error}`})
    }
}

//  LOGIN 
export const login = async (req, res) => {
    try {
        // Get login data
        const {email, password} = req.body

        // Check if user exists
        let user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }

        // Compare entered password with hashed password
        let isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password"})
        }

        // Generate JWT token
        let token = await genToken(user._id)
        // Store token in cookie
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`Login error ${error}`})
    }
}

//  LOGOUT 
export const logOut = async (req, res) => {
    try {
        // Clear token cookie
        await res.clearCookie("token")
        return res.status(200).json({message:"Logout Successfully"})
    } catch (error) {
        return res.status(500).json({message:`Logout error ${error}`})
    }
}


// SEND OTP
export const sendOTP = async (req,res)=>{
    try {
        // Get email from request body
        const {email}= req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }

        // Generate 4-digit random OTP
        const otp = Math.floor(1000 + Math.random()* 9000).toString()

        // Save OTP and expiry time in database
        user.resetOtp = otp,
        user.otpExpires = Date.now() + 1 * 60 * 1000,
        user.isOtpVerified = false

        //updates user documnet
        await user.save()

        // Send OTP to user's email
        await sendMail(email, otp)

        return res.status(200).json({message:"OTP Send Successfully!"})

    } catch (error) {
        return res.status(500).json({message:`OTP erroe${error}`})
    }
}


//VERIFY OTP
export const verifyOTP = async (req,res) => {
    try {
         // Extract email and OTP from request body
        const {email,otp} = req.body
        const user = await User.findOne({email})
        if(!user || user.resetOtp != otp || user.otpExpires < Date.now()){
            return res.status(404).json({message:"Invalid OTP"})
        }

       
        user.isOtpVerified = true,    // Mark OTP as verified
        user.resetOtp = undefined,   // Clear OTP fields after successful verification
        user.otpExpires = undefined
        
        await user.save()

        return res.status(200).json({message:"OTP Verified Successfully!"})
       } catch (error) {
        return res.status(500).json({message:`Verify OTP error${error}`})
    }
}


//  RESET PASSWORD 
export const resetPassword = async (req, res) => {
    try {
        // Get email and new password
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user || !user.isOtpVerified ){
            return res.status(404).json({message:"OTP Verification is Required"})
        }
        
        const hashPassword = await bcrypt.hash(password, 10)  // Hash new password
        user.password = hashPassword,    // Update password in database
        user.isOtpVerified = false       // Reset OTP verification flag
        
        await user.save()
        return res.status(200).json({message:"Reset Password Successfully!"})
    } catch (error) {
        return res.status(404).json({message:"Reser Password Error"})
    }
}