import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

function Movie({movie}) {

  const {user} = useContext(AuthContext)

  const [like, setLike] = useState(false)

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveMovie = async ()=> {
    if(user?.email) {
      setLike(!like)
      await updateDoc(movieID, {
        favMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path
        })
      })
    } else alert('Login to save your favorite movies')
  }

  // console.log(fav, movie.title);

  return (
    <>
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

        <Link to={`/movie/${movie?.id}`}>
          <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movie"/>
        </Link>


        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>

        <Link to={`/movie/${movie?.id}`}>
          <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {movie?.title}
          </p>
        </Link>

          <button 
            className='absolute top-4 left-4 text-gray-300 hover:scale-[1.5] hover:duration-300 ease duration-300'
            onClick={saveMovie}>
            {like ? <FaHeart /> : <FaRegHeart />}
          </button>

        </div>
      </div>
    </>
  )
}

export default Movie