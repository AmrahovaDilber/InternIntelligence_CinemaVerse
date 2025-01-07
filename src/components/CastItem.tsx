import { Link } from "react-router-dom";
import { castType } from "../types/type";



const CastItem: React.FC<{ castItem: castType }> = ({ castItem }) => {
  return (
    <Link to={`/person/${castItem.cast_id}`} className="cursor-pointer">
      <div className="flex flex-col items-center px-4 py-5 bg-[#1a1a1a] rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
        <figure className="relative mb-3 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-gray-800 shadow-md hover:border-[#e8ab29] transition-all duration-300 ease-in-out">
          <img
            src={`https://image.tmdb.org/t/p/w500${castItem.profile_path}`}
            className="w-full h-full object-cover"
            alt={castItem.name}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
        </figure>
        <p className="mb-1 text-sm sm:text-[15px] text-white font-semibold hover:text-[#e8ab29] transition-colors duration-200">
          {castItem.name}
        </p>
        <p className="text-xs sm:text-sm text-gray-400 italic">{castItem.character}</p>
      </div>
    </Link>
  );
};

export default CastItem;
