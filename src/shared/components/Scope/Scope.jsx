import React from 'react'
import { HiOutlineDatabase } from 'react-icons/hi';
import { IoSearchSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


export default function Scope() {


  return (
    <div>
      <div className='mt-22'>
        <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Scope of the Conference</h1>
        <div className='flex gap-2 justify-center'>
          <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
          /
          <p className="lg:text-[16px] text-[15px]  inter-medium">Scope of the Conference</p>
        </div>
      </div>

      <div className="md:mt-10 mt-6">
        <div className="max-w-[1537px] mx-auto px-4 ">
          <div className="grid lg:grid-cols-2 gap-5 place-items-center">

            <div>
              <div className="bg-[#F3E9DC] rounded-full px-3 py-2 w-fit">
                <p className="text-[16px] text-[#C75D2C] inter-bold">Scope of the Conference</p>
              </div>
              <p className="md:text-3xl text-xl font-semibold text-gray-900  lg:leading-[40px] leading-tight md:max-w-[39rem] mt-4 mb-5">Advancing Software Systems and Data-Driven Solutions</p>
              <div className='flex justify-center items-center lg:mb-0 mb-7'>
                <div className='lg:hidden block '>
                  <img src="/assets/images/Scope.png" alt="Hero image" className='xl:w-[510px] 2xl:w-[600px] w-[450px] mx-auto transition-all duration-300 ' />
                </div>
              </div>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify">ICSSDDA covers a wide range of domains that define the future of digital innovation. It serves as a platform to discuss new methodologies, frameworks, and technologies that advance software development and data-driven decision-making across industries.</p>
              <div className="space-y-7 mt-8">
                <div className="flex gap-4 items-center hover:bg-[#F3E9DC] hover:px-7 hover:py-6  rounded-3xl duration-300">
                  <div className="bg-[#F3E9DC] p-2 rounded-full flex-shrink-0">
                    <img src="/assets/images/icon.png" alt="icon" className='lg:w-9 w-5 ' />
                  </div>
                  <div className="flex flex-col  ">
                    <p className="inter-semibold text-lg text-black">Cloud & Distributed Systems</p>
                    <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-[30px] text-justify">Cloud-native solutions, microservices, and distributed computing models.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center  hover:bg-[#F3E9DC] hover:px-7 hover:py-6  rounded-3xl duration-400">
                  <div className="bg-[#F3E9DC]  p-2 duration-300 rounded-full flex-shrink-0">
                    <img src="/assets/images/icon.png" alt="icon" className='lg:w-9 w-5 ' />
                  </div>
                  <div className="flex flex-col  ">
                    <p className="inter-semibold text-lg text-black">Intelligent Systems & Applications</p>
                    <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-[30px] text-justify">Smart systems, IoT, automation, and real-time data processing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='flex items-center'>
                <div className='lg:block hidden '>
                  <img src="/assets/images/Scope.png" alt="Hero image" className='xl:w-[510px] 2xl:w-[600px] w-[500px] mx-auto transition-all duration-300 ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto px-4 md:mt-12 mt-10'>
        <div className="flex justify-between items-center gap-4">
          <p className="md:text-3xl text-xl font-semibold text-[#C75D2C] ">Key  Highlights</p>
          <p className="bg-[#C75D2C]  h-1 w-20 rounded-xl flex-grow "></p>
        </div>
        <div className="space-y-8 mt-8">
          {[
            {
              icon: <IoSearchSharp className='text-white  text-3xl' />,
              title: "Research in Software Systems",
              description: "The conference seeks to promote novel approaches, frameworks, and tools that enhance the design, development, testing, deployment, and maintenance of software systems. Emphasis will be placed on scalable architectures, secure systems, agile methodologies, and cloud-native solutions that address the needs of modern industries and society."
            },
            {
              icon: <HiOutlineDatabase  className='text-white  text-3xl' />,
              title: "Promoting Data-Driven",
              description: "With the growing importance of big data, analytics, and artificial intelligence, ICSSDDA 2025 encourages contributions that focus on data-driven insights and applications. Topics include advanced machine learning algorithms, deep learning, natural language processing, predictive analytics, and their applications in diverse sectors such as healthcare, finance, smart cities, and e-governance."
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

