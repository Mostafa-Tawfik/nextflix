const key = process.env.REACT_APP_TMDBkey;

const apiRequests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default apiRequests

export const requestCredits = (movieID) => `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${key}&language=en-US`

export const requestMovie = (movieID) => `https://api.themoviedb.org/3/movie/${movieID}?api_key=${key}&language=en-US&page=1`

export const requestTvShow = (tvShowID) => `https://api.themoviedb.org/3/tv/${tvShowID}?api_key=${key}&language=en-US&page=1`

export const requestvideos = (movieID) => `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${key}&language=en-US&page=1`

export const requestSearch = (query) => `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${query}&language=en-US&include_adult=true&page=1`