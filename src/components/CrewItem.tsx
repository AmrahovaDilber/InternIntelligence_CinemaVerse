import { Link } from "react-router-dom";
import { crewType } from "../types/type";

const CrewItem: React.FC<{ crewItem: crewType }> = ({ crewItem }) => {
  return (
    <Link to={`/person/${crewItem.id}`} className="cursor-pointer">
      <div className="flex items-center space-x-4 py-3 border-b border-r border-gray-200">
      <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
        <img
          src={`https://image.tmdb.org/t/p/w500${crewItem.profile_path}`}
          alt={crewItem.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-base font-semibold text-gray-900">{crewItem.name}</p>
        <p className="text-sm text-gray-600">{crewItem.job}</p>
      </div>
    </div>
    </Link>
    
  );
};

export default CrewItem;
