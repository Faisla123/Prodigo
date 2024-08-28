import Review from "../public/review.jpg";

const review = () => {
  return (
    <section className="bg-green-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
          People love using topmate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-800 mb-4">
              Love the integrations with Calendar, Zoom and WhatsApp. Makes my
              life easier!
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={Review}
                alt="Aishwarya Srinivasan"
              />
              <div>
                <p className="font-semibold">Aishwarya Srinivasan</p>
                <p className="text-sm text-gray-600">LinkedIn Top Voice</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-800 mb-4">
              The entire experience is just so seamless. My followers love it
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={Review}
                alt="Joerg Storm"
              />
              <div>
                <p className="font-semibold">Joerg Storm</p>
                <p className="text-sm text-gray-600">300K on LinkedIn</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-800 mb-4">
              Topmate is my go-to platform for scheduling 1:1 sessions and
              hosting webinars!
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={Review}
                alt="Xinran Waibel"
              />
              <div>
                <p className="font-semibold">Xinran Waibel</p>
                <p className="text-sm text-gray-600">
                  Founder of Data Engineer Things
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-800 mb-4">
              All my monetisation now happens in one place
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={Review}
                alt="Payal & Gaurav"
              />
              <div>
                <p className="font-semibold">Payal & Gaurav</p>
                <p className="text-sm text-gray-600">110K+ on Instagram</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-800 mb-4">
              The team is extremely helpful and cares a lot about feedback. They
              keep rolling out new features too!
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={Review}
                alt="Lorraine Lee"
              />
              <div>
                <p className="font-semibold">Lorraine Lee</p>
                <p className="text-sm text-gray-600">
                  Speaker, 320K on LinkedIn
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-800 mb-4">
              I love Topmate! It has made it seamless to schedule mentoring
              sessions! Big fan of Topmate's WhatsApp integration.
            </p>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={Review}
                alt="Jessica"
              />
              <div>
                <p className="font-semibold">Jessica</p>
                <p className="text-sm text-gray-600">
                  Global Data Lead in Energy Industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default review;
