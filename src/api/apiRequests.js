const key = process.env.REACT_APP_TMDBkey;

// general requests
const apiRequests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default apiRequests


// movies requests
export const requestCredits = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}/credits?api_key=${key}&language=en-US`

export const requestShowDetails = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}?api_key=${key}&language=en-US&page=1`

export const requestvideos = (showID, mediaType) => `https://api.themoviedb.org/3/${mediaType}/${showID}/videos?api_key=${key}&language=en-US&page=1`

export const requestSearch = (query) => `https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${query}&language=en-US&include_adult=true&page=1`