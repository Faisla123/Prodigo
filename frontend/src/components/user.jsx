import User from "../public/user.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

const user = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/service");
  };

  // const handleNavigate = () => {
  //   navigate("/service");
  // };

  return (
    <div className="min-h-screen bg-[#F5F3EF] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* User Profile Section */}
          <div
            className="w-full md:w-1/3  rounded-lg p-6 text-white"
            style={{ backgroundColor: "#E25B45" }}
          >
            <img
              src={User}
              alt="User avatar"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-center mb-2">laskhn</h1>
            <p className="text-center text-sm opacity-80">
              Tap here to write a short bio
            </p>
          </div>

          {/* Main Content Section */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Highlight and Testimonial */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-white rounded-lg p-4 text-gray-400 text-left hover:bg-gray-50 transition duration-300">
                <span className="text-2xl mr-2">+</span> Add a highlight
              </button>
              <button
                onClick={handleNavigate}
                className="bg-white rounded-lg p-4 text-gray-400 text-left hover:bg-gray-50 transition duration-300"
              >
                <span className="text-2xl mr-2">+</span> Add a Service
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-black text-white rounded-full">
                All
              </button>
              <button className="px-4 py-2 bg-[#F5F3EF] text-black rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300">
                1:1 Call
              </button>
              <button className="px-4 py-2 bg-[#F5F3EF] text-black rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300">
                Package
              </button>
            </div>

            {/* Pricing Cards */}
            <div className="space-y-4">
              {/* Interview prep & tips */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Popular
                    </span>
                    <h2 className="text-xl font-semibold mt-2">
                      Interview prep & tips
                    </h2>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-100 rounded p-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>30 mins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Video Meeting</span>
                    <button className="bg-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300">
                      ₹800+ →
                    </button>
                  </div>
                </div>
              </div>

              {/* Mock interview */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Mock interview</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-100 rounded p-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>60 mins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Video Meeting</span>
                    <button className="bg-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300">
                      ₹1,300+ →
                    </button>
                  </div>
                </div>
              </div>

              {/* Discovery Call */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Discovery Call</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-100 rounded p-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>15 mins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Video Meeting</span>
                    <button className="bg-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300">
                      ₹0+ →
                    </button>
                  </div>
                </div>
              </div>

              {/* bjwbjweb */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Hello Call</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-100 rounded p-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>60 mins</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Video Meeting</span>
                    <button className="bg-white px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300">
                      ₹10+ →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default user;
