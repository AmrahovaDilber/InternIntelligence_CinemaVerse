import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import CastList from "../components/CastList";
import { useEffect, useState } from "react";
import { movieDetailType } from "../types/type";
import SimilarMovies from "../components/SimilarMovies";
import ReviewDetails from "../components/ReviewDetails";
import { fetchMovieDetails } from "../../api";

const MovieDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [movieDetails, setMovieDetails] = useState<movieDetailType[]>([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const data = await fetchMovieDetails(slug);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (slug) {
      fetchMovieDetail();
    }
  }, [slug]);

  const movieId = slug ? Number(slug) : NaN;

  if (isNaN(movieId)) {
    return <div>Invalid movie ID</div>;
  }

  return (
    <div className="w-full h-full">
      <MovieDetails movieDetails={movieDetails} slug={movieId} />
      <CastList movieDetails={movieDetails} slug={movieId} />
      <SimilarMovies movieDetails={movieDetails}></SimilarMovies>
      <ReviewDetails movieDetails={movieDetails}></ReviewDetails>
      {/* <MovieMediaDetails movieDetails={movieDetails}></MovieMediaDetails> */}
    </div>
  );
};

export default MovieDetailsPage;
