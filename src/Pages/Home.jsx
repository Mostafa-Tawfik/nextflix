import React from 'react'
import apiRequests from '../apiRequests'
import Category from '../components/Category'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <Main />
      <Category id='1' title='Popular' fetchURL={apiRequests.requestPopular}/>
      <Category id='2' title='Up Coming' fetchURL={apiRequests.requestUpcoming}/>
      <Category id='3' title='Trending' fetchURL={apiRequests.requestTrending}/>
      <Category id='4' title='Top Rated' fetchURL={apiRequests.requestTopRated}/>
      <Category id='5' title='Horror' fetchURL={apiRequests.requestHorror}/>
    </div>
  )
}

export default Home