import Review from "../public/review.jpg";

const oneonone = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column: Booking Widget */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-pink-100 rounded-3xl p-6 max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full mr-4">
                    <img
                      src={Review}
                      alt=""
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Book session</h2>
                    <p className="text-gray-600 text-sm">Select date & time</p>
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fri</p>
                    <p className="font-semibold">29 Sep</p>
                  </div>
                  <div className="text-center border border-gray-300 rounded px-2 py-1">
                    <p className="text-xs text-gray-500">Sat</p>
                    <p className="font-semibold">30 Sep</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Sun</p>
                    <p className="font-semibold">31 Sep</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Mon</p>
                    <p className="font-semibold">01 Oct</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-gray-500">Next available</p>
                  <p className="font-semibold">07:00pm, Tue 29st</p>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-lg font-semibold">
                  Book
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Service Offerings */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-6">
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 text-orange-500 font-semibold mr-2">
                    01
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-orange-500">
                      Offer 1:1 sessions
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Mentorship sessions, consultations, discovery calls - do
                      what you do best. We take care of everything else
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 text-gray-900 font-semibold mr-2">
                    02
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Setup Priority DM in seconds
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 text-gray-900 font-semibold mr-2">
                    03
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Host a webinar
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 text-gray-900 font-semibold mr-2">
                    04
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Bundle your services
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 text-gray-900 font-semibold mr-2">
                    05
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Sell courses & products
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="flex-shrink-0 text-gray-900 font-semibold mr-2">
                    06
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Sell a subscription
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default oneonone;
