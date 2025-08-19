import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { LuMailCheck } from 'react-icons/lu';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { IoSend } from 'react-icons/io5';

export default function Contact() {

  const [formData, setFormData] = useState({
    firstname: '',
    secondname: '',
    number: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleFileInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://icssdda.com/api/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.text();
      setStatus(result);

      if (response.ok) {
        toast.success("Message submitted successfully!");
        setFormData({
          firstname: '',
          secondname: '',
          number: '',
          email: '',
          message: '',
        });
      } else {
        toast.error('Failed to send submission. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className=' mt-22 '>
        <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Contact Us</h1>
        <div className='flex gap-2 justify-center'>
          <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
          /
          <p className="lg:text-[16px] text-[15px]  inter-medium">Contact Us</p>
        </div>
      </div>

      <div className='md:mt-10 mt-6'>
        <div className="max-w-[1537px] mx-auto px-4 ">
          <div>
            <h2 className="md:text-3xl text-xl font-bold text-gray-900  mb-4 leading-tight">
              Get in touch with us
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify  mb-8 ">
              We’re here to assist you with any queries related to the International Conference on Software Systems Development and Data Analysis ICSSDDA 2025. Whether you need details about paper submissions, registrations, sponsorships, or general information, feel free to reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 mx-auto gap-5 mt-5 max-w-[48rem]">
            <div className='bg-[#C75D2C] px-5 py-4 rounded-2xl'>
              <div className='flex md:flex-row flex-col gap-3 items-center'>
                <div className="bg-white p-2 rounded-full flex-shrink-0 ">
                  <LuMailCheck className='text-[#C75D2C] text-3xl' />
                </div>
                <div className="space-y-2">
                  <p className="text-white inter-medium text-[16px] md:text-start text-center">Email</p>
                  <p className="text-white inter-medium lg:text-[22px] text-[19px] md:text-start text-center wrap-anywhere">info.icssdda@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='bg-[#C75D2C] px-5 py-4 rounded-2xl'>
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
          </div>




          <div className="bg-[#C75D2C] rounded-2xl shadow-lg p-8 max-w-[48rem] mx-auto  mt-5">
            {/* Contact Form */}
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Send Your Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white rounded-full focus:ring-1 focus:outline-none focus:ring-[#C75D2C] focus:border-transparent transition duration-200"
                    placeholder="First name"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white rounded-full focus:ring-1 focus:outline-none focus:ring-[#C75D2C] focus:border-transparent transition duration-200"
                    placeholder="Last name"
                    id="secondname"
                    value={formData.secondname}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white rounded-full focus:ring-1 focus:outline-none focus:ring-[#C75D2C] focus:border-transparent transition duration-200"
                    placeholder="Email address"
                    id="email"
                    value={formData.email}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white rounded-full focus:ring-1 focus:outline-none focus:ring-[#C75D2C] focus:border-transparent transition duration-200"
                    placeholder="Mobile number"
                    id="number"
                    value={formData.number}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white rounded-3xl md:rounded-4xl focus:ring-1 focus:outline-none focus:ring-[#C75D2C] focus:border-transparent transition duration-200"
                  placeholder="Write your message here"
                  id="message"
                  value={formData.message}
                  onChange={handleFileInputChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center gap-2 justify-center ">
                <div className='bg-white px-4 py-3 rounded-full cursor-pointer w-fit flex gap-2 items-center'>
                  <button
                    type="submit"
                    className="  text-[#C75D2C]  font-semibold text-lg  transition duration-200 cursor-pointer"
                  >
                    {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                  </button>
                
                <IoSend className='text-xl text-[#C75D2C]' /></div>
              </div>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}


