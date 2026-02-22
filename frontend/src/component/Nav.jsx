import React, { useState } from 'react'
import logo from '../assets/logo2.jpg'
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../redux/userSlice';
import { toast } from 'react-toastify';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";


function Nav() {
   // Get logged-in user data from Redux store
    const {userData} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [showHam,setshowHam] = useState(false)

    const handlelogout= async () =>{
      try {
              // Call backend logout API
        const result = await axios.get(serverUrl + "api/auth/logout", {withCredential:true})
        console.log(result.data)
        // Clear user data from Redux store
        dispatch(setUserData(null))
        toast.success("logout successfully")
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
        
      }
    }
  return (
    <div className='w-full h=[70px] fixed top-0 px-5 py-2.5 flex items-center justify-between bg-[#3e134547] z-10'>
        <div className='lg:w-[20%] w-[40%] lg:pl-12.5'>
            <img src={logo} alt='logo' className='w-15 rounded-[5px] border-2 border-black cursor-pointer'/>
        </div>
        <div className='w-[30%] lg:flex items-center justify-center gap-4 hidden'>
           {!userData && <IoPersonCircle className='w-12.5 h-12.5 fill-[black] cursor-pointer' onClick={()=>setShow(prev=>!prev)}/>}
           {userData && <div className='w-12.5 h-12.5 rounded-full  text-white flex  items-center justify-center text-[20px]  border-2  bg-black border-white cursor-pointer' onClick={()=>setShow(prev=>!prev)} >
            {userData?.name.slice(0,1).toUpperCase()}
           </div>}
             {userData ?.role === "educator" && <div className='px-5 py-2.5 border-2 lg:border-white border-black lg:text-white bg-[black] text-black
             rounded-[10px] text-[18px] font-light  cursor-pointer'>Dashboard</div>}
             {!userData ? <span className='px-5 py-2.5 border-2 border-white text-white rounded-[10px] text-[18px]
             font-light cursor-pointer bg-[#2f062cd5]' onClick={()=>navigate("/login")}>Login</span>:
             <span className='px-5 py-2.5 bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px]
             cursor-pointer' onClick={handlelogout}>Logout</span>}
            
            { show && <div className='absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-white px-3.75
            py-2.5 border-2 border-black hover:border-white hover:text-white cursor-pointer hover:bg-black '>
              <span className='bg-black text-white px-7.5 py-2.5 rounded-2xl hover:bg-gray-600' onClick={()=>navigate("/profile")}>My Profile</span>
              <span className='bg-black text-white px-7.5 py-2.5 rounded-2xl hover:bg-gray-600'>My Courses</span>
            </div>}

        </div>
        <RxHamburgerMenu className='w-8.75 h-8.75 lg:hidden fill-black cursor-pointer' onClick={()=>setshowHam(prev=>!prev)}/>
        <div className={`fixed top-0  left-0 w-screen h-screen bg-[#000000de] flex items-center justify-center flex-col gap-5 z-10 lg:hidden ${showHam ? "translate-x-0 transition duration-600" : "-translate-x-full transition duration-600"}`}>
          <GiSplitCross className='w-8.75 h-8.75 fill-white absolute top-5 right-[4%]'onClick={()=>setshowHam(prev=>!prev)} />
           {!userData && <IoPersonCircle className='w-12.5 h-12.5 fill-[black] cursor-pointer' />}
           {userData && <div className='w-12.5 h-12.5 rounded-full  text-white flex  items-center justify-center text-[20px]  border-2  bg-black border-white cursor-pointer' >
            {userData?.name.slice(0,1).toUpperCase()}
           </div>}   
        </div>
    </div>
  )
}

export default Nav
