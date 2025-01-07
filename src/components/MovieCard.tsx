import { FaRegHeart, FaStar } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { movieType } from "../types/type";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/AppContext";

type MovieCardProps = {
  movie: movieType;
};
type FunctionProps = {
  handleAddWatchList: (id: number) => void;
  handleAddFavorites: (id: number) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { handleAddWatchList, handleAddFavorites } = useMainContext();
  return (
    <div className=" hover:scale-105 transition-transform duration-300 ease-in-out relative w-full  rounded-lg shadow-lg overflow-hidden bg-[#1a1a1a]">
      <figure className="relative  overflow-hidden rounded-t-lg">
        <a href="#" className="inset-0 absolute "></a>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.original_title} Poster`}
            className="w-full object-cover h-[270px]"
          />
        )}
        <Link
          to={`/moviedetails/${movie.id}`}
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
        ></Link>
        <div className="flex flex-col ">
          <div
            onClick={() => handleAddWatchList(movie.id)}
            className="absolute z-30 top-3 right-3 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer"
          >
            <CiBookmarkPlus className="text-white text-[23px]" />
          </div>
          <div
            onClick={() => handleAddFavorites(movie.id)}
            className="absolute z-30 top-12 right-3 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer"
          >
            <FaRegHeart className="text-white text-[20px]" />
          </div>
        </div>
      </figure>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <FaStar className="text-yellow-500" />
          <span className="text-white text-[16px] font-semibold">
            {movie.vote_average}
          </span>
        </div>

        <p className="line-clamp-1 text-white text-[17px] font-medium leading-tight mb-[3px]">
          {movie.original_title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
