import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setDesktopMenuOpen] = useState(false);
    const [isOpen, setOpenMenu] = useState(null);
    const location = useLocation();
    const Active = location.pathname + location.hash;
    const mobileRef = useRef(null);
    const deskaboutRef = useRef(null);
    const deskAuthorRef = useRef(null);
    const deskEditorialRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileButton = event.target.closest('button');
            if (mobileButton && mobileButton.classList.contains('mobile-menu-btn')) {
                return;
            }

            if (mobileRef.current && !mobileRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
                setOpenMenu(null);
            }
            if (isDesktopMenuOpen === 'about' && deskaboutRef.current && !deskaboutRef.current.contains(event.target)) {
                setDesktopMenuOpen(false);
            }
            if (isDesktopMenuOpen === 'author' && deskAuthorRef.current && !deskAuthorRef.current.contains(event.target)) {
                setDesktopMenuOpen(false);
            }
            if (isDesktopMenuOpen === 'editorial' && deskEditorialRef.current && !deskEditorialRef.current.contains(event.target)) {
                setDesktopMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDesktopMenuOpen, isMobileMenuOpen]);

    const toggleMenu = (menu) => {
        setOpenMenu(isOpen === menu ? null : menu);
    };

    const desktopmenu = (menu) => {
        setDesktopMenuOpen(isDesktopMenuOpen === menu ? false : menu);
    };

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    const getMobileMenuHeight = () => {
        let baseHeight = 250;
        if (isOpen === 'about') baseHeight += 220;
        if (isOpen === 'author') baseHeight += 190;
        if (isOpen === 'editorial') baseHeight += 190;
        return baseHeight;
    };

    return (
        <>
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-300 py-3 bg-white text-black shadow-xl `}
            >
                <div className="max-w-[1537px] mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <img alt="ICCNDS 2025 Logo" className="w-44 md:w-52 " src="/assets/images/logo.png" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex space-x-10">
                            <Link to="/" className={`text-lg  transition duration-300 font-medium hover:text-[#c44307]  ${Active === "/" ? "text-[#C75D2C] font-semibold" : "text-black"}`}>Home</Link>

                            {/* About Dropdown */}
                            <div className="relative " ref={deskaboutRef}>
                                <button className={`text-lg  flex items-center space-x-2 font-medium  hover:text-[#c44307] ${Active === "/about" || Active === "/scope" ? "text-[#C75D2C] font-semibold" : "text-black"}`} onClick={() => desktopmenu('about')}>
                                    <span>About Us</span>
                                    <span className="text-sm"><IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isDesktopMenuOpen === "about" ? 'rotate-180' : 'rotate-0'}`} /></span>
                                </button>
                                <div className={`mt-2 absolute  overflow-hidden border border-gray-300 transition-all p-2 duration-400 ease-in-out bg-white shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link to="/about" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150   font-medium rounded-md hover:text-[#c44307] ${Active === "/about" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>About the Conference</Link>
                                    <Link to="/scope" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307]  ${Active === "/scope" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Scope of Conference</Link>
                                </div>
                            </div>

                            {/* Editorial Board with Sub-dropdown */}
                            <div className="relative" ref={deskEditorialRef}>
                                <button
                                    className={`text-lg flex items-center space-x-2 font-medium hover:text-[#c44307] 
                                    ${Active === "/editorial" || Active === "/editorial#organizing" || Active === "/editorial#technical" || Active === "/editorial#advisory" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    onClick={() => desktopmenu('editorial')}
                                >
                                    <span>Editorial Board</span>
                                    <IoIosArrowDropdown
                                        className={`text-lg transition-transform duration-300 ${isDesktopMenuOpen === "editorial" ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </button>

                                <div
                                    className={`mt-2 p-2 absolute overflow-hidden border border-gray-300 transition-all duration-400 ease-in-out bg-white shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap 
                                    ${isDesktopMenuOpen === 'editorial' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <Link to="/editorial#organizing" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/editorial#organizing" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Organizing Committee</Link>
                                    <Link to="/editorial#technical" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/editorial#technical" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"} `}>Technical Committee</Link>
                                    <Link to="/editorial#advisory" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/editorial#advisory" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Advisory Committee</Link>
                                </div>
                            </div>

                            {/* Author's Desk Dropdown */}
                            <div className="relative" ref={deskAuthorRef}>
                                <button className={`text-lg  flex items-center space-x-2  font-medium hover:text-[#c44307] ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? "text-[#C75D2C] font-semibold" : ""}`} onClick={() => desktopmenu('author')}>
                                    <span>Author's Desk</span>
                                    <span className="text-sm"><IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isDesktopMenuOpen === "author" ? 'rotate-180' : 'rotate-0'}`} /></span>
                                </button>
                                <div className={`mt-2 absolute overflow-hidden border border-gray-300 transition-all duration-500 ease-in-out bg-white p-2 shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap  ${isDesktopMenuOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link to="/conferenceTracks" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium  rounded-md hover:text-[#c44307] ${Active === "/conferenceTracks" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Conference Tracks</Link>
                                    <Link to="/important-dates" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/important-dates" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Key Dates</Link>
                                    <Link to="/paper-submission" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/paper-submission" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Paper Submission</Link>
                                </div>
                            </div>

                            <Link to="/contact" className={`text-lg  font-medium  hover:text-[#c44307] ${Active === "/contact" ? "text-[#C75D2C] font-semibold" : "text-black"}`}>Contact Us</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden  focus:outline-none transition-transform duration-300 mobile-menu-btn  text-black`}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setMobileMenuOpen(!isMobileMenuOpen);
                                if (isMobileMenuOpen) {
                                    setOpenMenu(null);
                                }
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M18 6L6 18M6 6l12 12" />
                                ) : (
                                    <>
                                        <line x1="4" x2="20" y1="12" y2="12" />
                                        <line x1="4" x2="20" y1="6" y2="6" />
                                        <line x1="4" x2="20" y1="18" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={mobileRef}
                    className={`absolute top-full left-0 w-full bg-white text-black shadow-lg lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                        ? `max-h-[${getMobileMenuHeight()}px] opacity-100`
                        : 'max-h-0 opacity-0'
                        }`}
                    style={{ maxHeight: isMobileMenuOpen ? `${getMobileMenuHeight()}px` : '0px' }}
                >
                    <div className="flex flex-col items-center text-center space-y-4 px-6 py-6">
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-lg transition duration-300 font-medium  hover:text-[#c44307] ${Active === "/" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                        >
                            Home
                        </Link>

                        {/* About Us Dropdown */}
                        <div className='w-full'>
                            <button
                                className={`w-full text-center flex items-center justify-center space-x-2 hover:text-[#c44307] transition-colors ${Active === "/about" || Active === "/scope" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleMenu('about');
                                }}
                            >
                                <span className='text-lg font-medium '>About Us</span>
                                <IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isOpen === "about" ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen === 'about' ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="bg-white border border-gray-500 rounded-md p-2 space-y-2">
                                    <Link
                                        to="/about"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/about" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        About the Conference
                                    </Link>
                                    <Link
                                        to="/scope"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/scope" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Scope of the Conference
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Editorial Board Sub-dropdown */}
                        <div className='w-full'>
                            <button
                                className={`w-full text-center flex items-center justify-center space-x-2 hover:text-[#c44307] transition-colors 
                                ${Active === "/editorial" || Active === "/editorial#organizing" || Active === "/editorial#technical" || Active === "/editorial#advisory" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleMenu('editorial');
                                }}
                            >
                                <span className='text-lg font-medium '>Editorial Board</span>
                                <IoIosArrowDropdown
                                    className={`text-lg transition-transform duration-300 ${isOpen === "editorial" ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out 
                                ${isOpen === 'editorial' ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="bg-white border border-gray-500 rounded-md p-2 space-y-2">
                                    <Link
                                        to="/editorial#organizing"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/editorial#organizing" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Organizing Committee
                                    </Link>
                                    <Link
                                        to="/editorial#technical"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/editorial#technical" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Technical Committee
                                    </Link>
                                    <Link
                                        to="/editorial#advisory"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/editorial#advisory" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Advisory Committee
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Author's Desk Dropdown */}
                        <div className='w-full'>
                            <button
                                className={`w-full text-center flex items-center justify-center space-x-2 hover:text-[#c44307] transition-colors ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toggleMenu('author');
                                }}
                            >
                                <span className='text-lg font-medium '>Author's Desk</span>
                                <IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isOpen === "author" ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen === 'author' ? 'max-h-44 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="bg-white border border-gray-500 rounded-md p-2 space-y-2">
                                    <Link
                                        to="/conferenceTracks"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/conferenceTracks" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Conference Tracks
                                    </Link>
                                    <Link
                                        to="/important-dates"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/important-dates" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Key Dates
                                    </Link>
                                    <Link
                                        to="/paper-submission"
                                        onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                                        className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/paper-submission" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                                    >
                                        Paper Submission
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-lg hover:text-[#c44307] transition-colors font-medium ${Active === "/contact" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;


// import React, { useEffect, useRef, useState } from 'react';
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isDesktopMenuOpen, setDesktopMenuOpen] = useState(false);
//     const [isOpen, setOpenMenu] = useState(null);
//     const location = useLocation();
//     const Active = location.pathname;
//     const mobileRef = useRef(null);
//     const deskaboutRef = useRef(null);
//     const deskAuthorRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {

//             const mobileButton = event.target.closest('button');
//             if (mobileButton && mobileButton.classList.contains('mobile-menu-btn')) {
//                 return;
//             }

//             if (mobileRef.current && !mobileRef.current.contains(event.target)) {
//                 setMobileMenuOpen(false);
//                 setOpenMenu(null); // Close any open submenus
//             }
//             if (isDesktopMenuOpen === 'about' && deskaboutRef.current && !deskaboutRef.current.contains(event.target)) {
//                 setDesktopMenuOpen(false);
//             }
//             if (isDesktopMenuOpen === 'author' && deskAuthorRef.current && !deskAuthorRef.current.contains(event.target)) {
//                 setDesktopMenuOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isDesktopMenuOpen, isMobileMenuOpen]);

//     const toggleMenu = (menu) => {
//         setOpenMenu(isOpen === menu ? null : menu);
//     };

//     const desktopmenu = (menu) => {
//         setDesktopMenuOpen(isDesktopMenuOpen === menu ? false : menu);
//     };

//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             const isScrolled = window.scrollY > 20;
//             setScrolled(isScrolled);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     //height for mobile menu
//     const getMobileMenuHeight = () => {
//         let baseHeight = 200;
//         if (isOpen === 'about') baseHeight += 220;
//         if (isOpen === 'author') baseHeight += 190;
//         return baseHeight;
//     };

//     return (
//         <>
//             {/* <nav className={`fixed w-full top-0 z-50 transition-all duration-300 py-4  ${ scrolled ? 'bg-white   shadow-xl  ' : 'bg-transparent'}`}> */}
//             <nav
//                 className={`fixed w-full top-0 z-50 transition-all duration-300 py-3 bg-white text-black shadow-xl `}
//             >
//                 <div className="max-w-[1537px] mx-auto px-4">
//                     <div className="flex justify-between items-center">
//                         <Link to="/" className="flex items-center space-x-3">
//                             <img alt="ICCNDS 2025 Logo" className="w-44 md:w-52 " src="/assets/images/logo.png" />
//                             {/* <h1 className={`text-3xl font-bold  text-[#C75D2C]`}>ICSSDDA</h1> */}
//                         </Link>

//                         {/* Desktop Nav */}
//                         <div className="hidden lg:flex space-x-10">
//                             <Link to="/" className={`text-lg  transition duration-300 font-medium hover:text-[#c44307]  ${Active === "/" ? "text-[#C75D2C] font-semibold" : "text-black"}`}>Home</Link>

//                             {/* About Dropdown */}
//                             <div className="relative " ref={deskaboutRef}>
//                                 <button className={`text-lg  flex items-center space-x-2 font-medium  hover:text-[#c44307] ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? "text-[#C75D2C] font-semibold" : ""}`} onClick={() => desktopmenu('about')}>
//                                     <span>About Us</span>
//                                     <span className="text-sm"><IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isDesktopMenuOpen === "about" ? 'rotate-180' : 'rotate-0'}`} /></span>
//                                 </button>
//                                 <div className={`mt-2 absolute  overflow-hidden border border-gray-300 transition-all p-2 duration-400 ease-in-out bg-white shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap ${isDesktopMenuOpen === 'about' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <Link to="/about" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150   font-medium rounded-md hover:text-[#c44307] ${Active === "/about" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>About the Conference</Link>
//                                     <Link to="/scope" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307]  ${Active === "/scope" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Scope of Conference</Link>
//                                     <Link to="/organizingCommittee" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307]  ${Active === "/organizingCommittee" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Organzing Committee</Link>
//                                     <Link to="/editorial" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150  font-medium rounded-md hover:text-[#c44307] ${Active === "/editorial" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Editorial Board</Link>
//                                 </div>
//                             </div>

//                             {/* Author's Desk Dropdown */}
//                             <div className="relative" ref={deskAuthorRef}>
//                                 <button className={`text-lg  flex items-center space-x-2  font-medium hover:text-[#c44307] ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? "text-[#C75D2C] font-semibold" : ""}`} onClick={() => desktopmenu('author')}>
//                                     <span>Author's Desk</span>
//                                     <span className="text-sm"><IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isDesktopMenuOpen === "author" ? 'rotate-180' : 'rotate-0'}`} /></span>
//                                 </button>
//                                 <div className={`mt-2 absolute overflow-hidden border border-gray-300 transition-all duration-500 ease-in-out bg-white p-2 shadow-lg rounded-md pt-3 pb-3 whitespace-nowrap  ${isDesktopMenuOpen === 'author' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <Link to="/conferenceTracks" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium  rounded-md hover:text-[#c44307] ${Active === "/conferenceTracks" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Conference Tracks</Link>
//                                     <Link to="/important-dates" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/important-dates" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Key Dates</Link>
//                                     <Link to="/paper-submission" onClick={() => setDesktopMenuOpen(false)} className={`block px-4 py-2 hover:font-medium duration-150 font-medium rounded-md hover:text-[#c44307] ${Active === "/paper-submission" ? "text-white rounded-md  font-semibold bg-[#C75D2C] hover:text-white" : "text-black"}`}>Paper Submission</Link>
//                                 </div>
//                             </div>

//                             <Link to="/contact" className={`text-lg  font-medium  hover:text-[#c44307] ${Active === "/contact" ? "text-[#C75D2C] font-semibold" : "text-black"}`}>Contact Us</Link>
//                         </div>



//                         {/* Mobile Menu Button - Single Dynamic Icon */}
//                         <button
//                             className={`lg:hidden  focus:outline-none transition-transform duration-300 mobile-menu-btn  text-black`}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 setMobileMenuOpen(!isMobileMenuOpen);
//                                 // Close any open submenus when closing main menu
//                                 if (isMobileMenuOpen) {
//                                     setOpenMenu(null);
//                                 }
//                             }}
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="32"
//                                 height="32"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
//                             >
//                                 {isMobileMenuOpen ? (
//                                     <path d="M18 6L6 18M6 6l12 12" />
//                                 ) : (
//                                     <>
//                                         <line x1="4" x2="20" y1="12" y2="12" />
//                                         <line x1="4" x2="20" y1="6" y2="6" />
//                                         <line x1="4" x2="20" y1="18" y2="18" />
//                                     </>
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu Dropdown - Opens from header */}
//                 <div
//                     ref={mobileRef}
//                     className={`absolute top-full left-0 w-full bg-white text-black shadow-lg lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
//                         ? `max-h-[${getMobileMenuHeight()}px] opacity-100`
//                         : 'max-h-0 opacity-0'
//                         }`}
//                     style={{ maxHeight: isMobileMenuOpen ? `${getMobileMenuHeight()}px` : '0px' }}
//                 >
//                     <div className="flex flex-col items-center text-center space-y-4 px-6 py-6">
//                         <Link
//                             to="/"
//                             onClick={() => setMobileMenuOpen(false)}
//                             className={`text-lg transition duration-300 font-medium  hover:text-[#c44307] ${Active === "/" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                         >
//                             Home
//                         </Link>

//                         {/* About Us Dropdown */}
//                         <div className='w-full'>
//                             <button
//                                 className={`w-full text-center flex items-center justify-center space-x-2 hover:text-[#c44307] transition-colors ${Active === "/about" || Active === "/scope" || Active === "/organizingCommittee" || Active === "/editorial" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     e.stopPropagation();
//                                     toggleMenu('about');
//                                 }}
//                             >
//                                 <span className='text-lg font-medium '>About Us</span>
//                                 <IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isOpen === "about" ? 'rotate-180' : 'rotate-0'}`} />
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen === 'about' ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="bg-white border border-gray-500 rounded-md p-2 space-y-2">
//                                     <Link
//                                         to="/about"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/about" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         About the Conference
//                                     </Link>
//                                     <Link
//                                         to="/scope"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/scope" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         Scope of the Conference
//                                     </Link>
//                                     <Link
//                                         to="/organizingCommittee"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/organizingCommittee" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         Organizing Committee
//                                     </Link>
//                                     <Link
//                                         to="/editorial"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/editorial" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         Editorial Board
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Author's Desk Dropdown */}
//                         <div className='w-full'>
//                             <button
//                                 className={`w-full text-center flex items-center justify-center space-x-2 hover:text-[#c44307] transition-colors ${Active === "/conferenceTracks" || Active === "/important-dates" || Active === "/paper-submission" ? 'text-[#C75D2C] font-semibold' : 'text-black'}`}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     e.stopPropagation();
//                                     toggleMenu('author');
//                                 }}
//                             >
//                                 <span className='text-lg font-medium '>Author's Desk</span>
//                                 <IoIosArrowDropdown className={`text-lg transition-transform duration-300 ${isOpen === "author" ? 'rotate-180' : 'rotate-0'}`} />
//                             </button>
//                             <div
//                                 className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen === 'author' ? 'max-h-44 opacity-100 mt-3' : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <div className="bg-white border border-gray-500 rounded-md p-2 space-y-2">
//                                     <Link
//                                         to="/conferenceTracks"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/conferenceTracks" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         Conference Tracks
//                                     </Link>
//                                     <Link
//                                         to="/important-dates"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/important-dates" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         Key Dates
//                                     </Link>
//                                     <Link
//                                         to="/paper-submission"
//                                         onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
//                                         className={`block py-2 hover:text-[#c44307] transition-colors font-medium ${Active === "/paper-submission" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                                     >
//                                         Paper Submission
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <Link
//                             to="/contact"
//                             onClick={() => setMobileMenuOpen(false)}
//                             className={`text-lg hover:text-[#c44307] transition-colors font-medium ${Active === "/contact" ? "text-[#C75D2C] font-semibold" : "text-black"}`}
//                         >
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Header