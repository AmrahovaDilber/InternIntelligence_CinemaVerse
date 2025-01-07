const API_KEY = "f21a6bf3bfe42bde02aa229e67732bb8";
const BASE_URL = "https://api.themoviedb.org/3";

// A helper function to perform API requests using fetch with async/await
const tmdbApi = async (endpoint: string, options = {}) => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

// Function to get a new request token
export const getRequestToken = async () => {
  const data = await tmdbApi("/authentication/token/new");
  return data.request_token;
};

// Function to create a session using a request token
export const createSession = async (requestToken: string) => {
  const data = await tmdbApi("/authentication/session/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ request_token: requestToken }),
  });

  return data.session_id;
};

export const deleteSession = async (sessionId: string) => {
  try {
    const response = await tmdbApi("/authentication/session", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session_id: sessionId }),
    });
    if (!response.ok) {
      throw new Error("Failed to delete session");
    }
    const data = await response.json();
    console.log("Session deleted:", data);
    return data;
  } catch (error) {
    console.error("Error deleting session:", error);
    throw error;
  }
};

// Function to validate login using username, password, and request token
export const validateLogin = async (
  username: string,
  password: string,
  requestToken: string
) => {
  const data = await tmdbApi("/authentication/token/validate_with_login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      request_token: requestToken,
    }),
  });
  return data.success;
};

// FUNCTION FOR GETTING MOVIE TRAILER
export const getMovieTrailers = async (movieId: number) => {
  const data = await tmdbApi(`/movie/${movieId}/videos`);
  console.log(data);
  return data.results;
};

export const fetchTrendingMovies = async () => {
  const data = await tmdbApi("/trending/movie/day");
  return data.results;
};
export const fetchTrendingTvShows = async () => {
  const data = await tmdbApi("/trending/tv/day");
  return data.results;
};

export const fetchSimilarMovies = async (movie_id: number) => {
  const data = await tmdbApi(`/movie/${movie_id}/similar`);
  console.log(data);
  return data.results;
};

export const fetchReviews = async (movie_id: number) => {
  const data = await tmdbApi(`/movie/${movie_id}/reviews`);
  return data.results;
};

// API Function
export const fetchPopularPeople = async () => {
  const data = await tmdbApi(`/person/popular`);
  return data.results;
};

export const fetchMoviesOnTheaters = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=US`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
};

export const fetchMoviesForRent = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_watch_providers=337&watch_region=US`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
};

export const fetchMovieDetails = async (slug: number) => {
  const data = await tmdbApi(`/movie/${slug}`);
  return data;
};

export const fetchMovieMediaDetails = async (movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
};

export const fetchPersonDetailedData = async (personId: number) => {
  try {
    const response = await tmdbApi(`/person/${personId}`);
    return response;
  } catch (error) {
    console.error("Error fetching person data:", error);
    throw new Error("Failed to fetch person details.");
  }
};

export const fetchPersonPhotos = async (person_id: number) => {
  const data = await tmdbApi(`/person/${person_id}/images`);
  return data;
};

export const fetchPersonSocialMedias = async (person_id: number) => {
  const data = await tmdbApi(`/person/${person_id}/external_ids`);
  return data;
};

export const fetchTopRatedMovies = async () => {
  const data = await tmdbApi("/movie/upcoming");
  return data.results;
};

export const fetchCastItems = async (slug: number) => {
  const data = await tmdbApi(`/movie/${slug}/credits`);
  return data.cast;
};

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.des`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
};

export const fetchNowPlayingMovies = async () => {
  const data = await tmdbApi(`/movie/now_playing`);
  return data.results;
};

export const fetchUpComingMovies = async () => {
  const data = await tmdbApi(`/movie/upcoming`);
  return data.results;
};

export const fetchTopRatedMoviess = async () => {
  const data = await tmdbApi("/movie/top_rated");
  return data.results;
};

export const fetchPopularTvShows = async () => {
  const data = await tmdbApi("/tv/popular");
  return data.results;
};

export const fetchAiringTodayTVShows = async () => {
  const data = await tmdbApi("/tv/airing_today");
  return data.results;
};

export const fetchOnTvShows = async () => {
  const data = await tmdbApi("/tv/on_the_air");
  return data.results;
};

export const fetchTopRatedTvShows = async () => {
  const data = await tmdbApi("/tv/top_rated");
  return data.results;
};

export const fetchDailyPicks = async () => {
  const data = await tmdbApi("/trending/movie/day");
  return data.results;
};

export const fetchComingSoonMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&release_date.gte=2024-12-01&release_date.lte=2024-12-31&sort_by=release_date.asc`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
};
