import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart} from 'react-icons/fa'

function Category({title, fetchURL}) {

  const [movies, setMovies] = useState([])

  const [like, setLike] = useState(false)


  useEffect(()=>{
    axios.get(fetchURL)
    .then(res => setMovies(res.data.results))
  },[fetchURL])

  return (
    <>
      <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>

      <div className='relative flex items-center'>

        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map(movie => (
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={movie?.id}>

              <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movie"/>

              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>

                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {movie?.title}
                </p>

                <p className='absolute top-4 left-4 text-gray-300'>
                  {like ? <FaHeart /> : <FaRegHeart />}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Category