import React from 'react'
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

function ExploreCourses() {
  return (
    <div className='w-screen min-h-[50vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-4 px-7.5'>
        {/* left/top div */}
        <div className='w-full lg:w-87.5 lg:h-full h-100 flex flex-col items-start  justify-center gap-1 md:px-10 px-5'>
            <span className='text-[35px] font-semibold'>Explore</span>
            <span className='text-[35px] font-semibold'>Our Courses</span>
            <p className='text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ullam, laboriosam est quod ex enim nisi nobis porro sunt repellat alias nesciunt natus dignissimos. Nulla minima praesentium asperiores vel qui.</p>
            <button className='px-5 py-2.5 border-2 bg-black cursor-pointer border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-10'>Explore Courses
                <SiViaplay className='w-7.5 h-7.5  fill-white' />
            </button>
        </div>
        {/* right/bottom div */}
        <div className='w-180 max-w-[90%] lg:h-75 md:min-h-75 flex items-center justify-center lg:gap-15 flex-wrap mb-12.5 lg:mb-0'>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
            <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
             <div className='w-30 h-32.5 font-light text-[13px] flex flex-col gap-3 text-center'>
                <div className='w-full h-90px bg-[#fbd9fb] rounded-lg flex items-center justify-center'>
                    <TbDeviceDesktopAnalytics className='w-15 h-15 text-[#6d6c6c]' />
                </div>
                Web Development
            </div>
           
        </div>
    </div>
  )
}

export default ExploreCourses