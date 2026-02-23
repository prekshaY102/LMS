import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config()

// Create transporter object
// Transporter is responsible for sending emails
const transporter = nodemailer.createTransport({
   
  service: "Gmail",    // Email service provider
  port: 465,   // Port 465 is used for secure connection
  secure: true, // Use true for port 465, false for port 587 STARTLS
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

//Function to send otp email
// to  = receiver email
// otp = one time password
const sendMail = async (to,otp) => {
  //send email using transpoter
    await transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: to,
    subject: "Reset Your Password",
    html: `<p> Your OTP for Password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`, // HTML version of the message
  });


}
export default sendMail

