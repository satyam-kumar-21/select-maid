import React from 'react';
import { useParams } from 'react-router-dom';

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
        locality: 'Delhi NCR',
        nationality: 'India',
        readyToWork: 'Delhi NCR South Delhi Delhi India',
        ethnicity: 'Chhattisgarh',
        maritalStatus: 'Separated',
        gender: 'Female',
        religion: 'Hindu',
        expectedSalary: 'INR 12000',
        education: 'Below 8th',
        dateOfBirth: '1988-08-29 | 33 Years Old',
        passportDetails: {
            passportAvailable: 'No',
            visaType: 'None',
            visaExpiryDate: '',
            visaAvailable: '',
        },
        languages: {
            hindi: {
                read: true,
                write: true,
                spoken: true,
            },
        },
        documents: [
            { name: 'Address Proof Aadhaar Card', description: 'Aadhaar Card' },
            { name: 'ID Proof', description: 'PAN Card' },
            { name: 'PCC', description: 'Yes' },
            { name: 'Verification', description: 'No' },
            { name: 'Thumb/Figures Impression', description: 'N.A.' },
        ],
        skills: [
            'Baby care',
            'Pet care',
            'First Aid Diploma',
            'Cooking',
            'Adult Care',
            'Patient Care',
            'Care for Infant',
            'Nursing',
            'Cooking North Indian Dishes',
        ],
    },
    // Add more maid objects as needed
];

const Profile = () => {
    // Fetching maid ID from URL params (React Router)
    const { maidId } = useParams();

    // Find the maid with the matching ID
    const maid = popularMaidsData.find((maid) => maid.id === parseInt(maidId));

    // If maid is not found, handle this scenario (optional)
    if (!maid) {
        return <p>Maid not found!</p>;
    }

    return (
        <section className="py-6 px-2 mx-auto max-w-screen-xl lg:py-12 lg:px-0 bg-white dark:bg-gray-900 shadow-md rounded-lg">
            <div className="mx-auto max-w-screen-lg">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-1">
                    <img className="w-full h-80 object-cover object-center" src={maid.image} alt={maid.name} />
                    <div className="p-4">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{maid.name}</h2>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{maid.description}</p>
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
                        <div className="flex items-center mb-2">
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
                        {/* Additional details */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Additional Details</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Locality:</span> {maid.locality}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Nationality:</span> {maid.nationality}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Ready To Work:</span> {maid.readyToWork}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Ethnicity:</span> {maid.ethnicity}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Marital Status:</span> {maid.maritalStatus}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Gender:</span> {maid.gender}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Religion:</span> {maid.religion}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Expected salary:</span> {maid.expectedSalary}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Experience:</span> {maid.experience}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Education:</span> {maid.education}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Date Of Birth:</span> {maid.dateOfBirth}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Passport/Visa details */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Passport / Visa Details</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Passport Available:</span> {maid.passportDetails.passportAvailable}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Visa Type:</span> {maid.passportDetails.visaType}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Visa Expiry Date:</span> {maid.passportDetails.visaExpiryDate || 'Not specified'}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Visa Available:</span> {maid.passportDetails.visaAvailable || 'Not specified'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Languages */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        <span className="font-semibold">Hindi:</span> {maid.languages.hindi.read && 'Read, '}{maid.languages.hindi.write && 'Write, '}{maid.languages.hindi.spoken && 'Spoken'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Documents */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Documents I Have</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div>
                                    {maid.documents.map((document, index) => (
                                        <p key={index} className="text-gray-700 dark:text-gray-400">
                                            <span className="font-semibold">{document.name}:</span> {document.description}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Skills */}
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Skills</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div>
                                    {maid.skills.map((skill, index) => (
                                        <p key={index} className="text-gray-700 dark:text-gray-400">
                                            {skill}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
