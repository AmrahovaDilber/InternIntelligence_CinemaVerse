import { FaPlay, FaStar } from "react-icons/fa";
import { movieDetailType } from "../types/type";
import { FaHeart } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { useState } from "react";
import VideoModal from "./VideoModal";
import { getMovieTrailers } from "../../api";
import { useMainContext } from "../context/AppContext";
import MovieCompanies from "./MovieCompanies";
import MovieDetailGenre from "./MovieDetailGenre";

interface movieCard {
  moviedetails: movieDetailType;
  slug: number;
}

const MovieDetailCard: React.FC<movieCard> = ({ moviedetails }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const { handleAddWatchList, handleAddFavorites } = useMainContext();

  const handlePlayTrailer = async () => {
    try {
      const trailers = await getMovieTrailers(moviedetails.id);
      const youtubeTrailer = trailers.find(
        (trailer) => trailer.site === "YouTube" && trailer.type === "Trailer"
      );

      if (youtubeTrailer) {
        setYoutubeUrl(`https://www.youtube.com/embed/${youtubeTrailer.key}`);
        setIsModalOpen(true);
      } else {
        alert("Trailer not available");
      }
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto bg-[#1a1a1a] shadow-2xl overflow-hidden">
        <div
          className="w-full h-[350px] relative bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moviedetails.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-6 -mt-32 relative z-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
              alt={moviedetails.original_title}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/3 lg:w-3/4 sm:mt-20 text-white">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {moviedetails.original_title}
              </h1>
              {moviedetails.tagline && (
                <p className="italic text-gray-400 mb-4">
                  "{moviedetails.tagline}"
                </p>
              )}

              {/* Rating */}
              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-500 mr-2" />
                <span className="font-semibold text-lg">
                  {moviedetails.vote_average} / 10
                </span>
                <span className="text-gray-400 ml-2">
                  ({moviedetails.vote_count} votes)
                </span>
              </div>

              {/* Release Date */}
              {moviedetails.release_date && (
                <p className="text-gray-400 mb-2">
                  Release Date:{" "}
                  {new Date(moviedetails.release_date).toLocaleDateString()}
                </p>
              )}

              {/* Genres */}
              {moviedetails.genres && (
                <MovieDetailGenre
                  moviedetails={moviedetails}
                ></MovieDetailGenre>
              )}

              <div className="flex items-center gap-4 my-4">
                {/* Bookmark Button */}
                <button
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow hover:scale-105 transition-transform duration-300"
                  aria-label="Add to Bookmark"
                  onClick={() => handleAddWatchList(moviedetails.id)}
                >
                  <CiBookmarkPlus className="text-xl text-gray-600" />
                </button>

                {/* Heart Button */}
                <button
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow hover:scale-105 transition-transform duration-300"
                  aria-label="Add to Favorites"
                  onClick={() => handleAddFavorites(moviedetails.id)}
                >
                  <FaHeart className="text-xl text-gray-600" />
                </button>

                {/* Play Trailer Button */}
                <button
                  onClick={handlePlayTrailer}
                  className="flex items-center gap-2 px-4 py-2 bg-[#e8ab29] text-white rounded-full shadow hover:shadow-lg transition-all duration-300"
                >
                  <FaPlay className="text-lg" />
                  <span className="font-semibold">Play Trailer</span>
                </button>

                {isModalOpen && (
                  <VideoModal
                    youtubeUrl={youtubeUrl}
                    onClose={() => setIsModalOpen(false)}
                  />
                )}
              </div>

              {/* Overview */}
              <p className="text-gray-300 mb-6">{moviedetails.overview}</p>
            </div>

            {/* Production Companies */}
            {moviedetails.production_companies &&
              moviedetails.production_companies.length > 0 && (
                <MovieCompanies moviedetails={moviedetails}></MovieCompanies>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
