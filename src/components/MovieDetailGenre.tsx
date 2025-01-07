import { genreType, movieDetailType } from "../types/type";

interface GenreProps {
  moviedetails: movieDetailType;
}

const MovieDetailGenre: React.FC<GenreProps> = ({ moviedetails }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {moviedetails.genres?.map((genre: genreType) => (
        <span
          key={genre.id}
          className="bg-gray-800 px-3 py-1 rounded-full text-sm"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};
export default MovieDetailGenre;
