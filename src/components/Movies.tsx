import { useMainContext } from "../context/AppContext";
import { movieType } from "../types/type";
import MovieCard from "./MovieCard";

export default function Movies() {
  const { filteredMovies} = useMainContext();
  return (
    <div className="w-[80%] flex flex-col">
      <div className="grid  grid-cols-2 sm:grid-cols-4 gap-[20px]">
        {filteredMovies.map((movie:movieType) => (
          <MovieCard movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}
