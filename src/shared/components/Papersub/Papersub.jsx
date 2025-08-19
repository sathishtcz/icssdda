import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Papersub() {

    const [fileName, setFileName] = useState('Choose Your File');
    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const journalName = 'icssdda';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://icssdda.com/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}).`);

                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <>
            <div className='mt-22'>
                <h1 className='xl:text-[37px] lg:text-[35px] md:text-[30px] text-[25px] inter-bold text-[#C75D2C] text-center'>Paper Submission</h1>
                <div className='flex gap-2 justify-center'>
                    <Link to="/"> <p className="text-[#C75D2C] font-semibold lg:text-[16px] text-[15px]">Home</p></Link>
                    /
                    <p className="lg:text-[16px] text-[15px]  inter-medium">Paper Submission</p>
                </div>
            </div>

            <div className="md:mt-10 mt-6">
                <div className="max-w-[1537px]  mx-auto px-4 ">
                    <div>
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900  mb-4 leading-tight">
                            Be a Part of ICSSDDA 2025
                        </h2>
                        <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-[30px] text-justify  mb-8 ">
                            We invite researchers, academicians, industry professionals, and students to submit their original and unpublished research papers to the International Conference on Software Systems Development and Data Analysis. All submissions must present novel contributions in line with the conference themes and will undergo a rigorous peer-review process by the Technical Program Committee.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Guidelines Section */}
                        <div className="bg-[#F3E9DC] sm:p-8 p-3 duration-300 rounded-2xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-[#C75D2C] mb-8">Submission Guidelines</h3>
                            <div className="space-y-6">
                                {[
                                    "Provide a descriptive and concise title for your paper.",
                                    "Include the full name of the first author as it appears on the paper.",
                                    "Provide a valid mobile number (10–15 digits, country code optional).",
                                    "Enter a working email address for conference communication.",
                                    "Mention the institution of the first author.",
                                    "Select the relevant track/category for your paper.",
                                    "Upload your paper in PDF or DOC format (Max: 5MB)."
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C75D2C] text-white flex items-center justify-center font-semibold shadow-md">
                                            {index + 1}
                                        </div>
                                        <p className="ml-4 text-gray-700">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submission Form */}
                        <div className="bg-[#C75D2C]  sm:p-8 p-4 duration-300 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-white mb-6">Submit Your Paper</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>

                                <input
                                    placeholder="Paper Title"
                                    required
                                    className="w-full px-5 py-3  rounded-full focus:ring-2 focus:ring-[#C75D2C] outline-none bg-gray-50"
                                    type="text"
                                    name="Paper_Title"
                                    value={formData.Paper_Title}
                                    onChange={handleFileInputChange}
                                />

                                <input
                                    placeholder="Institution Name"
                                    required
                                    className="w-full px-5 py-3  rounded-full focus:ring-2 focus:ring-[#C75D2C] outline-none bg-gray-50"
                                    type="text"
                                    name="Institution_Name"
                                    value={formData.Institution_Name}
                                    onChange={handleFileInputChange}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-5 py-3  rounded-full focus:ring-2 focus:ring-[#C75D2C] outline-none bg-gray-50"
                                        type="email"
                                        name="Email_Address"
                                        value={formData.Email_Address}
                                        onChange={handleFileInputChange}
                                    />
                                    <input
                                        placeholder="Author Full Name"
                                        required
                                        className="w-full px-5 py-3  rounded-full focus:ring-2 focus:ring-[#C75D2C] outline-none bg-gray-50"
                                        type="text"
                                        name="Author_FUll_Name"
                                        value={formData.Author_FUll_Name}
                                        onChange={handleFileInputChange}
                                    />
                                </div>

                                <select
                                    name="Paper_Track"
                                    value={formData.Paper_Track}
                                    onChange={handleFileInputChange}
                                    required
                                    className="w-full px-5 py-3  rounded-full focus:ring-2 focus:ring-[#C75D2C] outline-none bg-white"
                                >
                                    <option value="">-- Select Category --</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                    <option value="Data Science & Analytics">Data Science & Analytics</option>
                                    <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                                    <option value="Cybersecurity & Data Privacy">Cybersecurity & Data Privacy</option>
                                    <option value="Blockchain & Emerging Technologies">Blockchain & Emerging Technologies</option>
                                    <option value="Applied Data Analysis">Applied Data Analysis</option>
                                </select>

                                <div className="border-2 border-dashed border-gray-50 rounded-full p-6 text-center  transition">
                                    <label className="cursor-pointer flex flex-col items-center">
                                        <input
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            type="file"
                                            required
                                            name="Paper_File"
                                            onChange={handleFileInputChange}
                                        />
                                        <FiUpload className="w-10 h-10 text-white mb-2" />
                                        <p className='text-white'>{fileName || "Click to Upload Paper"}</p>
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-fit bg-white text-[#C75D2C] font-semibold py-3 px-4 rounded-full  transition duration-300 text-lg cursor-pointer"
                                    >
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
