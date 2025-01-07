import  { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useMainContext } from "../context/AppContext";

export default function WatchListPage() {
  const { watchListMovies, fetchWatchListMovies } = useMainContext();

  useEffect(() => {
    fetchWatchListMovies();
  }, []);

  return (
    <div className="text-white  min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center mb-10">My Watchlist</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4">
        {watchListMovies.length > 0 ? (
          watchListMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center col-span-full text-gray-400">No movies in your watchlist</p>
        )}
      </div>
    </div>
  );
}
