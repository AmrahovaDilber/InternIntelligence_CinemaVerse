import { useEffect, useState } from "react";
import { castType, crewType, movieDetailType } from "../types/type";
import CrewItem from "./CrewItem";
import FullCastItem from "./FullCastItem";

interface FullCastCrewProps {
  slug: number;
  movieDetails: movieDetailType;
}

const FullCastCrew: React.FC<FullCastCrewProps> = ({ slug, movieDetails }) => {
  const [castItems, setCastItems] = useState<castType[]>([]);
  const [crewItems, setCrewItems] = useState<crewType[]>([]);

  useEffect(() => {
    const fetchCastCrowItems = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${slug}/credits?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
        );
        const data = await response.json();

        if (Array.isArray(data.cast)) {
          setCastItems(data.cast);
        } else {
          console.error("Cast data is not an array", data);
          setCastItems([]);
        }

        if (Array.isArray(data.crew)) {
          setCrewItems(data.crew);
        }
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchCastCrowItems();
  }, [slug]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="flex gap-8 mb-16 items-start">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
          className="w-40 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
        <div className="pt-2">
          <h1 className="text-3xl font-medium text-gray-900 mb-2">
            {movieDetails.original_title}
          </h1>
          <p className="text-gray-500">
            Released: {new Date(movieDetails.release_date).getFullYear()}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-24">
        <div>
          <h2
            className="text-xl font-medium bg-[#1a1a1a] text-white mb-6 
                         rounded-md shadow-lg relative overflow-hidden
                         group cursor-default
                         transition-all duration-300 ease-in-out
                         hover:shadow-xl"
          >
            <div
              className="absolute inset-0 bg-[#e8ab29] 
                          transform -translate-x-full group-hover:translate-x-0 
                          transition-transform duration-500 ease-in-out"
            />
            <span className="relative z-10 p-4 block group-hover:text-[#1a1a1a]">
              Cast
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e8ab29]" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {castItems.map((castItem) => (
              <FullCastItem key={castItem.cast_id} castItem={castItem} />
            ))}
          </div>
        </div>

        <div>
          <h2
            className="text-xl font-medium bg-[#1a1a1a] text-white mb-6 
                         rounded-md shadow-lg relative overflow-hidden
                         group cursor-default
                         transition-all duration-300 ease-in-out
                         hover:shadow-xl"
          >
            <div
              className="absolute inset-0 bg-[#e8ab29] 
                          transform -translate-x-full group-hover:translate-x-0 
                          transition-transform duration-500 ease-in-out"
            />
            <span className="relative z-10 p-4 block group-hover:text-[#1a1a1a]">
              Crew
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e8ab29]" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {crewItems.map((crewItem, index) => (
              <CrewItem key={index} crewItem={crewItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCastCrew;
