import { useEffect, useState } from "react";
import { castType } from "../types/type";
import CastItem from "./CastItem";

import { Link } from "react-router-dom";
import { fetchCastItems } from "../../api";
interface CastListProps {
  slug: number;
}

const CastList: React.FC<CastListProps> = ({ slug }) => {
  const [castItems, setCastItems] = useState<castType[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchCastItems(slug);
        if (Array.isArray(data)) {
          setCastItems(data);
        } else {
          console.error("Cast data is not an array", data);
          setCastItems([]);
        }
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchCast();
  }, [slug]);

  return (
    <div className="w-full py-[100px] max-w-[1200px] mx-auto relative px-6 lg:px-0">
      <div className="flex justify-between items-center mb-12">
        <p className="text-[#e8ab29] text-[24px] sm:text-[30px] md:text-[40px] font-semibold ">
          Cast Of The Film
        </p>
        <Link
          to={`/castcrew/${slug}`}
          className="text-[#e8ab29] text-[16px] sm:text-[20px]  font-semibold"
        >
          Full Cast & Crew
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {castItems.slice(0, 6).map((castItem) => (
          <CastItem key={castItem.cast_id} castItem={castItem} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
