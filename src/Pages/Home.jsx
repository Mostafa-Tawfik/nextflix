import React from 'react'
import apiRequests from '../api/apiRequests'
import Category from '../components/Category'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <Main />
      <Category id='1' title='Popular' mediaType='movie' fetchURL={apiRequests.requestPopular}/>
      <Category id='2' title='Up Coming' mediaType='movie' fetchURL={apiRequests.requestUpcoming}/>
      <Category id='3' title='Trending' mediaType='movie' fetchURL={apiRequests.requestTrending}/>
      <Category id='4' title='Top Rated' mediaType='movie' fetchURL={apiRequests.requestTopRated}/>
    </div>
  )
}

export default Home