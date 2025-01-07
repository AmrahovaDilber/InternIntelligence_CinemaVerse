import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop: React.FC = () => {
  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrolBtn(true);
      } else {
        setShowScrolBtn(false);
      }
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  return (
    <>
      {showsScrolBtn && (
        <div className="fixed bottom-4 right-3 z-20">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="border rounded-full text-[18px] w-[40px] h-[40px] flex justify-center items-center bg-[#e8ab29]"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
