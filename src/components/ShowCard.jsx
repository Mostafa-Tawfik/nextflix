import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AuthContext } from '../context/AuthContext'
import { saveMovie, saveTvShow } from '../helpers/firebaseCrud'

function ShowCard({show, mediaType}) {

  const {user} = useContext(AuthContext)
  const [like, setLike] = useState(false)

  function handleSaving() {
    if(mediaType === 'movie') {
      return saveMovie(show, user, ()=>setLike(!like))
    } else if (mediaType === 'tv') {
      return saveTvShow(show, user, ()=>setLike(!like))
    }
  }

  return (
    <>
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

        <Link to={`/${mediaType}/${show?.id}`}>
          <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`} alt="movie"/>
        </Link>


        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>

        <Link to={`/${mediaType}/${show?.id}` || `/tv/${show?.id}`}>
          <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {show?.title || show?.name}
          </p>
        </Link>

        <button 
          className='absolute top-4 left-4 text-gray-300 hover:scale-[1.5] hover:duration-300 ease duration-300'
          onClick={handleSaving}>
          {like ? <FaHeart /> : <FaRegHeart />}
        </button>

        </div>
      </div>
    </>
  )
}

export default ShowCard