import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data of popular maids
const popularMaidsData = [
    {
        id: 1,
        name: 'Anna Smith',
        description: 'Experienced maid specializing in home cleaning services.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        profileLink: '/maids/anna-smith', // Example link to maid's profile
        address: '123 Main St, City, State',
        salary: '$20/hour',
        experience: '5+ years',
        materialStatus: 'Single',
    },
    {
        id: 2,
        name: 'John Doe',
        description: 'Detail-oriented maid offering a wide range of cleaning skills.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        profileLink: '/maids/john-doe', // Example link to maid's profile
        address: '456 Oak Ave, City, State',
        salary: '$25/hour',
        experience: '8+ years',
        materialStatus: 'Married',
    },
    {
        id: 3,
        name: 'Emily Johnson',
        description: 'Professional maid with expertise in eco-friendly cleaning methods.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        profileLink: '/maids/emily-johnson', // Example link to maid's profile
        address: '789 Elm St, City, State',
        salary: '$22/hour',
        experience: '6+ years',
        materialStatus: 'Single',
    },
    {
        id: 4,
        name: 'Michael Brown',
        description: 'Reliable maid known for exceptional customer service.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        profileLink: '/maids/michael-brown', // Example link to maid's profile
        address: '101 Pine Blvd, City, State',
        salary: '$18/hour',
        experience: '4+ years',
        materialStatus: 'Married',
    },
    {
        id: 5,
        name: 'Sophia Wilson',
        description: 'Friendly and efficient maid with a passion for organization and cleanliness.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        profileLink: '/maids/sophia-wilson', // Example link to maid's profile
        address: '202 Maple Ln, City, State',
        salary: '$23/hour',
        experience: '7+ years',
        materialStatus: 'Single',
    },
    {
        id: 6,
        name: 'David Garcia',
        description: 'Hardworking maid offering specialized services tailored to client needs.',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        profileLink: '/maids/david-garcia', // Example link to maid's profile
        address: '303 Cedar Rd, City, State',
        salary: '$21/hour',
        experience: '5+ years',
        materialStatus: 'Married',
    },
];

const PopularMaids = () => {
    // State to hold maids data, can be replaced with useEffect and API call
    const [maids, setMaids] = useState(popularMaidsData);

    // useEffect example for fetching data from an API
    // useEffect(() => {
    //     const fetchPopularMaids = async () => {
    //         try {
    //             const response = await fetch('API_ENDPOINT');
    //             const data = await response.json();
    //             setMaids(data);
    //         } catch (error) {
    //             console.error('Error fetching popular maids:', error);
    //         }
    //     };
    //     fetchPopularMaids();
    // }, []);

    return (
        <section className="py-6 px-2 mx-auto max-w-screen-xl lg:py-12 lg:px-0 bg-white dark:bg-gray-900 shadow-md rounded-lg">
            <div className="mx-auto max-w-screen-lg">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Our Popular Maids</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {maids.map((maid) => (
                        <div
                            key={maid.id}
                            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-1"
                        >
                            <img className="w-full h-48 object-cover object-center" src={maid.image} alt={maid.name} />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{maid.name}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{maid.description}</p>
                                <div className="flex items-center mb-2">
                                    <svg
                                        className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                    </svg>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{maid.address}</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg
                                        className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{maid.salary}</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <svg
                                        className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{maid.experience}</p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-1.5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                                    </svg>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{maid.materialStatus}</p>
                                </div>
                                <Link
                                    to={maid.profileLink}
                                    className="block text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2.5 mt-3 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-blue-600"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularMaids;
