import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import useApi from '../api/useApi'

function MovieID() {

  const params = useParams()

  const {data: movie, sendReq} = useApi({url: `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${process.env.REACT_APP_TMDBkey}&language=en-US&page=1`})

  useEffect(()=>{
    sendReq()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  console.log(movie);

  return (
    <div className='relative w-full h-[510px] pt-[72px]'>

      <div className='relative top-0 left-0'>
        <img className='absolute w-full h-[510px] object-cover opacity-20' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movie"/>
      </div>

      <div className='w-full h-[510px] flex flex-col items-center justify-center gap-4 text-white p-4 md:flex-row'>

        <img 
          className='w-[300px] h-[450px]'
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='/'/>

        <p className='text-base md:text-3xl font-bold text-center'>
          {movie?.title}
        </p>

      </div>
    </div>
  )
}

export default MovieID