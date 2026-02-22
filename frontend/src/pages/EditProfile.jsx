import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.png';

function EditProfile() {
    const navigate = useNavigate();
    
  return (
        // Main container (Full screen height, center content, light gray background)
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10'>
        {/* Card container */}
        <div className='bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full relative'>
        {/* Back button (top-left corner) */}
        <FaArrowLeft  className='absolute top-[5%] left-[5%] w-5.5 h-5.5 cursor-pointer' onClick={()=>navigate("/profile")}/>
            {/* Form starts here */}
        <form className='space-y-5'>
            {/* Page Heading */}
            <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Edit Profile</h2>
            {/* Profile Image Section */}
            <div className='flex flex-col items-center text-center'>
             <img src={profile} className='w-24 h-24 rounded-full object-cover border-4 border-[black]' alt=''/>
            </div>
            <div >
                {/* Label for image upload */}
                <label htmlFor='image' className='text-sm font-medium text-gray-700'>Select Avatar :</label>
                {/* File input to upload new image */}
                <input id='image' type='file' name="photourl" placeholder='photourl' 
                accept="image/*" className='w-full px-4 py-2 border rounded-md text-sm'/>
            </div>
                 {/* Username Field */}
            <div >
                <label htmlFor='name' className='text-sm font-medium text-gray-700'>Username:</label>
                <input id='name' type='text'  placeholder='enter username' 
                 className='w-full px-4 py-2 border rounded-md text-sm' required/>
            </div>
             {/* Email Field (Read Only) */}
            <div >
                <label  className='text-sm font-medium text-gray-700'>Email:</label>
                <input readOnly type='text'  placeholder='dhvani@mail.com' 
                 className='w-full px-4 py-2 border rounded-md text-sm' />
            </div> 
          {/* Bio Section */}
            <div >
                <label htmlFor='Description' className='text-sm font-medium text-gray-700'>Bio:</label>
                <textarea name='Description' rows={3} placeholder='tell us about yourself'
                 className='w-full mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-black' />
            </div>
            <button className='w-full bg-[#3b2c81] active:bg-[#454545] text-white py-2 rounded-md font-medium transition cursor-pointer'>Save Changes</button>
        </form>
        </div>
    </div>
  )
}

export default EditProfile