import { activeTabType } from "../types/type";

const ActiveTab: React.FC<activeTabType> = ({ tab, setActiveTab, activeTab }) => {
  return (
    <button
      key={tab}
      className={`text-lg rounded-full px-4 py-1 font-medium transition-colors duration-300 ${
        activeTab === tab
          ? "bg-[#e8ab29] text-white shadow-md hover:bg-[#d4971c]"
          : "bg-slate-700 text-gray-200 hover:bg-gray-600"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  );
};

export default ActiveTab;
