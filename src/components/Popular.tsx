import { useEffect, useState } from "react";
import { movieType } from "../types/type";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  fetchMoviesForRent,
  fetchMoviesOnTheaters,
  fetchPopularMovies,
} from "../../api";
import ActiveTab from "./ActiveTab";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<movieType[]>([]);
  const [activeTab, setActiveTab] = useState<string>("Streaming");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movies = [];
        if (activeTab === "Streaming") {
          movies = await fetchPopularMovies();
        } else if (activeTab === "In Theaters") {
          movies = await fetchMoviesOnTheaters();
        } else if (activeTab === "For Rent") {
          movies = await fetchMoviesForRent();
        }
        setPopularMovies(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [activeTab]);

  return (
    <div className="px-6 lg:px-0">
      <div className="flex items-center gap-6 max-w-[1200px] mx-auto mb-12">
        <p className="text-[#e8ab29] text-[26px] sm:text-[30px] md:text-[40px] font-bold tracking-wider shadow-lg drop-shadow-md">
          Popular
        </p>
        <div className="flex items-center gap-3 ml-auto">
          {["Streaming", "For Rent", "In Theaters"].map((tab) => (
            <ActiveTab
              tab={tab}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></ActiveTab>
          ))}
        </div>
      </div>
      <div className="flex flex-col max-w-[1200px] mx-auto w-full  relative">
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
          {popularMovies.map((movie: movieType) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
