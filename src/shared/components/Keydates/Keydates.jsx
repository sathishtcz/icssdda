import React from 'react'
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { LuNewspaper } from 'react-icons/lu';
import { MdDateRange,  MdOutlineNotificationsActive } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Keydates() {

  const keyDates = [
    {
      icon: <><FaRegArrowAltCircleUp  className='text-xl'/> </>,
      event: "Abstract Submission Deadline",
      date: "June 18, 2025",
      description: "Submit your research abstract for initial review and consideration.",
    },
    {
      icon: <><LuNewspaper className='text-xl' /> </>,
      event: "Full Paper Submission Deadline",
      date: "June 25, 2025",
      description: "Provide your complete research paper for detailed evaluation.",
    },
    {
      icon: <><MdOutlineNotificationsActive className='text-xl'/></>,
      event: "Notification of Acceptance",
      date: "July 1, 2025",
      description: "Receive the official confirmation of your paper's acceptance.",
    },
    {
      icon: <><LuNewspaper className='text-xl'/> </>,
      event: "Final Paper Submission",
      date: "July 10, 2025",
      description: "Submit the revised and formatted final version of your paper.",
    },
    {
      icon: <><MdDateRange  className='text-xl'/> </>,
      event: "Conference Dates",
      date: "July 21, 2025",
      description: "Join us for the presentations, discussions, and networking sessions.",
    },
  ];



  return (
    <div>
      <div className='mt-22'>
        <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Key Dates</h1>
        <div className='flex gap-2 justify-center'>
          <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
          /
          <p className="lg:text-[16px] text-[15px]  inter-medium">Key Dates</p>
        </div>
      </div>

      <div className='md:mt-10 mt-6'>
        <div className="max-w-[1537px] mx-auto px-4 ">
          <div>
            <h2 className="md:text-3xl text-xl font-bold text-gray-900  mb-4 leading-tight">
              Important Dates
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify  mb-8 ">
              Stay updated with the important deadlines for paper submission, review, registration, and participation.
            </p>
          </div>
          <div className="max-w-5xl mx-auto ">
            <div className="relative">
              {keyDates.map((item, index) => (
                <div
                  key={index}
                  className="mb-10 ml-6 relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 w-9 h-9 bg-[#C75D2C] text-white flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transform transition duration-300">
                    {item.icon}
                  </div>

                  {/* Date */}
                  <div className='bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all duration-300'>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">
                        {item.date}
                      </h3>
                      <span className="text-[#C75D2C] font-medium text-lg">
                        {item.event}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="mt-3 text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
