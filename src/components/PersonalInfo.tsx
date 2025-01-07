import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaVenusMars,
} from "react-icons/fa";
import { personType } from "../types/type";

interface PROPS {
  personInfo: personType;
}

const PersonalInfo: React.FC<PROPS> = ({ personInfo }) => {
  return (
    <div className="mt-6 space-y-3">
      <p className="font-semibold text-[30px]">Personal Info</p>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
        <FaUser className="w-5 h-5 text-[#e8ab29]" />
        <span className="text-sm text-gray-600">
          Known For: {personInfo.known_for_department}
        </span>
      </div>

      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
        <FaVenusMars className="w-5 h-5 text-[#e8ab29]" />
        <span className="text-sm text-gray-600">
          Gender: {personInfo.gender}
        </span>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
        <FaCalendarAlt className="w-5 h-5 text-[#e8ab29]" />
        <span className="text-sm text-gray-600">{personInfo.birthday}</span>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
        <FaMapMarkerAlt className="w-5 h-5 text-[#e8ab29]" />
        <span className="text-sm text-gray-600">
          {personInfo.place_of_birth}
        </span>
      </div>
    </div>
  );
};
export default PersonalInfo;
