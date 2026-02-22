import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../App'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'

function ForgetPassword() {
    // Step control (1 = email, 2 = otp, 3 = reset password)
    const[step, setStep]= useState(3)
    const navigate = useNavigate()
    // Form states
    const[email, setEmail] = useState("")
    const[otp,setOtp] = useState("")
    const[newPassword,setNewPassword] = useState("")
    const[conPassword,setConPassword] = useState("")
    // Loading spinner state
    const[loading,setLoading] = useState(false)
    
  // =========================
  // 🔹 STEP 1 – SEND OTP
  // =========================
  const sendOtp = async () =>{
        setLoading(true)// start loading spinner
        try {
            // API call to send OTP
            const result = await axios.post(serverUrl + "/api/auth/sendotp" , {email}, {withCredentials: true})
            console.log(result.data)
            setStep(2)//move to step 2 (OTP page)
            setLoading(false)
            toast.success(result.data.message)// show success message
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false) // stop loading
        }
  }
  // =========================
  // 🔹 STEP 2 – VERIFY OTP
  // =========================
    const verifyOtp = async () =>{
        setLoading(true)
        try {
             // API call to verify OTP
            const result = await axios.post(serverUrl + "api/auth/verifyotp", {email,otp}, {withCredentials:true})
            onsole.log(result.data)
            setStep(3)// move to reset password step
            setLoading(false)
            toast.success(result.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

   // =========================
   // 🔹 STEP 3 – RESET PASSWORD
   // =========================

     const resetPassword = async () =>{
        // Check if password and confirm password match
        if(newPassword !== conPassword){
            toast.error("Password not matched")
            return
        }
        setLoading(true)
        try {
            // API call to reset password
            const result = await axios.post(serverUrl + "/api/auth/resetpassword", {email, password:newPassword}, {withCredentials:true})
            console.log(result.data)
            setLoading(false)
            toast.success(result.data.message)
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
        {/* step 1 */}
        {step == 1 && <div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className='text-2xl font-bold md-6 text-center text-gray-800'>Forget Your Password</h2>
            <form className='spce-y-4' onSubmit={(e)=>e.preventDefualt()}>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Enter Your email address</label>
                    <input id='email' type='text' className='mt-4 w-full px-4 py-2 border border-gray-300 rounded-md 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]' placeholder='you@example.com' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <button className=' mt-4 w-full bg-[#3b2c81] hover:bg-[#4b4b4b] text-white py-2 px- rounded-md font-medium
                 cursor-pointer' disabled={loading} onClick={sendOtp}> {loading ? <ClipLoader size={30} color='white'/> : "Send OTP"}</button>
            </form>
            <div className='text-sm text-center mt-4 cursor-pointer' onClick={()=>navigate("/login")}>Back to Login</div>
        </div>}
         {/* step 2 */}
        {step == 2 && <div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className='text-2xl font-bold md-6 text-center text-gray-800'>Enter OTP</h2>
            <form className='spce-y-4' onSubmit={(e)=>e.preventDefualt()}>
                <div>
                    <label htmlFor='otp' className='block text-sm font-medium text-gray-700'>Please enter the 4-digit code sent to your email.</label>
                    <input id='otp' type='text' className='mt-4 w-full px-4 py-2 border border-gray-300 rounded-md 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]' placeholder='* * * *' required onChange={(e)=>setOtp(e.target.value)} value={otp}/>
                </div>
                <button className=' mt-4 w-full bg-[#3b2c81] hover:bg-[#4b4b4b] text-white py-2 px- rounded-md font-medium
                 cursor-pointer' disabled={loading} onClick={verifyOtp}>{loading ? <ClipLoader size={30} color='white'/> : "Verify OTP"}</button>
            </form>
            <div className='text-sm text-center mt-4 cursor-pointer' onClick={()=>navigate("/login")}>Back to Login</div>
        </div>}
         {/* step 3 */}
        {step == 3 && <div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className='text-2xl font-bold md-6 text-center text-gray-800'>Reset Your Password</h2>
            <p className='text-sm text-gray-500 text-center mb-6'>Enter a new password below to regain access to your account.</p>
            <form className='spce-y-4' onSubmit={(e)=>e.preventDefualt}>
                <div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        New Password
                    </label>
                    <input id='password' type='text' className='mt-4 w-full px-4 py-2 border border-gray-300 rounded-md 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]' placeholder='********' required onChange={(e)=>setNewPassword(e.target.value)} value={newPassword}/>
                </div>
                <div>
                    <label htmlFor='conpassword' className='block text-sm font-medium text-gray-700'>
                        Confirm Password
                    </label>
                    <input id='conpassword' type='text' className='mt-4 w-full px-4 py-2 border border-gray-300 rounded-md 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]' placeholder='*********' required onChange={(e)=>setConPassword(e.target.value)} value={conPassword}/>
                </div>
                <button className=' mt-4 w-full bg-[#3b2c81] hover:bg-[#4b4b4b] text-white py-2 px- rounded-md font-medium
                 cursor-pointer' disabled={loading}  onClick={resetPassword}>{loading ? <ClipLoader size={30} color='white'/> : "Reset Password"}</button>
            </form>
            <div className='text-sm text-center mt-4 cursor-pointer' onClick={()=>navigate("/login")}>Back to Login</div>
        </div>}
    </div>
  )
}

export default ForgetPassword