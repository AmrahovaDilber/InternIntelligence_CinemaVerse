import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchSimilarMovies } from "../../api";
import MovieCard from "./MovieCard";
import { movieDetailType } from "../types/type";

const SimilarMovies: React.FC<movieDetailType> = ({ movieDetails }) => {
  const [allSimilarMovies, setAllSimilarMovies] = useState([]);

  useEffect(() => {
    const similarMovies = async () => {
      const data = await fetchSimilarMovies(movieDetails.id);
      setAllSimilarMovies(data);
    };
    similarMovies();
  }, [movieDetails.id]);

  return (
    <div className="flex flex-col px-6 lg:px-0 max-w-[1200px] mx-auto w-full relative">
      <p className="text-[#e8ab29] mb-12 text-[26px] sm:text-[30px] md:text-[40px] font-semibold">
        Similar Movies
      </p>
      <div className="w-full max-w-[1200px] mx-auto">
        {allSimilarMovies.length > 0 ? (
          <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
          >
            {allSimilarMovies.map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-white italic py-[200px]">
            No similar movies available.
          </p>
        )}
      </div>
    </div>
  );
};

export default SimilarMovies;
