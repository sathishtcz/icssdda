import React from 'react'
import { Link } from 'react-router-dom';

export default function Editorialboard() {

    const editorialMembers = [
        {
            name: "P. Hemalatha",
            department: "Artificial Intelligence and Data Science",
            university: "IFET College of Engineering",
            country: "India"
        },
        {
            name: "Sakthivel Velusamy",
            department: "Aerospace Information Engineering",
            university: "Konkuk University",
            country: "South Korea"
        },
        {
            name: "Satyabrata Roy",
            department: "Computer Science and Engineering",
            university: "Manipal University",
            country: "India"
        },
        {
            name: "D. Kayathri Devi",
            department: "Information Technology and Engineering",
            university: "Amity University",
            country: "Uzbekistan"
        },
        {
            name: "Ali Rizwan",
            department: "Industrial Engineering",
            university: "King Abdulaziz University",
            country: "Saudi Arabia"
        },
        {
            name: "Moolchand Sharma",
            department: "Computer Science and Engineering",
            university: "Maharaja Agrasen Institute of Technology",
            country: "India"
        },

        {
            name: "Jawwad Sami Ur Rahman",
            department: "Biomedical Engineering ",
            university: "Riphah International University",
            country: "Pakistan"
        },
        {
            name: "Shaikh Muhammad Allayear",
            department: "Multimedia and Creative Technology",
            university: "Daffodil International University",
            country: "Bangladesh"
        },
        {
            name: "Pariza Kamboj",
            department: "Computer Engineering",
            university: "Sarvajanik College of Engineering and Technology",
            country: "India"
        },
        {
            name: "R. Arun Kumar",
            department: "Digital Forensics and Cyber Security",
            university: "University of South Wales",
            country: "United Kingdom"
        },
        {
            name: "Ayodeji Oludola Oluwatope",
            department: "Computer Science and Engineering",
            university: "Obafemi Awolowo University",
            country: "Nigeria"
        },
        {
            name: "Sharmin Akter",
            department: "Computer Science and Engineering",
            university: "Daffodil International University",
            country: "Bangladesh"
        },
        {
            name: "Md Foysal",
            department: "Electronics and Communication Engineering",
            university: "Khulna University of Engineering and Technology",
            country: "Bangladesh"
        },
        {
            name: "Muhammd Umer Farooq",
            department: "Computer Science and Information Technology",
            university: "NED University of Engineering and Technology",
            country: "Pakistan"
        },
        {
            name: "Md Moshiur Rahman",
            department: "Computer Science and Engineering",
            university: "Bangladesh Open University",
            country: "Bangladesh"
        },
        {
            name: "S. Prasanth",
            department: "Physical Sciences and Technology",
            university: "Sabaragamuwa University of Sri Lanka",
            country: "Sri Lanka "
        },
        {
            name: "Chandan Jyoti Kumar",
            department: "Computer Science and Information Technology",
            university: "Cotton University",
            country: "India"
        },
        {
            name: "Mohammed Rashad Baker",
            department: "Computer Science and Information Technology",
            university: "University of Kirkuk",
            country: "Iraq"
        },

        {
            name: "Theopilus Bayu Sasongko",
            department: "Informatics",
            university: "Universitas Amikom Yogyakarta",
            country: "Indonesia"
        },
        {
            name: "Aaron Izang",
            department: "Information Technology",
            university: "Babcock University",
            country: "Nigeria"
        },
        {
            name: "Saminda Premaratne",
            department: "Information Technology",
            university: "University of Moratuwa",
            country: "Sri Lanka"
        },
        {
            name: "Habchi Yassine",
            department: "Electrical Engineering",
            university: "University Centre of Naama",
            country: "Algeria"
        },
        {
            name: "Rahman Shafique",
            department: "Information and Communication Engineering",
            university: "Yeungnam University",
            country: "South Korea"
        },
        {
            name: "Marwan Ramdhany Edy",
            department: "Informatics and Computer Engineering",
            university: "Universitas Negeri Makassar",
            country: "Indonesia"
        },
    ];

    return (
        <div>
            <div className='mt-22 '>
                <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Editorial Board</h1>
                <div className='flex gap-2 justify-center'>
                    <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
                    /
                    <p className="lg:text-[16px] text-[15px]  inter-medium">Editorial Board</p>
                </div>
            </div>

            <div className='md:mt-10 mt-6'>
                <div className="max-w-[1537px] mx-auto px-4 ">
                    <div>
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900  mb-4 leading-tight">
                            Guiding Academic Excellence
                        </h2>
                        <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify  mb-8 ">
                            The Editorial Board of ICSSDDA 2025 is a distinguished panel of academicians, researchers, and industry experts dedicated to maintaining the highest standards of quality and integrity in the publication process. The board plays a crucial role in shaping the academic excellence of the conference by ensuring that all submitted papers are reviewed with fairness, transparency, and academic rigor.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {editorialMembers.map((member, index) => (
                            <div
                                key={index}
                                className="relative bg-[#F3E9DC] rounded-2xl shadow-lg   hover:shadow-2xl transition-all duration-500 group"
                            >
                                {/* Header Bar with Name */}
                                <div className="bg-[#C75D2C] text-white px-4 py-2 rounded-t-xl transition duration-500">
                                    <h3 className="text-lg font-semibold ">Dr. {member.name}</h3>
                                </div>
                                <div className='p-4 '>
                                    {/* Department Section */}
                                    <div className="bg-white rounded-xl p-4 shadow-inner">
                                        <div className='mb-3 hover:ml-4 duration-500'>
                                            <h4 className="font-semibold text-gray-900 mb-1">Department</h4>
                                            <p className="text-gray-700">{member.department}</p>
                                        </div>
                                        <div className='mb-3 hover:ml-4 duration-500'>
                                            <h4 className="font-semibold text-gray-900 mb-1">University</h4>
                                            <p className="text-gray-700">{member.university}</p>
                                        </div>
                                        <div className='hover:ml-4 duration-500'>
                                            <h4 className="font-semibold text-gray-900 mb-1">Country</h4>
                                            <p className="text-gray-700">{member.country}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//     {editorialMembers.map((member, index) => (
//         <div
//             key={index}
//             className="relative bg-[#F3E9DC] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 "
//         >
//             {/* Header Bar with Name */}
//             <div className="bg-[#C75D2C] text-white px-4 py-2 rounded-t-xl mb-4">
//                 <h3 className="text-lg font-semibold">Dr. {member.name}</h3>
//             </div>

//             {/* Department Section */}
//             <div className="bg-white rounded-xl p-4 mb-3 shadow-inner">
//                 <h4 className="font-semibold text-gray-900 mb-1">Department</h4>
//                 <p className="text-gray-700">{member.department}</p>
//             </div>

//             {/* University Section */}
//             <div className="bg-white rounded-xl p-4 mb-3 shadow-inner">
//                 <h4 className="font-semibold text-gray-900 mb-1">University</h4>
//                 <p className="text-gray-700">{member.university}</p>
//             </div>

//             {/* Country Section */}
//             <div className="bg-white rounded-xl p-4 shadow-inner">
//                 <h4 className="font-semibold text-gray-900 mb-1">Country</h4>
//                 <p className="text-gray-700">{member.country}</p>
//             </div>
//         </div>
//     ))}
// </div>