import Image from "../public/sliderimg.png";
import Review from "../public/review.jpg";

const hero = () => {
  return (
    <section
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F8F7F2" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Start your
              <br />
              side hustle
              <br />
              today
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Turn your passion and knowledge into a thriving business.
              <br />
              Help your audience get ahead in life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#"
                className="bg-black text-white py-3 px-6 rounded-full text-center font-semibold flex items-center justify-center hover:bg-gray-800 transition duration-300"
              >
                Start My Page
                <span className="ml-2">→</span>
              </a>
              <a
                href="#"
                className="border border-gray-300 py-3 px-6 rounded-full text-center font-semibold flex items-center justify-center hover:bg-gray-100 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch The Film
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={Review}
                  alt="Creator"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={Review}
                  alt="Creator"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={Review}
                  alt="Creator"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={Review}
                  alt="Creator"
                />
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">
                  5/5 by 1000+ creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src={Image}
                alt="Woman smiling"
                className="w-4/5 rounded-3xl"
              />
              <div className="absolute -top-4  w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8  text-pink-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default hero;
