// MovieMediaDetails.jsx
import { useEffect, useState } from "react";
import { fetchMovieMediaDetails } from "../../api";
import { movieDetailType } from "../types/type";

interface MovieDetailsProps{
  movieDetails:movieDetailType
}

const MovieMediaDetails:React.FC<MovieDetailsProps>=({ movieDetails })=> {
  const [mediaDetails, setMediaDetails] = useState(null);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      const data = await fetchMovieMediaDetails(movieDetails.id);
      setMediaDetails(data);
    };
    fetchMediaDetails();
  }, [movieDetails.id]);

  if (!mediaDetails) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Media Details</h1>

      {/* Videos Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mediaDetails.videos.results.map((video) => (
            <div key={video.id} className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-lg font-medium mb-2">{video.name}</h3>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                className="w-full h-48 md:h-64"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Backdrops Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Backdrops</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mediaDetails.images.backdrops.map((backdrop, index) => (
            <div key={index} className="overflow-hidden rounded shadow">
              <img
                src={`https://image.tmdb.org/t/p/w500${backdrop.file_path}`}
                alt="Backdrop"
                className="w-full h-32 md:h-48 object-cover hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Posters Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Posters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mediaDetails.images.posters.map((poster, index) => (
            <div key={index} className="overflow-hidden rounded shadow">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
                alt="Poster"
                className="w-full h-32 md:h-48 object-cover hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MovieMediaDetails;