import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    return (
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                        Optimize your website for
                        <span className="text-indigo-600"> Search engine</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <Link
                        to="/all-maids"
                        className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
                    >
                        All maids
                    </Link>
                    <Link
                        to="/jobs"
                        className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
                    >
                        All jobs
                    </Link>
                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;
