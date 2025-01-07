import { personType } from "../types/type";
import { FaFilm } from "react-icons/fa";
import TextExpander from "./TextExpander";

interface PROPS {
  personInfo: personType;
}

const PersonBiography: React.FC<PROPS> = ({ personInfo }) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-gray-900 group">
        <span className="bg-gradient-to-r from-yellow-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
          {personInfo.name}
        </span>
      </h1>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <FaFilm className="w-5 h-5 text-[#e8ab29]" />
          <h2 className="text-xl font-semibold text-gray-800">Biography</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          <TextExpander>{personInfo.biography || "Biography not available."}</TextExpander>
        </p>
      </div>
    </>
  );
};

export default PersonBiography;
