import { Link } from "react-router-dom";
import { castType } from "../types/type";

const FullCastItem: React.FC<{ castItem: castType }> = ({ castItem }) => {
  return (
    <Link to={`/person/${castItem.cast_id}`} className="cursor-pointer">
      <div className="flex items-center space-x-4 py-3 border-b border-r border-gray-200">
        <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
          <img
            src={`https://image.tmdb.org/t/p/w500${castItem.profile_path}`}
            alt={castItem.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900">
            {castItem.name}
          </p>
          <p className="text-sm text-gray-600">{castItem.character}</p>
        </div>
      </div>
    </Link>
  );
};

export default FullCastItem;
