import React from 'react'
import apiRequests from '../api/apiRequests'
import Category from '../components/Shelfs'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <Main />
      <Category id='1' title='In Theatres' mediaType='movie' fetchURL={apiRequests.requestInTheatres}/>
      <Category id='2' title='Up Coming Movies' mediaType='movie' fetchURL={apiRequests.requestUpcoming}/>
      <Category id='3' title='Trending Movies' mediaType='movie' fetchURL={apiRequests.requestTrendingMovies}/>
      <Category id='4' title='Trending TV Shows' mediaType='tv' fetchURL={apiRequests.requestTrendingTvShows}/>
    </div>
  )
}

export default Home