import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { FiArrowRightCircle } from 'react-icons/fi'
import { LuCalendarClock } from 'react-icons/lu'
import { PiMapPinAreaBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <>
      <div className='max-w-[1537px]  mx-auto px-2 mt-18 mb-15'>
        <div className=' rounded-3xl border-2 border-[#C75D2C] p-3'>
          <p className="md:text-3xl text-xl font-semibold text-gray-900 mb-5">Secure Your Spot at ICSSDDA 2025</p>
          <p className='sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-[30px] text-justify mb-5'>Be part of a premier global gathering of researchers, academicians, industry experts, and innovators at the International Conference on Software Systems Development and Data Analysis. This is your opportunity to showcase your work, exchange groundbreaking ideas, and collaborate with some of the brightest minds shaping the future of technology. By joining us, you position yourself at the forefront of the latest advancements in software engineering, intelligent systems, big data analytics, AI-driven applications, and next-generation computing technologies.</p>
          <div className="flex justify-center">
            <Link to="/paper-submission">
              <button className='flex gap-2 items-center rounded-full bg-[#C75D2C] px-5 py-3 group cursor-pointer'>
                <p className="inter-medium lg:text-[16px] text-[15px] text-white">
                  Register  
                </p>
                <FiArrowRightCircle className='text-white text-2xl group-hover:rotate-45 transition-all duration-300' />
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 mx-auto gap-5 mt-5 max-w-[70rem]">
            <div className='bg-[#C75D2C] px-6 py-5 rounded-2xl'>
              <div className='flex md:flex-row flex-col gap-3 items-center'>
                <div className="bg-white p-2 rounded-full flex-shrink-0 ">
                  <FaRegCalendar className='text-[#C75D2C] text-3xl' />
                </div>
                <div className="space-y-2">
                  <p className="text-white inter-medium text-[16px] md:text-start text-center">Conference Date</p>
                  <p className="text-white inter-medium lg:text-[22px] text-[19px] md:text-start text-center">21 <sup>st</sup> July 2025</p>
                </div>
              </div>
            </div>
            <div className='bg-[#C75D2C] px-6 py-5 rounded-2xl'>
              <div className='flex md:flex-row flex-col gap-3 items-center'>
                <div className="bg-white p-2 rounded-full flex-shrink-0 ">
                  <PiMapPinAreaBold className='text-[#C75D2C] text-3xl' />
                </div>
                <div className="space-y-2">
                  <p className="text-white inter-medium text-[16px] md:text-start text-center">Location</p>
                  <p className="text-white inter-medium lg:text-[22px] text-[19px] md:text-start text-center">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className='bg-[#C75D2C] px-6 py-5 rounded-2xl'>
              <div className='flex md:flex-row flex-col gap-3 items-center'>
                <div className="bg-white p-2 rounded-full flex-shrink-0 ">
                  <LuCalendarClock className='text-[#C75D2C] text-3xl' />
                </div>
                <div className="space-y-2">
                  <p className="text-white inter-medium text-[16px] md:text-start text-center">Schedule</p>
                  <p className="text-white inter-medium lg:text-[22px] text-[19px] md:text-start text-center">9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
