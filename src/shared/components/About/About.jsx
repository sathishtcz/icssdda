import React from 'react'
import { FiGlobe } from 'react-icons/fi';
import { IoSearchSharp } from 'react-icons/io5';
import { TbArrowsExchange } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function About() {


  return (
    <div>
      <div className='mt-22'>
        <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>About the Conference</h1>
        <div className='flex gap-2 justify-center'>
          <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
          /
          <p className="lg:text-[16px] text-[15px]  inter-medium">About the Conference</p>
        </div>
      </div>

      <div className="md:mt-10 mt-1">
        <div className="max-w-[1537px] mx-auto px-4 ">
          <div className="grid lg:grid-cols-2 gap-5 place-items-center">
            <div>
              <div className='flex items-center'>
                <div className='lg:block hidden '>
                  <img src="/assets/images/About.png" alt="Hero image" className='xl:w-[510px] 2xl:w-[600px] w-[500px] mx-auto transition-all duration-300 ' />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#F3E9DC] rounded-full px-3 py-2 w-fit">
                <p className="text-[16px] text-[#C75D2C] inter-bold">About the Conference</p>
              </div>
              <p className="md:text-3xl text-xl font-semibold text-gray-900  lg:leading-[40px] leading-tight md:max-w-[39rem] mt-4 mb-5">A Global Forum for Software Development and Data Insights</p>
              <div className='flex justify-center items-center lg:mb-0 mb-7'>
                <div className='lg:hidden block '>
                  <img src="/assets/images/About.png" alt="Hero image" className='xl:w-[510px] 2xl:w-[600px] w-[450px] mx-auto transition-all duration-300 ' />
                </div>
              </div>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify">ICSSDDA is a global forum that brings together researchers, academicians, industry professionals, and innovators to discuss the latest advancements and practical applications in software engineering, systems development, and data analytics. The Selective accepted papers of our International Conference on Software Systems Development and Data Analysis will be recommended to publish in the indexed Journals.</p>
              <div className="space-y-7 mt-8">
                <div className="flex gap-4 items-center hover:bg-[#F3E9DC] hover:px-7 hover:py-6  rounded-3xl duration-300">
                  <div className="bg-[#F3E9DC] p-2 rounded-full flex-shrink-0">
                    <img src="/assets/images/icon.png" alt="icon" className='lg:w-9 w-5 ' />
                  </div>
                  <div className="flex flex-col  ">
                    <p className="inter-semibold text-lg text-black">Software Systems Development</p>
                    <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-[30px] text-justify">Modern methods, agile practices, and scalable architectures.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center  hover:bg-[#F3E9DC] hover:px-7 hover:py-6  rounded-3xl duration-400">
                  <div className="bg-[#F3E9DC]  p-2 duration-300 rounded-full flex-shrink-0">
                    <img src="/assets/images/icon.png" alt="icon" className='lg:w-9 w-5 ' />
                  </div>
                  <div className="flex flex-col  ">
                    <p className="inter-semibold text-lg text-black">Data Analysis</p>
                    <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-[30px] text-justify">AI-driven insights, predictive modeling, and real-world applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto px-4 md:mt-12 mt-10'>
        <div className="flex justify-between items-center gap-4">
          <p className="md:text-3xl text-xl font-semibold text-[#C75D2C] ">Why ICSSDDA 2025</p>
          <p className="bg-[#C75D2C]  h-1 w-20 rounded-xl flex-grow "></p>
        </div>
        <div className="space-y-8 mt-8">
          {[
            {
              icon: <TbArrowsExchange className='text-white  text-3xl' />,
              title: "A Global Knowledge Exchange",
              description: "ICSSDDA 2025 is more than just a conference—it is a convergence of ideas, innovation, and expertise from every corner of the world. By bringing together leading researchers, academicians, industry professionals, and innovators, the event creates a vibrant hub for knowledge sharing, dialogue, and collaboration."
            },
            {
              icon: <IoSearchSharp className='text-white  text-3xl' />,
              title: "Platform for Innovation & Research",
              description: "The conference acts as a premier stage to showcase groundbreaking research, pioneering methodologies, and transformative technologies. From conceptual frameworks to real-world applications, participants can highlight their original contributions to the global community. This visibility not only leads to recognition and citations but also enables constructive feedback, idea refinement, and collaboration opportunities that can elevate the quality and impact of their work."
            },
            {
              icon: <FiGlobe className='text-white  text-3xl' />,
              title: "Networking & Collaboration Opportunities",
              description: "ICSSDDA 2025 offers unparalleled opportunities to connect with peers, mentors, and global leaders in academia, research, and industry. The event encourages building professional networks that extend beyond the conference, opening doors to joint research projects, international partnerships, funding opportunities, and industrial collaborations."
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#F3E9DC] rounded-xl overflow-hidden sm:p-6 p-3"
            >
              <div className="flex items-center mb-4 ">
                <div className="bg-[#C75D2C] w-12 h-12 flex items-center justify-center  rounded-full flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-700  sm:text-base md:text-lg lg:text-[16px] text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About