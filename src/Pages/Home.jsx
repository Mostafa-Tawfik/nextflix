import React from 'react'
import apiRequests from '../apiRequests'
import Category from '../components/Category'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <Main />
      <Category title='Up Coming' fetchURL={apiRequests.requestUpcoming}/>
      <Category title='Popular' fetchURL={apiRequests.requestPopular}/>
      <Category title='Trending' fetchURL={apiRequests.requestTrending}/>
      <Category title='Top Rated' fetchURL={apiRequests.requestTopRated}/>
      <Category title='Horror' fetchURL={apiRequests.requestHorror}/>
    </div>
  )
}

export default Home