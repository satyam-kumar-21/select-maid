import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false); // Close main menu on any nav link click
        setActiveDropdown(null); // Close all dropdowns on any nav link click
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 shadow-md bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 px-4 lg:px-6 py-3 z-50">
                <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-16 w-full">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8 sm:h-10" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <div className="flex items-center lg:order-2 space-x-3">
                        <Link
                            to="#"
                            className="text-white bg-blue-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Join us
                        </Link>
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`justify-between bg-white items-center w-full lg:flex lg:w-auto lg:order-1 ${
                            isMenuOpen ? 'block' : 'hidden'
                        }`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={handleNavLinkClick}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about-us"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={handleNavLinkClick}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => toggleDropdown('maids')}
                                    className="flex items-center py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 focus:outline-none"
                                >
                                    <span>Maids</span>
                                    <svg
                                        className="w-4 h-4 ml-1 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <ul
                                    className={`absolute left-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg ${
                                        activeDropdown === 'maids' ? 'block' : 'hidden'
                                    }`}
                                >
                                    <li>
                                        <Link
                                            to="/all-maids"
                                            onClick={handleNavLinkClick}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            All Maids
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/maids-direct"
                                            onClick={handleNavLinkClick}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            Maids (Direct)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/maids-agency"
                                            onClick={handleNavLinkClick}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            Maids (By Agency)
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    to="/jobs"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={handleNavLinkClick}
                                >
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/view-packages"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={handleNavLinkClick}
                                >
                                    View Packages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={handleNavLinkClick}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact-us"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={handleNavLinkClick}
                                >
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className="h-16 w-full">{/* Additional content */}</div>
        </>
    );
};

export default Header;
