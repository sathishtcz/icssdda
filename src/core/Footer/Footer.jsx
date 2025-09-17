import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#C75D2C]   text-white py-12 pb-0">
                <div className="max-w-[1537px] mx-auto px-8 text-center">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-start">


                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-[#C75D2C] bg-white w-fit rounded-2xl py-2 px-2">
                                <img alt="ICCNDS 2025 Logo" className="w-44  " src="/assets/images/logo.png" />
                            </h2>
                            <p className="text-gray-200 text-[16px] mt-3 text-xl">
                                International Conference on Software Systems Development and Data Analysis
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl   font-semibold text-white">General</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/about" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">About the Conference</Link>
                            </li>

                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/scope" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">Scope of Conference</Link>
                            </li>
                            {/* <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/organizingCommittee" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">Organizing Committee</Link>
                            </li> */}
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/editorial" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">Editorial Board</Link>
                            </li>
                        </div>


                        <div className="space-y-3">
                            <h3 className="text-xl   font-semibold text-white">Conference Information</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/conferenceTracks" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">Conference Tracks</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/important-dates" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">Key Dates</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/paper-submission" className="text-gray-100 hover:text-white transition-all duration-300 block text-[16px]">Paper Submission</Link>
                            </li>
                        </div>


                        <div>
                            <h3 className="text-xl   font-semibold text-white">Get in Touch</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <IoIosMail className='flex-shrink-0'/>
                                <p className="text-gray-100 wrap-anywhere  text-[16px]">info.icssdda@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <GrLocation className='flex-shrink-0'/>
                                <p className="text-gray-100 text-[16px]">Lagos, Nigeria</p>
                            </div>

                            {/* <p className="text-gray-200 mt-2 text-lg">+91 123 456 7890</p> */}
                        </div>
                    </div>


                    <div className="border-t border-gray-200 mt-12 py-6 text-center text-gray-100 ">
                        <p className='text-[16px]'>
                            © 2025 ICSSDDA. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
