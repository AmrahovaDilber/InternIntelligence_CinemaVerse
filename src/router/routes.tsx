import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import { routeType } from "../types/type";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import CastCrewPage from "../pages/CastCrewPage";
import PersonPage from "../pages/PersonPage";
import MoviesPage from "../pages/MoviesPage";
import { MainContextProvider } from "../context/AppContext";
import WatchListPage from "../pages/WatchListPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ReviewsPage from "../pages/ReviewsPage";
import People from "../pages/PopularPeople";
import Favorites from "../pages/Favorites";

type ARR = {
  routes: routeType[];
};

const routes: routeType[] = [
  {
    path: "/",
    element: <Home></Home>,
    layout: "App",
  },
  {
    path: "/moviedetails/:slug",
    element: <MovieDetailsPage />,
    layout: "App",
  },
  {
    path: "/castcrew/:slug",
    element: <CastCrewPage />,
    layout: "App",
  },
  {
    path: "/person/:slug",
    element: <PersonPage></PersonPage>,
    layout: "App",
  },
  {
    path: "/movies/:slug",
    element: <MoviesPage></MoviesPage>,
    layout: "App",
  },
  {
    path: "/watchlist",
    element: <WatchListPage></WatchListPage>,
    layout: "App",
  },
  {
    path: "/favorites",
    element: <Favorites></Favorites>,
    layout: "App",
  },
  {
    path: "/allreviews/:slug",
    element: <ReviewsPage />,
    layout: "App",
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/popularpeople",
    element: <People></People>,
    layout: "App",
  },
];

const routerMap = (arr: ARR) => {
  return arr.routes.map((item) => {
    if (item.layout) {
      if (item.layout === "App") {
        item.element = (
          <MainContextProvider>
         
            <AppLayout>{item.element}</AppLayout>
          </MainContextProvider>
        );
      }
    } else {
      item.element = <MainContextProvider>{item.element}</MainContextProvider>;
    }

    return item;
  });
};

export const router = createBrowserRouter(routerMap({ routes }));
