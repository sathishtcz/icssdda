import React from 'react'
import { Link } from 'react-router-dom'

export default function Committee() {
    return (
        <>
            <div className='mt-22'>
                <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Organizing Committee</h1>
                <div className='flex gap-2 justify-center'>
                    <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
                    /
                    <p className="lg:text-[16px] text-[15px]  inter-medium">Organizing Committee</p>
                </div>
            </div>
            <div className="md:mt-10 mt-6">
                <div className="max-w-[1537px] mx-auto px-4 ">
                    <div>
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900  mb-4 leading-tight">
                            Core Team of ICSSDDA
                        </h2>
                        <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify  mb-8 ">
                            The success of the International Conference on Software Systems Development and Data Analysis  is made possible by the dedication and expertise of our distinguished Organizing Committee. Their collective vision ensures that ICSSDDA 2025 is not just an academic gathering, but also a platform that fosters innovation, collaboration, and the exchange of transformative ideas in the fields of software systems, data analytics, artificial intelligence, and emerging technologies.
                        </p>
                    </div>

                    <div className='space-y-4 '>
                            <p className="font-medium text-xl ">Roles & Responsibilities</p>
                            <ul className='space-y-2 list-disc list-inside'>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>Provide strategic direction, oversee the overall planning, and ensure the academic quality of the event.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>Review submitted papers, design technical sessions, and finalize the conference program.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>Offer expert guidance on shaping the vision, scope, and relevance of the conference.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>Ensure the conference proceedings maintain high technical standards and are aligned with international research trends.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>Manage the publication process, including coordination with journals, proceedings, and indexing.</li>
                            </ul>
                        </div>
                        
                </div>
            </div>

        </>
    )
}
