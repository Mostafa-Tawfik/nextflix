import React from 'react'
import apiRequests from '../api/apiRequests'
import Shelf from '../components/Shelf'
import Main from '../components/Main'
import { useEffect } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Home() {
  const { user }= useContext(AuthContext)

  // check if user have doc in db, if not create doc
  useEffect(()=>{
    if(user?.email) {
      const docRef = doc(db, 'users', `${user?.email}`)
  
      onSnapshot(docRef, (doc) => {
        if(!doc.exists()) {
          // console.log('no data')
          setDoc(docRef, {
            favMovies: [],
            favTvShows: []
          })
        }
      })
    }
  },[user?.email])

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