import React, { useState, useEffect, useContext } from 'react'
import FavoriteShelf from '../components/FavoriteShelf'
import { doc, onSnapshot } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

function Account() {

  const {user} = useContext(AuthContext)

  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])

  // render the fav movies from DB
  useEffect(()=>{
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.favMovies)
      setTvShows(doc.data()?.favTvShows)
    })
  },[user?.email])

  return (
    <div>
      <div className='w-full text-white'>

        {/* background */}
        <img className='w-full h-[400px] object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />

        {/* bg overlay */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            My Favorite Lists
          </h1>
        </div>

      </div>

      {movies.length > 0 && <FavoriteShelf title='Favorite Movies' mediaType='movie' shows={movies} />}

      {tvShows.length > 0 &&<FavoriteShelf title='Favorite TV Shows' mediaType='tv' shows={tvShows} />}
    </div>
  )
}

export default Account