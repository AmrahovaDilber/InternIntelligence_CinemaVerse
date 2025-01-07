import { IoTvOutline, IoFilmOutline } from "react-icons/io5";
import { useMainContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const tvShowItems = ["PopularTv", "Airing Today", "On TV", "Top Rated Tv"];
const movieItems = [
  "PopularMovie",
  "Now Playing",
  "Upcoming",
  "Top Rated Movies",
];

const Dropdown = () => {
  const { handleFilter } = useMainContext();
  return (
    <div className="flex items-center gap-[40px]">
      {/* TV Shows Dropdown */}
      <div className="flex flex-col relative group">
        <div className="flex items-center gap-1 hover:text-[#e8ab29]">
          <IoTvOutline className="text-lg" />
          <p>TV Shows</p>
        </div>
        <div className="bg-white hidden group-hover:block text-[#1a1a1a] absolute p-3 z-20 top-[25px] w-[150px] left-0 shadow-md rounded-lg transition-opacity duration-300">
          {tvShowItems.map((item, index) => (
            <Link to={`/movies/${item}`}>
              <button
                onClick={() => handleFilter(item)}
                key={index}
                className="border-b pb-2 mb-2 font-medium text-[15px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer"
              >
                {item}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Movies Dropdown */}
      <div className="flex flex-col relative group">
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#e8ab29] group-hover:text-[#ffc107] transition-colors duration-200">
          <IoFilmOutline className="text-lg" />
          <p className="font-semibold text-lg">Movies</p>
        </div>
        <div className="bg-white hidden group-hover:block text-[#1a1a1a] absolute p-3 z-20 top-[25px] w-[150px] left-0 shadow-md rounded-lg transition-opacity duration-300">
          {movieItems.map((item, index) => (
            <Link to={`/movies/${item}`}>
              <button
                onClick={() => handleFilter(item)}
                key={index}
                className="border-b pb-2 mb-2 font-medium text-[15px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer"
              >
                {item}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
