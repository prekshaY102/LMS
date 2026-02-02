import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    const[step, setStep]= useState(1)
    const navigate = useNavigate()
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
        {/* step 1 */}
        {step == 1 && <div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className='text-2xl font-bold md-6 text-center text-gray-800'>Forget Your Password</h2>
            <form className='spce-y-4'>
                <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Enter Your email address</label>
                    <input id='email' type='text' className='mt-4 w-full px-4 py-2 border border-gray-300 rounded-md 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]' placeholder='you@example.com' required/>
                </div>
                <button className=' mt-4 w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px- rounded-md font-medium
                 cursor-pointer'>Send OTP</button>
            </form>
            <div className='text-sm text-center mt-4 cursor-pointer' onClick={()=>navigate("/login")}>Back to Login</div>
        </div>}
         {/* step 2 */}
        {step == 2 && <div>
            
        </div>}
         {/* step 3 */}
        {step == 3 && <div>
            
        </div>}
    </div>
  )
}

export default ForgetPassword