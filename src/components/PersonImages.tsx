import { useEffect, useState } from "react";
import { fetchPersonPhotos } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PersonImages({ id }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await fetchPersonPhotos(id);
      setProfiles(data?.profiles || []);
    };
    fetchProfiles();
  }, [id]);

  return (
    <div className="py-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Photos</h2>
      {profiles.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          grabCursor={true} 
          className="w-full"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide
              key={index}
              className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-grab"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${profile.file_path}`}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500 text-center">No photos available.</p>
      )}
    </div>
  );
}
