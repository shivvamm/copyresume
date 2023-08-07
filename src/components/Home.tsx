import React from 'react';
import { Link } from 'react-router-dom';
import templateLogo from '../assets/template4.svg';
import uploadLogo from '../assets/upload2.svg';
import '../App.css';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-auto w-full">
            <div className="bg-gray-800 text-white p-6 rounded-md mb-6 mt-6 text-center">
                <p className="text-xl font-semibold">
                    The best Resume making tool you can find on the internet
                    for creating a resume from a perfect template or uploading your own
                </p>
            </div>

            <div className="flex flex-wrap justify-center">

                <Link to="/upload" className="mr-6 sm:mr-10">
                    <img src={uploadLogo} className="logo h-44 mt-4" alt="Upload and edit" />
                    <p className="text-lg text-center font-semibold mb-6">Upload and Edit</p>
                </Link>

                <Link to="/template">
                    <img src={templateLogo} className="logo h-44 mt-4" alt="Create from template" />
                    <p className="text-lg text-center font-semibold  mb-6">Create from Template</p>
                </Link>

            </div>
            <div className="flex flex-col items-center justify-center h-auto w-full">
                <div className="flex w-full justify-center text-center">
                    <div className="bg-gray-800 text-white p-6 rounded-md mr-1 w-1/3">
                        <div className="mb-4">
                            <p className="text-lg">Create and edit your resume by uploading a sample pdf format of your
                                resume and if you have a word format its better to use microsoft word</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 text-white p-6 rounded-md ml-1 w-1/3">
                        <div className="mb-4">
                            <p className=" text-lg">Create and edit your resume by selecting from a big collection of best ATS socred
                                resume that can increase your possibality of getting your dream job </p>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-500 w-1/2 mt-4 mb-2" />
            </div>
        </div>
    );
}

export default Home;
