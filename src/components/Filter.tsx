import React, { useState } from "react";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const Filter = () => {
  const [userScore, setUserScore] = useState([0, 10]);
  const [userVotes, setUserVotes] = useState(0);
  const [runtime, setRuntime] = useState([0, 360]);

  return (
    <div className="w-[25%] flex flex-col ">
      <div className="p-4 border shadow-xl rounded-lg bg-white mb-4">
        <div className="flex flex-col">
          <p className="font-semibold text-lg mb-4 text-[#333] border-b pb-2">
            Sort Results By
          </p>

          <select className="p-2 border rounded-lg text-[#333] bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition duration-200">
            <option value="Popularity Descending">Popularity Descending</option>
            <option value="Popularity Ascending">Popularity Ascending</option>
            <option value="Rating Descending">Rating Descending</option>
            <option value="Rating Ascending">Rating Ascending</option>
          </select>
        </div>
      </div>

      <div className="p-4 border shadow-xl rounded-lg bg-white mb-4">
        <div className="flex flex-col">
          <p className="font-semibold text-lg mb-4 text-[#333] border-b pb-2">
            Filters
          </p>

          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                className="px-3 py-1 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e8ab29]"
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="p-4   rounded-lg bg-white mt-6">
            <div className="flex flex-col space-y-6">
              {/* User Score */}
              <div className="border-b border-t">
                <p className="font-medium text-[#333] mb-2">User Score</p>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={userScore[1]}
                    onChange={(e) =>
                      setUserScore([0, parseFloat(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e8ab29]"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* Minimum User Votes */}
              <div  className="border-b">
                <p className="font-medium text-[#333] mb-2">
                  Minimum User Votes
                </p>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="100"
                    value={userVotes}
                    onChange={(e) => setUserVotes(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e8ab29]"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                    <span>400</span>
                    <span>500</span>
                  </div>
                </div>
              </div>

              {/* Runtime */}
              <div  >
                <p className="font-medium text-[#333] mb-2">Runtime</p>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="30"
                    value={runtime[1]}
                    onChange={(e) => setRuntime([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e8ab29]"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>120</span>
                    <span>240</span>
                    <span>360</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
