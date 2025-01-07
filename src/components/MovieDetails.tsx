import { movieDetailType } from "../types/type";
import MovieDetailCard from "./MovieDetailCard";

const MovieDetails: React.FC<{ movieDetails:movieDetailType}> = ({ movieDetails }) => {
  return (
    <div>
      {movieDetails ? (
        <MovieDetailCard moviedetails={movieDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
