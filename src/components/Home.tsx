import { Link } from 'react-router-dom';
import templateLogo from '../assets/template4.svg';
import uploadLogo from '../assets/upload2.svg';
import '../App.css';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-auto w-full">
            <div className="w-2/3 px-8 py-4 bg-white rounded-lg mt-3 shadow-md dark:bg-gray-800 text-center">
                <p className="text-3xl font-semibold">
                    The Ultimate Resume Builder & Editor
                </p>
                <p className="font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                    Elevate your resume with our cutting-edge tools. Choose from templates or upload your own, all with an ATS-friendly touch.
                </p>
            </div>

            <div className="flex flex-wrap justify-center">

                <Link to="/upload" className="mr-6 sm:mr-10">
                    <img src={uploadLogo} className="logo h-44 mt-4" alt="Upload and edit" />
                    <p className="text-lg text-center font-semibold mb-5">Upload and Edit</p>
                </Link>

                <Link to="/template">
                    <img src={templateLogo} className="logo h-44 mt-4" alt="Create from template" />
                    <p className="text-lg text-center font-semibold  mb-5">Create from Template</p>
                </Link>

            </div>
            <div className="flex flex-col items-center justify-center h-auto w-full">
                <div className="flex w-full justify-center text-center">
                    <div className="bg-gray-800 text-white p-6 rounded-md mr-1 w-1/3 bg-white rounded-lg mt-6 shadow-md dark:bg-gray-800">
                        <div className="mb-1">
                            <p className="text-lg"> Craft your resume by uploading a PDF or utilizing Microsoft Word.
                                Our tools ensure ATS compatibility and modern formatting.</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 text-white p-6 rounded-md ml-1 w-1/3 bg-white rounded-lg mt-6 shadow-md dark:bg-gray-800">
                        <div className="mb-1">
                            <p className=" text-lg"> Stand out with AI-enhanced templates. Select from a
                                range of ATS-scored designs tailored to your industry and role.</p>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-500 w-1/2 mt-4 mb-2" />
            </div>
        </div >
    );
}

export default Home;
