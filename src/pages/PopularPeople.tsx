import { useEffect, useState } from "react";
import { fetchPopularPeople } from "../../api";
import { Link } from "react-router-dom";
import { PopularPeople } from "../types/type";

const People: React.FC = () => {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await fetchPopularPeople();
        setPopularPeople(data);
      } catch (error) {
        console.error("Failed to fetch popular people:", error);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6 lg:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 ">
        {popularPeople?.map((person: PopularPeople) => (
          <div key={person.id} className="person-card">
            <Link to={`/person/${person.id}`} className="block text-center">
              {person.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                  alt={person.name}
                  className="w-full h-auto rounded-md shadow-md mb-2"
                />
              ) : (
                <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-md mb-2">
                  No Image Available
                </div>
              )}
              <h2 className="text-lg font-bold text-gray-800">{person.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
