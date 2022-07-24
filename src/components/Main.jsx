import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiRequests from '../api/apiRequests'
import { Link } from 'react-router-dom'

function Main() {
  // set a state to hold the movies
  const [movies, setMovies] = useState([])

  // choose random movie to display
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(()=>{
    axios.get(apiRequests.requestPopular)
    .then(res => setMovies(res.data.results))
  },[])
  
  // console.log(movies);
  // console.log(movie);

  // truncate string
  function truncateString(str, max) {
    return str?.length > max ? str.slice(0, max) + '...' : str;
  } 
  

  return (
    <div className='w-full h-[550px] text-white'>
      <div className="w-full h-full">

        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>

        <img className='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="feature movie" />

        <div className='absolute w-full top-[20%] p-4 md:p-4'>

          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>

          <div className='my-4'>
            <Link to={`/movie/${movie?.id}`}>
              <button className='bg-white text-black px-5 py-2 border border-gray-300'>
                More info
              </button>
            </Link>
            {/* <button className='px-5 py-2 ml-4 border border-gray-300'>
              Watch
            </button> */}
          </div>

          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>

          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 200)}</p>

        </div>

      </div>
    </div>
  )
}

export default Main