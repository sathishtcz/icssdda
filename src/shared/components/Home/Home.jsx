import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FaLaptopCode, FaRegCalendar } from 'react-icons/fa';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { LuCalendarClock } from 'react-icons/lu';
import Marquee from 'react-fast-marquee';



function Home() {


  const imageItems = [
    { src: 'assets/images/associates/1.png', },
    { src: 'assets/images/associates/2.jpg', },
    { src: 'assets/images/associates/3.jpg', },
    { src: 'assets/images/associates/4.jpg', },
    { src: 'assets/images/associates/5.jpg', },
    { src: 'assets/images/associates/6.jpg', },
    { src: "assets/images/associates/scopus.png", },
    { src: "assets/images/associates/8.jpg", },
    { src: "assets/images/associates/9.jpg", },
    { src: "assets/images/associates/10.jpg", },
    { src: "assets/images/associates/11.jpg", },
  ];


  return (
    <div className='overflow-hidden'>
      <section className="bg-[#F3E9DC] flex items-center mx-auto lg:h-screen xl:mt-0 mt-17 relative">
        <div className='max-w-[1537px] mx-auto px-4  py-7'>
          <div className="grid lg:grid-cols-2 gap-5 justify-items-center">
            <div className='flex items-center'>
              <div className="flex flex-col gap-6 ">
                <div className="space-y-6">
                  <div className="bg-white border-2 border-[#C75D2C] px-3 py-2 rounded-full w-fit">
                    <p className='text-[#C75D2C] text-[16px] inter-bold'>ICSSDDA 2025</p>
                  </div>
                  <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[20px] inter-bold text-black max-w-[40rem] lg:leading-13 transition-all duration-300'>International Conference on Software Systems Development and Data Analysis</h1>
                </div>
                <div className='lg:hidden block'>
                  <img src="/assets/images/Heroi.png" alt="Hero image" className='w-[450px] mx-auto ' />
                </div>
                <div className="space-y-6">
                  <p className="text-black inter-medium sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify">Innovating the Future of Software Engineering and Data-Driven Insights</p>
                  <p className="sm:text-base md:text-lg lg:text-[16px] leading-relaxed lg:leading-[30px] text-justify text-gray-900">Join global experts, researchers, and professionals to explore cutting-edge advancements in software systems, data analytics, and intelligent applications. ICSSDDA 2025 is a premier platform to exchange ideas, present research, and shape the future of digital innovation.</p>
                  <div className="flex md:flex-row flex-col gap-3">
                    <Link to="/paper-submission">
                      <button className='flex gap-2 items-center rounded-full bg-[#C75D2C] px-5 py-3 group cursor-pointer'>
                        <p className="inter-medium lg:text-[16px] text-[15px] text-white">
                          Secure Your Spot
                        </p>
                        <FiArrowRightCircle className='text-white text-2xl group-hover:rotate-45 transition-all duration-300' />
                      </button>
                    </Link>
                    <div className='md:block hidden'>
                      <Link to="/contact">
                        <button className='bg-white border-2  border-[#C75D2C] rounded-full px-6 py-[10px] text-[#C75D2C] inter-semibold cursor-pointer lg:text-[16px]  text-[15px]'>Contact Us</button>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='lg:block hidden '>
                <img src="/assets/images/Heroi.png" alt="Hero image" className='xl:w-[530px] 2xl:w-[600px] w-[500px] mx-auto transition-all duration-300 ' />
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="relative max-w-[70rem] mx-auto md:p-0 p-3 transition-all duration-300   ">
        <div className='bg-[#C75D2C] border-4 border-white px-7 py-12 rounded-2xl xl:absolute   xl:-bottom-20 xl:left-[98px] shadow-[0_0_10px_rgba(0,0,0,0.2)]'>
          {/* <div className="flex md:flex-row flex-col gap-8 lg:gap-14 justify-center"> */}

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-14 justify-center">
            <div className='flex md:flex-row flex-col gap-3 items-center'>
              <div className="bg-white p-2 rounded-full flex-shrink-0 ">
                <FaRegCalendar className='text-[#C75D2C] text-3xl' />
              </div>
              <div className="space-y-2">
                <p className="text-white inter-medium text-[16px] md:text-start text-center">Conference Date</p>
                <p className="text-white inter-medium lg:text-[22px] text-[19px] md:text-start text-center">21 <sup>st</sup> July 2025</p>
              </div>
            </div>
            <div className='flex md:flex-row flex-col gap-3 items-center'>
              <div className="bg-white p-2 rounded-full flex-shrink-0 ">
                <PiMapPinAreaBold className='text-[#C75D2C] text-3xl' />
              </div>
              <div className="space-y-2">
                <p className="text-white inter-medium text-[16px] md:text-start text-center">Location</p>
                <p className="text-white inter-medium lg:text-[22px] text-[19px] md:text-start text-center">Lagos, Nigeria</p>
              </div>
            </div>
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

      {/* ABOUT */}
      <div className="max-w-[1537px] mx-auto px-4 xl:mt-40 sm:mt-18 mt-8">
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
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify">ICSSDDA is a global forum that brings together researchers, academicians, industry professionals, and innovators to discuss the latest advancements and practical applications in software engineering, systems development, and data analytics.</p>
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
            <Link to="/about" className=''>
              <button className='flex gap-2 items-center rounded-full bg-[#C75D2C] px-5 py-3 group cursor-pointer mt-8 mx-auto'>
                <p className="inter-medium lg:text-[16px] text-[15px] text-white">
                  Read More
                </p>
                <FiArrowRightCircle className='text-white text-2xl group-hover:rotate-45 transition-all duration-400' />
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Scope */}
      <div className="max-w-[1537px] mx-auto px-4 md:mt-18 mt-8">
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
            <Link to="/scope">
              <button className='flex gap-2 items-center rounded-full bg-[#C75D2C] px-5 py-3 group cursor-pointer mt-8 mx-auto'>
                <p className="inter-medium lg:text-[16px] text-[15px] text-white">
                  Read More
                </p>
                <FiArrowRightCircle className='text-white text-2xl group-hover:rotate-45 transition-all duration-400' />
              </button>
            </Link>
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


      {/* conference tracks */}
      <div className='bg-gradient-to-b from-[#C75D2C] to-[#C27107] py-12  md:mt-18 mt-8' >
        {/* <div className="max-w-[1537px] mx-auto px-6 bg-cover bg-center  bg-[url('/assets/images/pattern.png')] bg-no-repeat"  > */}
        <div className="max-w-[1537px] mx-auto px-4"  >
          <div className='md:flex justify-between items-center'>
            <div>
              <div className="bg-white rounded-full px-3 py-2 w-fit">
                <p className="text-[16px] text-[#C75D2C] inter-bold">Conference Tracks</p>
              </div>
              <p className="md:text-3xl text-xl font-semibold text-white lg:leading-[40px] leading-tight  mt-4 mb-5">Research Tracks at ICSSDDA 2025</p>
            </div>
            <Link to="/conferenceTracks" className='lg:block hidden'>
              <button className='flex gap-2 items-center rounded-full bg-white px-5 py-3 group cursor-pointer  '>
                <p className="inter-medium lg:text-[16px] text-[15px] text-black">
                  Read More
                </p>
                <FiArrowRightCircle className='text-black text-2xl group-hover:rotate-45 transition-all duration-400' />
              </button>
            </Link>
          </div>
          <p className="sm:text-base md:text-lg lg:text-[16px] text-white leading-[30px] text-justify">The International Conference on Software Systems Development and Data Analysis provides a dynamic platform for knowledge exchange, collaboration, and the dissemination of groundbreaking ideas. With technology rapidly transforming industries, the conference emphasizes the importance of bridging academic research and industry practice. Participants will engage with the latest advancements in software systems, emerging technologies, data-driven solutions, and analytical methods that are shaping the digital future.</p>

          <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3   mt-13 max-w-[80rem] gap-9 justify-items-center mx-auto'>
            <div className="bg-white p-3 w-fit rounded-xl max-w-[25rem] relative group">
              <div className='overflow-hidden rounded-xl'>
                <img src="/assets/images/tracks.png" alt="Tracks" className='rounded-xl w-[380px] group-hover:rotate-y-180 group-hover:scale-125 duration-500' />
              </div>
              <div className='relative -mt-10 z-20'>
                <div className="bg-[#C75D2C] rounded-full p-4 w-fit border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.3)] mx-auto group-hover:rotate-y-180 group-hover:bg-white group-hover:border-[#C75D2C] duration-500">
                  {/* <img src="/assets/images/trackicon1.png" alt="Trackcion " className='w-8 ' /> */}
                  <FaLaptopCode className='text-4xl text-white group-hover:text-black duration-500' />
                </div>
              </div>

              <p className="text-center inter-semibold text-xl text-black mt-3 mb-2 group-hover:text-[#C75D2C]">Software Engineering</p>
              <p className="text-[16px] text-justify text-gray-700 leading-[30px]">Innovative practices, methodologies, tools, and frameworks in modern software engineering, agile development, DevOps, and software project management..</p>
            </div>
            <div className="bg-white p-3 w-fit rounded-xl max-w-[25rem] relative group">
              <div className='overflow-hidden rounded-xl'>
                <img src="/assets/images/tracks2.png" alt="Tracks" className='rounded-xl w-[380px] group-hover:rotate-y-180 group-hover:scale-125 duration-500' />
              </div>
              <div className='relative -mt-10 z-20'>
                <div className="bg-[#C75D2C] rounded-full p-4 w-fit border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.3)] mx-auto group-hover:rotate-y-180 group-hover:bg-white group-hover:border-[#C75D2C] duration-500">
                  {/* <img src="/assets/images/trackicon1.png" alt="Trackcion " className='w-8 ' /> */}
                  <FaLaptopCode className='text-4xl text-white group-hover:text-black duration-500' />
                </div>
              </div>

              <p className="text-center inter-semibold text-xl text-black mt-3 mb-2 group-hover:text-[#C75D2C]">Data Science & Analytics</p>
              <p className="text-[16px] text-justify text-gray-700 leading-[30px]">Data-driven approaches, predictive analytics, big data infrastructure, cloud-based solutions, and advanced analytical techniques for decision-making.</p>
            </div>
            <div className="bg-white p-3 w-fit rounded-xl max-w-[25rem] relative group">
              <div className='overflow-hidden rounded-xl'>
                <img src="/assets/images/tracks6.png" alt="Tracks" className='rounded-xl w-[380px] group-hover:rotate-y-180 group-hover:scale-125 duration-500' />
              </div>
              <div className='relative -mt-10 z-20'>
                <div className="bg-[#C75D2C] rounded-full p-4 w-fit border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.3)] mx-auto group-hover:rotate-y-180 group-hover:bg-white group-hover:border-[#C75D2C] duration-500">
                  {/* <img src="/assets/images/trackicon1.png" alt="Trackcion " className='w-8 ' /> */}
                  <FaLaptopCode className='text-4xl text-white group-hover:text-black duration-500' />
                </div>
              </div>

              <p className="text-center inter-semibold text-xl text-black mt-3 mb-2 group-hover:text-[#C75D2C]">Applied Data Analysis</p>
              <p className="text-[16px] text-justify text-gray-700 leading-[30px]">Case studies and domain-specific applications of data analytics in healthcare, education, finance, manufacturing, and environmental sciences.</p>
            </div>
          </div>

        </div>
      </div>


      {/*Indexed Journals*/}
      <div className="lg:mt-15 mt-10 text-center">
        
          <h3 className='md:text-3xl text-xl font-semibold text-gray-900'>Indexed Journals</h3>
          
      </div>
      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-3">
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-center max-w-5xl mx-auto leading-[30px] ">The Selective accepted papers of our International Conference on Software Systems Development and Data Analysis will be recommended to publish in the following index & publisher Journals.</p>
        <Marquee direction="left" speed={100}>
          {/* pauseOnHover={true} */}
          <div className="flex pb-5 pt-5 ">
            {imageItems.map((item, index) => (
              <div key={index} className="flex justify-center mr-10  py-5" >
                <img src={item.src} alt="images" className=" w-[300px] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-4" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

    </div>
  )
}

export default Home