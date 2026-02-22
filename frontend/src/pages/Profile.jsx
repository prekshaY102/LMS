import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import profile from '../assets/profile.png'

function Profile() {
  const navigate = useNavigate()
  return (
    // Full screen container with center alignment
    <div className='min-h-screen bg-gray-100 px-4 py-10  flex items-center justify-center '>
      <div className='bg-white shadow-lg rounded-2xl p-8 mx-w-xl w-full md:w-[35%] relative'>
        <FaArrowLeft  className='absolute top-[8%] left-[5%] w-5.5 h-5.5 cursor-pointer' onClick={()=>navigate("/")}/>
        <div className='flex flex-col items-center text-center'>
          <img src={profile} className='w-24 h-24 rounded-full object-cover border-4 border-[black]' alt=''/>
           <h2 className='text-2xl font-bold mt-4 text-gray-800'>
             priya shah
          </h2>
          <p className='text-sm text-gray-500'>Educator </p>
        </div>
        <div className='mt-6 space-y-4'>
          <div className='text-sm flex items-center justify-start gap-1'>
            <span className='font-semibold text-gray-700'>Email:</span>
            <span>Enter the email</span>
          </div>
          <div className='text-sm flex items-center justify-start gap-1'>
            <span className='font-semibold text-gray-700'>Bio:</span>
            <span>Enter the bio</span>
          </div>
          <div className='text-sm flex items-center justify-start gap-1'>
            <span className='font-semibold text-gray-700'>Enrolled Courses:</span>
            <span>0</span>
          </div>  
        </div>
         <div className='mt-6 flex justify-center gap-4'>
          <button className='px-5 py-2 rounded bg-[#3b2c81] text-white active:bg-[#4b4b4b] cursor-pointer transition' onClick={()=>navigate("/editprofile")}>Edit Profile</button>
          </div> 
      </div>
    </div>
  )
}

export default Profile