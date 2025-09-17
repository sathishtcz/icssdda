import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Editorialboard() {

    const Organizingcommitte = [
        {
            name: "Dr. Olabode Idowu",
            department: "Department of Electrical and Information Engineering",
            university: "Covenant University",
            location: "Nigeria"
        },
        {
            name: "Dr. Adekunle Musibau Ibrahim",
            department: "Department of Computer Science",
            university: "Osun State University",
            location: "Nigeria"
        },
        {
            name: "Dr. Ashok Kumar",
            department: "Department of Computer Science",
            university: "Skyline  University",
            location: "Nigeria"
        },
        {
            name: "Dr. Alamu Olumide",
            department: "Department of Electrical and Electronics Engineering",
            university: "University of Lagos",
            location: "Nigeria"
        },
        {
            name: "Dr. Badamasi Sani Mohammed",
            department: "Department of Economics",
            university: "Al-Qalam University",
            location: "Nigeria"
        },
    ];

    const technicalcomiittee = [
    {
        name: "Dr. Hua Qu",
        department: "Department of Biomedical Engineering and Technology",
        university: "Tianjin Medical University",
        location: "China"
    },
    {
        name: "Dr. Tejas Dhote",
        department: "Department of Mechanical Engineering",
        university: "Michigan Technological University",
        location: "USA"
    },
    {
        name: "Dr. Salah Eddine Benatia",
        department: "Department of Computer Science",
        university: "Mascara University",
        location: "Algeria"
    },
    {
        name: "Dr. Oladayo Atanda",
        department: "Department of Computer Science",
        university: "Bowen University",
        location: "Nigeria"
    },
    {
        name: "Dr. Chandan Jyoti Kumar",
        department: "Department of Computer Science and Information Technology",
        university: "Cotton University",
        location: "India"
    },
    {
        name: "Dr. Asad Aziz",
        department: "Department of Geography",
        university: "University of Gujrat",
        location: "Pakistan"
    },
    {
        name: "Dr. Puneet Sharma",
        department: "Department of Automation and Process Engineering",
        university: "The Arctic University of Norway",
        location: "Norway"
    },
    {
        name: "Dr. Bilal Saoud",
        department: "Department of Electrical Engineering",
        university: "University of Bouira",
        location: "Algeria"
    },
    {
        name: "Dr. Rustam Asnawi",
        department: "Department of Electrical Engineering",
        university: "Universitas Negeri Yogyakarta",
        location: "Indonesia"
    },
    {
        name: "Dr. Nguyen Van Thieu",
        department: "Department of Computer Science",
        university: "Phenikaa University",
        location: "Vietnam"
    },
    {
        name: "Dr. Nour Moustafa",
        department: "Department of Computer Science",
        university: "American University of the Middle East",
        location: "Kuwait"
    },
    {
        name: "Dr. Junaid Ahmed",
        department: "Department of Information Engineering",
        university: "Zhengzhou University",
        location: "China"
    },
    {
        name: "Dr.D. Kayathri Devi",
        department: "Department of Information Technology and Engineering",
        university: "Amity University",
        location: "Uzbekistan"
    },
    {
        name: "Dr. Nor Musliza Mustafa",
        department: "Department of Creative Multimedia and Computing",
        university: "Selangor Islamic University",
        location: "Malaysia"
    },
    {
        name: "Dr. Ghasem Abbasi",
        department: "Department of Mathematics and Statistics",
        university: "Islamic Azad University",
        location: "Iran"
    },
    {
        name: "Dr. Twana A. Hamad",
        department: "Department of Computer Engineering",
        university: "Harran University",
        location: "Turkiye"
    },
    {
        name: "Dr. Kolawole Yusuf Obiwusi",
        department: "Department of Mathematics and Computer Science",
        university: "Summit University",
        location: "Nigeria"
    },
    {
        name: "Dr. Saman Almufti",
        department: "Department of Computer Science",
        university: "Nawroz University",
        location: "Iraq"
    },
    {
        name: "Dr. Saqib Amin",
        department: "Department of Information Technology",
        university: "Riphah International University",
        location: "Pakistan"
    },
    {
        name: "Dr.R. Arun Kumar",
        department: "Department of Digital Forensics and Cyber Security",
        university: "University of South Wales",
        location: "United Kingdom"
    }
];



    const advisorycommittee = [
    {
        name: "Dr. Ernesto Carrillo Arellano",
        department: "Department of Electronics Engineering",
        university: "Metropolitan Autonomous University",
        location: "Mexico"
    },
    {
        name: "Dr. Maryam Anwer",
        department: "Department of Industrial Engineering",
        university: "Majma university",
        location: "Saudi Arabia"
    },
    {
        name: "Dr. Shahzad Ali",
        department: "Department of Computer Science",
        university: "Dawood University Of Engineering and Technology Karachi",
        location: "Pakistan"
    },
    {
        name: "Dr. Chinwe Peace Igiri",
        department: "Department of Computer Science",
        university: "Cavendish University",
        location: "Uganda"
    },
    {
        name: "Dr. Samir Hallaci",
        department: "Department of Computer Science",
        university: "Guelma University",
        location: "Algeria"
    },
    {
        name: "Dr. Sowmipriya Rajendiran",
        department: "Department of Computer Science and Engineering",
        university: "International School of Information Processing Sciences",
        location: "France"
    },
    {
        name: "Dr. Zouhour El-Abiad",
        department: "Department of Computer Science",
        university: "ESA Business School",
        location: "Lebanon"
    },
    {
        name: "Dr. Robin Prakash Mathur",
        department: "Department of Computer Science and Engineering",
        university: "Lovely Professional University",
        location: "India"
    },
    {
        name: "Dr. Meenakshi Gupta",
        department: "Department of Computer Science",
        university: "National University of Singapore",
        location: "Singapore"
    },
    {
        name: "Dr. Abolfazl Gandomi",
        department: "Department of Computer Engineering",
        university: "Islamic Azad University",
        location: "Iran"
    },
    {
        name: "Dr. Muhammad Asif Khan",
        department: "Department of Information Technology",
        university: "Qatar University",
        location: "Qatar"
    },
    {
        name: "Dr. Hansi Gunasinghe",
        department: "Department of Computing and Information Systems",
        university: "Sabaragamuwa University of Sri Lanka",
        location: "Sri Lanka"
    },
    {
        name: "Dr. Wasan Alamro",
        department: "Department of Electrical Engineering",
        university: "Auckland University of Technology",
        location: "New Zealand"
    },
    {
        name: "Dr. Stephen Ekwe",
        department: "Department of Electrical Engineering",
        university: "University of Cape Town",
        location: "South Africa"
    },
    {
        name: "Dr. Alma Bangayan Manera",
        department: "Department of Electronics and Communication Engineering",
        university: "Cagayan State University",
        location: "Philippines"
    },
    {
        name: "Dr.Md Foysal",
        department: "Department of Electronics and Communication Engineering",
        university: "Khulna University of Engineering and Technology",
        location: "Bangladesh"
    },
    {
        name: "Dr. Rogerio Espindola",
        department: "Department of Civil Engineering",
        university: "Federal University of Rio de Janeiro",
        location: "Brazil"
    },
    {
        name: "Dr. Qian Liu",
        department: "Department of Computer Science and Engineering",
        university: "Krirk University",
        location: "Thailand"
    },
    {
        name: "Dr. Bassam Talib Sabri ali",
        department: "Department of Businesses Information Technology",
        university: "University of Information Technology and Communication",
        location: "Iraq"
    },
    {
        name: "Dr. Rohini Sharma",
        department: "Department of Computer Science and Applications",
        university: "Panjab University",
        location: "India"
    },
    {
        name: "Dr. Aram Sabr Tahr",
        department: "Department of Computer Science",
        university: "Cyprus International University",
        location: "Cyprus"
    },
    {
        name: "Dr. Sinarring Azi Laga",
        department: "Department of Informatics Technology",
        university: "Hayam Wuruk Perbanas University",
        location: "Indonesia"
    },
    {
        name: "Dr. Ammar Amjad",
        department: "Department of Information Technology",
        university: "National Yang Ming Chiao Tung University",
        location: "Taiwan"
    },
    {
        name: "Dr.Md Moshiur Rahman",
        department: "Department of Computer Science and Engineering",
        university: "Bangladesh Open University",
        location: "Bangladesh"
    },
    {
        name: "Dr. Ardhendu Mandala",
        department: "Department of Computer Science and Technology",
        university: "University of North Bengal",
        location: "India"
    },
    {
        name: "Dr. Asma Sbeih",
        department: "Department of Engineering and Information",
        university: "Palestine Ahliya University",
        location: "Palestine"
    },
    {
        name: "Dr. Leo John Baptist",
        department: "Department of Information Technology",
        university: "Botho University",
        location: "Botswana"
    }
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

                    <div className="">
                        <h3 id="organizing" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-[#C75D2C] text-center ">Organizing Committee</h3>
                        <div className="max-w-[1300px] mx-auto py-3">
                            {Organizingcommitte.map((editor, index) => (
                                <div key={index}>
                                    <div className='flex gap-2  mb-2 items-center'>
                                        <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                        <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <h3 id="technical" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-[#C75D2C] text-center mt-8 ">Technical Program Committee</h3>
                        <div className="max-w-[1300px] mx-auto py-3">
                            {technicalcomiittee.map((editor, index) => (
                                <div key={index}>
                                    <div className='flex gap-2  mb-2 items-center'>
                                        <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                        <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 id="advisory" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-[#C75D2C] text-center mt-8 ">International Advisory Board Committee</h3>
                        <div className="max-w-[1300px] mx-auto py-3">
                            {advisorycommittee.map((editor, index) => (
                                <div key={index}>
                                    <div className='flex gap-2  mb-2 items-center'>
                                        <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                        <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
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