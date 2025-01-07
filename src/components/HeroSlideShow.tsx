import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlideshow = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f21a6bf3bfe42bde02aa229e67732bb8');
      const data = await response.json();
      setMovies(data.results);
    };
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [movies]);

  if (!movies.length) return null; 

  const currentMovie = movies[currentIndex];

    return (
        <Link to={`/moviedetails/${currentMovie.id}`}>
            
            <div className="relative w-full max-w-[1200px] mx-auto h-[450px] mt-[100px] overflow-hidden">
          
          <div
            className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 transition-all duration-1000"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-20"></div>
          <div className="relative z-20 flex items-center justify-center h-full p-6 text-white">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight transition-all duration-500 transform hover:scale-105">
                {currentMovie.title}
              </h1>
              <p className="mt-4 text-lg md:text-2xl opacity-80 transition-all duration-500 hover:opacity-100">{currentMovie.overview.slice(0, 200)}...</p>
              
              {/* Call-to-Action Buttons */}
              <div className="mt-6 space-x-4">
              
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900">
                  More Info
                </button>
              </div>
            </div>
          </div>
    
          {/* Fading Animation */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </Link>
    
  );
};

export default HeroSlideshow;
