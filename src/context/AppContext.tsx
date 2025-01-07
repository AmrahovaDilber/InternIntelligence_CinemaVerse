import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {
  fetchAiringTodayTVShows,
  fetchMovieDetails,
  fetchNowPlayingMovies,
  fetchOnTvShows,
  fetchPopularMovies,
  fetchPopularTvShows,
  fetchTopRatedMoviess,
  fetchTopRatedTvShows,
  fetchUpComingMovies,
} from '../services/api'
import notification from "../utils/helper";
import { MainContextType } from "../types/type";
import { setDoc, doc, getDoc,  } from "firebase/firestore";
import { db } from "../firebase/config";

interface MainContextProviderProps {
  children: React.ReactNode;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);
  const [onTVShows, setOnTVShows] = useState([]);
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [watchList, setWatchList] = useState<number[]>([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function addData(uid: string, name: string, favorites: number[], watchList: number[]) {
    if (!uid || !name) {
      console.error("User is not authenticated or name is missing.");
      return;
    }
    try {
      const userDocRef = doc(db, "users", uid);
      await setDoc(userDocRef, {
        name,
        favorites,
        watchList,
      }, { merge: true }); 
      console.log("User data successfully updated!");
    } catch (error) {
      console.error("Error adding user data:", error);
    }
  }

  const initializeUser = async (user: any) => {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
  
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setWatchList(userData.watchList || []);
          setFavorites(userData.favorites || []);
        } else {
          await addData(user.uid, user.username || "Anonymous", [], []);
        }
      } catch (error) {
        console.error("Error initializing user data:", error);
      }
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      setWatchList([]);
      setFavorites([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setPopularMovies(await fetchPopularMovies());
      setNowPlayingMovies(await fetchNowPlayingMovies());
      setUpComingMovies(await fetchUpComingMovies());
      setTopRatedMovies(await fetchTopRatedMoviess());
      setPopularTVShows(await fetchPopularTvShows());
      setAiringTodayTVShows(await fetchAiringTodayTVShows());
      setOnTVShows(await fetchOnTvShows());
      setTopRatedTVShows(await fetchTopRatedTvShows());
    };
    fetchMovies();
  }, []);

  const handleFilter = (item: string) => {
    switch (item) {
      case "PopularMovie":
        setFilteredMovies(popularMovies);
        break;
      case "Now Playing":
        setFilteredMovies(nowPlayingMovies);
        break;
      case "Upcoming":
        setFilteredMovies(upComingMovies);
        break;
      case "Top Rated Movies":
        setFilteredMovies(topRatedMovies);
        break;
      case "PopularTv":
        setFilteredMovies(popularTVShows);
        break;
      case "Airing Today":
        setFilteredMovies(airingTodayTVShows);
        break;
      case "On TV":
        setFilteredMovies(onTVShows);
        break;
      case "Top Rated Tv":
        setFilteredMovies(topRatedTVShows);
        break;
      default:
        setFilteredMovies((filteredMovies) =>
          filteredMovies.filter((movie) =>
            movie.original_title?.toLowerCase().includes(query.toLowerCase())
          )
        );
    }
  };

  // Add to Watchlist
  const handleAddWatchList = async (id: number) => {
    if (!currentUser?.uid) {
      notification("Please log in to add to watchlist.", "info");
      return;
    }
  
    try {
      const movie = await fetchMovieDetails(id);
      if (!watchList.includes(id)) {
        
        const newWatchList = [...watchList, id];
        setWatchList(newWatchList);
        await addData(currentUser.uid, currentUser.username || "Anonymous", favorites, newWatchList);
  
        if (movie && movie.id === id) {
          notification(
            `${movie.original_title || movie.name} added to watchlist`,
            "success"
          );
        }
      } else {
        notification("This movie is already in your watchlist.", "info");
      }
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      notification("Failed to add the movie to the watchlist. Please try again.", "error");
    }
  };
  

  // Fetch Watchlist Movies
  const fetchWatchListMovies = async () => {
    const apiKey = "f21a6bf3bfe42bde02aa229e67732bb8";
    try {
      const moviePromises = watchList.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        ).then((res) => res.json())
      );
      const movies = await Promise.all(moviePromises);
      setWatchListMovies(movies);
    } catch (error) {
      console.error("Error fetching watchlist movies:", error);
    }
  };

  // Add to Favorites
  const handleAddFavorites = async (id: number) => {
    if (!currentUser?.uid) {
      notification("Please log in to add favorites.", "info");
      return;
    }
  
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
      await addData(
        currentUser.uid,
        currentUser.username || "Anonymous",
        newFavorites,
        watchList
      );
      notification("Added to favorites.", "success");
    } else {
      notification("This movie is already in your favorites.", "info");
    }
  };
  

  // Fetch Favorite Movies
  const fetchFavoritesMovies = async () => {
    const apiKey = "f21a6bf3bfe42bde02aa229e67732bb8";
    try {
      const moviePromises = favorites.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        ).then((res) => res.json())
      );
      const movies = await Promise.all(moviePromises);
      setFavoritesMovies(movies);
    } catch (error) {
      console.error("Error fetching favorites movies:", error);
    }
  };

  // Context Data
  const data = {
    popularMovies,
    nowPlayingMovies,
    upComingMovies,
    topRatedMovies,
    popularTVShows,
    airingTodayTVShows,
    onTVShows,
    topRatedTVShows,
    loading,
    currentUser,
    handleFilter,
    handleAddWatchList,
    fetchWatchListMovies,
    watchListMovies,
    userLoggedIn,
    setUserLoggedIn,
    handleAddFavorites,
    favorites,
    favoritesMovies,
    fetchFavoritesMovies,
    query,
    setQuery,
    filteredMovies,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

// Hook to use MainContext
export const useMainContext  = () => useContext(MainContext);
