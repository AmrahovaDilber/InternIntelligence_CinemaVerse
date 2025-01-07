import bg from "../assets/images/bg-image.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <figure className="absolute inset-0 w-full h-full">
        <img src={bg} alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </figure>

      <div className="relative max-w-[1200px] mx-auto flex items-center h-full px-4">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Welcome to
            <span className="ml-[10px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Our Movie Website
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300">
            Discover a world of movies at your fingertips. Dive into our
            collection and find your next favorite!
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
              Watch Now
            </button>
            <button className="bg-transparent border border-gray-300 hover:bg-gray-700 text-gray-300 hover:text-white text-lg font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
              Browse Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
