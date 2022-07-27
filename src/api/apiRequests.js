const key = process.env.REACT_APP_TMDBkey;

// general requests
const apiRequests = {
  requestPopular: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US&page=1`,
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
  requestTrendingTvShows: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestInTheatres: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default apiRequests


// movies requests
export const requestCredits = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}/credits?api_key=${key}&language=en-US`

export const requestShowDetails = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}?api_key=${key}&language=en-US&page=1`

export const requestRecommendations = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}/recommendations?api_key=${key}&language=en-US&page=1`

export const requestvideos = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}/videos?api_key=${key}&language=en-US&page=1`

export const requestSearch = (query) => `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${query}&language=en-US&include_adult=true&page=1`