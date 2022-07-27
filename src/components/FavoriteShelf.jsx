import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AiOutlineClose } from 'react-icons/ai'
import { deleteMovie, deleteTvShow } from '../helpers/firebaseCrud'

function FavoriteShelf({title, shows, mediaType}) {

  const {user} = useContext(AuthContext)

  // console.log(shows);

  function handleDelete(show) {
    if(mediaType === 'movie') {
      return deleteMovie(show.id, shows, user)
    } else if (mediaType === 'tv') {
      return deleteTvShow(show.id, shows, user)
    }
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>
        {title}
      </h2>

      <div className='relative flex items-center group'>
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative px-4'
        >
          {shows?.map((show) => (
            <section key={show.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2'
            >
              <Link to={`/${mediaType}/${show?.id}`}>
                <img
                  className='w-full h-auto block'
                  src={`https://image.tmdb.org/t/p/w500/${show?.img || show?.poster_path}`}
                  alt={show?.title || show?.name}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {show?.title || show?.name}
                  </p>
                </div>
              </Link>

              <button 
                onClick={()=> handleDelete(show)} 
                className='absolute text-gray-300 top-4 right-4 hover:scale-[1.5] hover:duration-300 ease duration-300'>
                  <AiOutlineClose />
              </button>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoriteShelf