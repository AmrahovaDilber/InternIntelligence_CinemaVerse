import { useEffect } from "react";
import { useMainContext } from "../context/AppContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { fetchFavoritesMovies, favoritesMovies } = useMainContext();

  useEffect(() => {
    fetchFavoritesMovies();
  }, []);
  return (
    <div className="text-white  min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center mb-10">My Favorites</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4">
        {favoritesMovies.length > 0 ? (
          favoritesMovies.map((movie) => (
            <MovieCard  key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No movies in your favorites
          </p>
        )}
      </div>
    </div>
  );
};
export default Favorites;
