import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] w-full">
      <div className="max-w-[1200px] py-20 mx-auto flex justify-between">
        {/* Column 1 */}
        <ul>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              About Us
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Careers
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Column 2 */}
        <ul>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Help Center
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Account Settings
            </a>
          </li>

          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Privacy Policy
            </a>
          </li>
        </ul>

        {/* Column 3 */}
        <ul>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Movies
            </a>
          </li>

          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              New Releases
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Top Picks
            </a>
          </li>
        </ul>

        {/* Column 4 */}
        <ul>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Watchlist
            </a>
          </li>

          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Terms of Service
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-[#fff] text-[16px] underline">
              Legal Notices
            </a>
          </li>
        </ul>

        <div className="flex flex-col items-start gap-4">
          <button className="bg-[#e8ab29] hover:bg-[#bc8b22] text-[#1a1a1a] cursor-pointer text-[16px] font-semibold py-2 w-[180px] rounded-lg">
            Sign in for more access
          </button>
          <p className="font-semibold text-[#fff] text-[20px] ">
            Social Medias
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-[30px] h-[30px] text-[#fff] transition-transform duration-200 hover:text-pink-500 hover:scale-110" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-[30px] h-[30px] text-[#fff] transition-transform duration-200 hover:text-blue-500 hover:scale-110" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="w-[30px] h-[30px] text-[#fff] transition-transform duration-200 hover:text-red-500 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 py-4 text-center">
        <p className="text-[#bbb] text-[14px]">
          © {new Date().getFullYear()} CinemaVerse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
