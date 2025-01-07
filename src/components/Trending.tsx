import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

import MovieCard from "./MovieCard";
import { fetchTrendingMovies, fetchTrendingTvShows } from "../../api";
import ActiveTab from "./ActiveTab";
import { movieType } from "../types/type";

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [tvShows, setTvShows] = useState<movieType[]>([]);
  const [activeTab, setActiveTab] = useState<string>("Movie");

  useEffect(() => {
    const fetchTrending = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchTvShows = async () => {
      const trendingTvShows = await fetchTrendingTvShows();
      setTvShows(trendingTvShows);
    };
    fetchTvShows();
  }, []);

  const listToDisplay = activeTab === "Movie" ? movies : tvShows;

  return (
    <div className="py-[80px] px-6 lg:px-0">
      <div className="flex items-center max-w-[1200px] mx-auto mb-12">
        <p className="text-[#e8ab29] text-[26px] sm:text-[30px] md:text-[40px] font-bold tracking-wider shadow-lg drop-shadow-md">
          Trending
        </p>
        <div className="flex items-center gap-3 ml-auto">
          {["Movie", "TV Show"].map((tab) => (
            <ActiveTab
              key={tab} 
              tab={tab}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ))}
        </div>
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
          {listToDisplay.map((item: movieType) => (
            <SwiperSlide key={item.id}>
              <MovieCard movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
