import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'

function FavoriteMovies() {

  const {user} = useContext(AuthContext)

  const [movies, setMovies] = useState([])

  console.log(movies);

  useEffect(()=>{
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.favMovies)
    })
  },[user?.email])

  const movieRef = doc(db, 'users', `${user?.email}`)

  async function deleteMovie(deleteID) {
    try {
      const result = movies.filter(movie => movie.id !== deleteID)
      await updateDoc(movieRef, {
        favMovies: result
      })
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>
        Watch List
      </h2>

      <div className='relative flex items-center group'>
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            >
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {movie?.title}
                </p>
                <p onClick={()=> deleteMovie(movie.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoriteMovies