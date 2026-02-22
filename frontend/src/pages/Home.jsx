import React from 'react'
import Nav from '../component/Nav'
import home from '../assets/home3.png'
import { SiViaplay } from "react-icons/si";
import ai from "../assets/ai.png"
import ai1 from "../assets/SearchAi.png"
import Logos from '../component/Logos';
import ExploreCourses from '../component/ExploreCourses'
function Home() {
  return (
    <div className='w-full overflow-hidden'>
      <div className='w-full lg:h-[140vh] h-[70vh] relative'>
        <Nav/>
        <img src={home} alt='home' className='object-cover md:project-fill w-full lg:h-full h-[50vh]'/>

        <span className='lg:text-[70px] absolute md:text-[40px] lg:top-[10%] top-[15%] w-full 
         flex items-center justify-center text-black font-bold text-[20px]'>Grow Your Skills to Advance</span>
         <span className='lg:text-[70px] text-[20px] md:text-[40px] absolute lg:top-[20%] w-full flex items-center
         justify-center text-black font-bold'>Your Career Path</span>
         <div className='absolute lg:top-[30%] top-[75%] md:top-[80%] w-full flex items-center justify-center gap-3 flex-wrap'>
          <button className='px-5 py-2.5 border-2 lg:border-black border-white lg:text-black text-white rounded-[10px] text-[18px]
           font-light flex gap-2 cursor-pointer'>View All Courses <SiViaplay className='w-7.5 h-7.5 lg:fill-black fill-white' /></button>
          <button className='px-5 py-2.5 border-2 border-black lg:bg-white bg-black lg:text-black text-white rounded-[10px]
           text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center'> Search <img src={ai}  className='w-7.5 h-7.5 rounded-full hidden lg:block' alt='serchimg'/>
           <img src={ai1} className='w-8.75 h-87.5 rounded-full lg:hidden' alt='serchimg' /></button>
         </div>
        
      </div>
       <Logos/>
       <ExploreCourses/>
    </div>
  )
}

export default Home