import React from 'react'
import logo from '../assets/logo2.jpg'
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const {userData} = useSelector(state=>state.user)
    const navigate = useNavigate()
  return (
    <div className='w-[100%] h=[70px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#3e134547] z-10'>
        <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'>
            <img src={logo} alt='logo' className='w-[60px] rounded-[5px] border-2 border-black cursor-pointer'/>
        </div>
        <div className='w-[30%] lg:flex items-center justify-center gap-4'>
            <IoPersonCircle className='w-[50px] h-[50px] fill-[black] cursor-pointer' />
             {userData?.role === "educator" && <div className='px-[20px] py-[10px] border-2 lg:border-white border-black lg:text-white bg-[black] text-black
             rounded-[10px] text-[18px] font-light  cursor-pointer'>Dashboard</div>}
             {!userData ? <span className='px-[20px] py-[10px] border-2 border-white text-white rounded-[10px] text-[18px]
             font-light cursor-pointer bg-[#2f062cd5]' onClick={()=>navigate("/login")}>Login</span>:
             <span className='px-[20px] py-[10px] bg-white text-black rounded-[10px] shadow-sm shadow-black text-[18px]
             cursor-pointer'>Logout</span>}
        </div>
    </div>
  )
}

export default Nav
