import { IoSearch, IoPersonSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useMainContext } from "../context/AppContext";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { doSignOut } from "../firebase/auth";

const Header: React.FC = () => {
  const { query, setQuery, userLoggedIn } = useMainContext();
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto py-5 text-[#fff]">
        <figure>
          <img src="" alt="logo" className="h-8" />
        </figure>

        {/* Search bar */}
        <div className="flex gap-2 w-[550px] items-center border bg-[#fff] rounded-md px-3 py-1">
          <input
            className="flex-1 bg-transparent outline-none text-black"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <IoSearch className="text-[18px] text-black" />
        </div>

        <div className="flex gap-8">
          <Dropdown></Dropdown>

          {!userLoggedIn ? (
            <Link
              to="/signup"
              className="flex items-center gap-1 hover:text-[#e8ab29]"
            >
              <IoPersonSharp className="text-lg" />
              <p>Sign up</p>
            </Link>
          ) : (
            <Link
              to="/signup"
              className="flex items-center gap-1 hover:text-[#e8ab29]"
            >
              <FaArrowRightToBracket className="text-lg" />
              <p onClick={()=>doSignOut()}>Log Out</p>
            </Link>
          )}

          <div className="flex flex-col relative group">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#e8ab29] group-hover:text-[#ffc107] transition-colors duration-200">
              <p className="font-semibold text-lg">More</p>
            </div>
            <div className="bg-white hidden group-hover:block text-[#1a1a1a] absolute p-3 z-20 top-[25px] w-[150px] left-0 shadow-md rounded-lg transition-opacity duration-300">
              <Link
                to="/watchlist"
                className="flex items-center gap-1 hover:text-[#e8ab29]"
              >
                {/* <IoBookmarkOutline className="text-lg" /> */}
                <p>WatchList</p>
              </Link>
              <Link
                to="/favorites"
                className="flex items-center gap-1 hover:text-[#e8ab29]"
              >
                <p>Favorites</p>
              </Link>
              <Link
                to="/popularpeople"
                className="flex items-center gap-1 hover:text-[#e8ab29]"
              >
                <p>Popular People</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
