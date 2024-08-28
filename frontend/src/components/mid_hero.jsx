import Review from "../public/review.jpg";
const mid_hero = () => {
  return (
    <section className="bg-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8">
          For people making Impact
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-black text-white rounded-full">
            Data
          </span>
          <span className="px-4 py-2 bg-white rounded-full">Product</span>
          <span className="px-4 py-2 bg-white rounded-full">Mental Health</span>
          <span className="px-4 py-2 bg-white rounded-full">Study Abroad</span>
          <span className="px-4 py-2 bg-white rounded-full">Tech</span>
          <span className="px-4 py-2 bg-white rounded-full">Career</span>
          <span className="px-4 py-2 bg-white rounded-full">Creators</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-32 bg-pink-400 relative">
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  src={Review}
                  alt="Luna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-lg transform rotate-45"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Luna</h2>
              <p className="text-gray-600">
                helps you build a career in data science
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-32 bg-red-400 relative">
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  src={Review}
                  alt="Matt Mike"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Matt Mike</h2>
              <p className="text-gray-600">helps folks break into data</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-32 bg-blue-400 relative">
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  src={Review}
                  alt="Jessica"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white">
                <div className="w-full h-full transform rotate-45 border-2 border-white"></div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Jessica</h2>
              <p className="text-gray-600">
                global data leader in the energy industry
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-32 bg-green-400 relative">
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  src={Review}
                  alt="Albert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 w-16 h-16">
                <div className="w-full h-full transform -rotate-45 border-2 border-white"></div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Albert</h2>
              <p className="text-gray-600">
                helps people accelerate their career in data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default mid_hero;
