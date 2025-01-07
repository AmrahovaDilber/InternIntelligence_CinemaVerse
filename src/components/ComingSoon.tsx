import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import "../index.css";

import MovieCard from "./MovieCard";
import { fetchComingSoonMovies } from "../../api";
import { movieType } from "../types/type";

const ComingSoon: React.FC = () => {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const topRatedMovies = await fetchComingSoonMovies();
      setMovies(topRatedMovies);
    };
    fetchTrending();
  }, []);

  return (
    <div className="pb-[100px] px-6 lg:px-0">
      <div className="flex items-center  max-w-[1200px] mx-auto mb-12 ">
        <p className="text-[#e8ab29] text-[26px] sm:text-[30px] md:text-[40px] font-bold  tracking-wider shadow-lg drop-shadow-md">
          Coming soon
        </p>
      </div>

      <div className="flex flex-col max-w-[1200px] mx-auto w-full relative">
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
          {movies?.map((item: movieType) => (
            <SwiperSlide key={item.id}>
              <MovieCard movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ComingSoon;
