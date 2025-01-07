import Filter from "../components/Filter";
import Movies from "../components/Movies";

const MoviesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className=" max-w-[1200px] mx-auto py-[60px] flex  w-[100%] gap-[30px]">
        <Filter></Filter>
        <Movies></Movies>
      </div>
    </div>
  );
};
export default MoviesPage;
