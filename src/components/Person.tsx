import { FaAward } from "react-icons/fa";
import PersonalInfo from "./PersonalInfo";
import { personType } from "../types/type";
import PersonBiography from "./PersonBiography";
import PersonSocialMedias from "./PersonSocialMedias";
import PersonImages from "./PersonImages";

interface PROPS {
  personInfo: personType;
}

const Person: React.FC<PROPS> = ({ personInfo }) => {



  return (
    <div className=" rounded-xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="lg:w-1/3">
          <div className="relative group">
            <div className="overflow-hidden h-[500px] rounded-xl shadow-md transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w500${personInfo.profile_path}`}
                alt={personInfo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Quick Info Cards */}
          <PersonalInfo personInfo={personInfo}></PersonalInfo>

          <PersonSocialMedias id={personInfo.id}></PersonSocialMedias>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3">
          <PersonBiography personInfo={personInfo}></PersonBiography>
          <PersonImages id={personInfo.id}></PersonImages>

          <div className="space-y-4">
            {personInfo.also_known_as?.length>0 && (
              <div className="flex items-center gap-2 mb-4">
                <FaAward className="w-5 h-5 text-[#e8ab29]" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Also Known As
                </h2>
              </div>
            )}

            <div className="space-y-2">
              {personInfo.also_known_as?.map((name, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-gray-600">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
