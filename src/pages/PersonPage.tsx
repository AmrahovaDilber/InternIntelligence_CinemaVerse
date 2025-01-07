import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Person from "../components/Person";
import { personType } from "../types/type";
import { fetchPersonDetailedData } from "../../api";

const PersonPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [personInfo, setPersonInfo] = useState<personType | null>(null); 
  const [error, setError] = useState<string | null>(null);

  const personId = slug && !isNaN(Number(slug)) ? Number(slug) : null;

  useEffect(() => {
    if (!personId) {
      setError("Invalid person ID");
      return;
    }

    const fetchPersonData = async () => {
      try {
        const data = await fetchPersonDetailedData(personId);
        setPersonInfo(data);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch person details.");
      }
    };

    fetchPersonData();
  }, [personId]);

  if (error) {
    return <div className="w-full h-full bg-gray-100 flex items-center justify-center">{error}</div>;
  }

  if (!personInfo) {
    return <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full h-full bg-gray-100">
      <div className="w-[1200px] mx-auto flex flex-col py-[50px]">
        <Person personInfo={personInfo} />
      </div>
    </div>
  );
};

export default PersonPage;
