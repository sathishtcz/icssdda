import React from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Conferencetracks() {

  const tracks = [
    {
      title: "Software Engineering",
      description:
        "Innovative practices, methodologies, tools, and frameworks in modern software engineering, agile development, DevOps, and software project management.",
      icon: <FaLaptopCode className="text-4xl text-white group-hover:text-black duration-500" />,
      image: "/assets/images/tracks.png",
    },
    {
      title: "Data Science & Analytics",
      description:
        "Data-driven approaches, predictive analytics, big data infrastructure, cloud-based solutions, and advanced analytical techniques for decision-making.",
      icon: <FaLaptopCode className="text-4xl text-white group-hover:text-black duration-500" />,
      image: "/assets/images/tracks2.png",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "AI-driven systems, deep learning models, neural networks, reinforcement learning, and applications of AI across various domains.",
      icon: <FaLaptopCode className="text-4xl text-white group-hover:text-black duration-500" />,
      image: "/assets/images/tracks3.png",
    },
    {
      title: "Cybersecurity & Data Privacy",
      description:
        "Secure software development, data protection frameworks, cryptographic systems, ethical hacking, and AI-powered cybersecurity mechanisms.",
      icon: <FaLaptopCode className="text-4xl text-white group-hover:text-black duration-500" />,
      image: "/assets/images/tracks4.png",
    },
    {
      title: "Blockchain & Emerging Technologies",
      description:
        "Blockchain innovations, decentralized applications (dApps), Web 3.0, quantum computing, and next-gen technologies shaping the digital ecosystem.",
      icon: <FaLaptopCode className="text-4xl text-white group-hover:text-black duration-500" />,
      image: "/assets/images/tracks5.png",
    },
    {
      title: "Applied Data Analysis",
      description:
        "Case studies and domain-specific applications of data analytics in healthcare, education, finance, manufacturing, and environmental sciences.",
      icon: <FaLaptopCode className="text-4xl text-white group-hover:text-black duration-500" />,
      image: "/assets/images/tracks6.png",
    },
  ];


  return (
    <>
      <div className='mt-22 '>
        <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Conference Tracks</h1>
        <div className='flex gap-2 justify-center'>
          <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
          /
          <p className="lg:text-[16px] text-[15px]  inter-medium">Conference Tracks</p>
        </div>
      </div>

      <div className="md:mt-10 mt-6">
        <div className="max-w-[1537px] mx-auto px-4 ">
          <div>
            <h2 className="md:text-3xl text-xl font-bold text-gray-900  mb-4 leading-tight">
              Specialized Tracks & Topics
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify  mb-8 ">
              The International Conference on Software Systems Development and Data Analysis invites scholars, researchers, industry practitioners, and academicians to share their original research contributions, innovative methodologies, and practical applications that advance the fields of software systems and data-driven technologies. Authors are invited to contribute high-quality papers under (but not limited to) the following conference tracks:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-13 max-w-[80rem] gap-9 justify-items-center mx-auto">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="bg-white p-3 w-fit rounded-xl max-w-[25rem] relative group border-3 border-[#C75D2C]"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="rounded-xl w-[370px] group-hover:rotate-y-180 group-hover:scale-125 duration-500"
                  />
                </div>
                <div className="relative -mt-10 z-20">
                  <div className="bg-[#C75D2C] rounded-full p-4 w-fit border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.3)] mx-auto group-hover:rotate-y-180 group-hover:bg-white group-hover:border-[#C75D2C] duration-500">
                    {track.icon}
                  </div>
                </div>

                <p className="text-center inter-semibold text-xl text-black mt-3 mb-2 group-hover:text-[#C75D2C]">
                  {track.title}
                </p>
                <p className="text-[16px] text-justify text-gray-700 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

// <section>
//           <div className="container mx-auto px-4 py-8">
//             <div className="text-center">
//               <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">CONFERENCE TRACKS</span>
//               <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
//                 Key Focus Areas
//               </h2>
//               <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-justify">
//                 ICASMET 2025 features a rich selection of conference tracks designed to foster cross-disciplinary dialogue and showcase the latest advancements in science, engineering, and technology. Each track invites researchers, academicians, industry experts, and innovators to share cutting-edge findings, practical solutions, and visionary ideas that address global challenges.
//               </p>
//             </div>
//           </div>


//             <div className="container mx-auto  px-8 py-8">
// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//   {tracks.map((track, index) => (
//     <div
//       key={index}
//       className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//     >
//       <div className="flex items-center mb-4">
//         <span className="w-10 h-10 bg-blue-600 text-white text-xl font-semibold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//           {index + 1}
//         </span>
//         <h2 className="text-xl font-semibold text-gray-900">
//           {track.title}
//         </h2>
//       </div>
//       <p className="text-gray-600 sm:text-base md:text-lg lg:text-[16px] leading-relaxed mb-6">
//         {track.content}
//       </p>
//     </div>
//   ))}
// </div>
//             </div>

//         </section>
