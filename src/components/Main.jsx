import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import apiRequests from '../apiRequests'

function Main() {
  // set a state to hold the movies
  const [movies, setMovies] = useState([])

  // choose random movie to display
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(()=>{
    axios.get(apiRequests.requestPopular)
    .then(res => setMovies(res.data.results))
  },[])
  
  console.log(movies);
  console.log(movie);
  

  return (
    <div className='w-full h-[550px] text-white'>
      <div className="w-full h-full">

        <div className='w-full h-[550px] absolute bg-gradient-to-r from-black'></div>

        <img className='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="feature movie" />

        <div className='absolute w-full top-[20%] p-4 md:p-4'>

          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>

          <div className='my-4'>
            <button className='bg-white text-black px-5 py-2 border border-gray-300'>
              Play
            </button>
            <button className='px-5 py-2 ml-4 border border-gray-300'>
              Watch
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Main