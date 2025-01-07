import ComingSoon from "../components/ComingSoon";
import Hero from "../components/Hero";
import HeroSlideshow from "../components/HeroSlideShow";
import PersonCard from "../components/PersonCard";
import Popular from "../components/Popular";
import TopRatedMovies from "../components/TopRatedMovies";
import Trending from "../components/Trending";

const Home: React.FC = () => {
  return (
    <div>
      <Hero></Hero>
      <Trending></Trending>
      <Popular></Popular>
      <HeroSlideshow></HeroSlideshow>
      <PersonCard></PersonCard>
      <TopRatedMovies></TopRatedMovies>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default Home;
