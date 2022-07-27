import React from 'react'
import apiRequests from '../api/apiRequests'
import Shelf from '../components/Shelf'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <Main />
      <Shelf id='1' title='In Theatres' mediaType='movie' fetchURL={apiRequests.requestInTheatres}/>
      <Shelf id='2' title='Up Coming Movies' mediaType='movie' fetchURL={apiRequests.requestUpcoming}/>
      <Shelf id='3' title='Trending Movies' mediaType='movie' fetchURL={apiRequests.requestTrendingMovies}/>
      <Shelf id='4' title='Trending TV Shows' mediaType='tv' fetchURL={apiRequests.requestTrendingTvShows}/>
    </div>
  )
}

export default Home