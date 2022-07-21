import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'

function Category({title, fetchURL, id}) {

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(fetchURL)
    .then(res => setMovies(res.data.results.slice(0, 10)))
  },[fetchURL])

  // manual scroll left function
  function scrollLeft() {
    let slider = document.getElementById('slider' + id)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  // manual scroll right function
  function scrollRight() {
    let slider = document.getElementById('slider' + id)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>

      <div className='relative flex items-center group'>

        <MdChevronLeft size={40} className='left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={scrollLeft}/>

        <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map(movie => (
            <Movie key={movie?.id} movie={movie}/>
          ))}

        </div>

        <MdChevronRight size={40} className='right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={scrollRight}/>

      </div>
    </>
  )
}

export default Category