import { useParams } from "react-router-dom";
import FullCastCrew from "../components/FullCastCrew";
import { useEffect, useState } from "react";
import { movieDetailType } from "../types/type";

const CastCrewPage: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<movieDetailType | null>(null);
  const { slug } = useParams();
  const movieId = slug ? parseInt(slug) : null;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${slug}?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [slug, movieId]);

  if (!movieDetails || !movieId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 w-full h-full">
      <FullCastCrew movieDetails={movieDetails} slug={movieId} />
    </div>
  );
};

export default CastCrewPage;
