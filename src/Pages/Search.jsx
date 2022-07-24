import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import useApi from '../api/useApi'
import Movie from '../components/Movie'

function Search() {

  const [query, setQuery] = useState('')
  const [value] = useDebounce(query, 800)
  
  function handleChange(event) {
    setQuery(event.target.value)
  }

  const {data, sendReq} = useApi({url:`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDBkey}&query=${query}&language=en-US&include_adult=true&page=1`})

  const matchedResults = data.results


  useEffect(()=>{
    sendReq()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  console.log(matchedResults);

  return (
    <main className='w-full h-full pt-[120px] flex flex-col items-center justify-center'>
      <input 
        className='rounded h-8 pl-4'
        type='text'
        placeholder='Search by movie name'
        value={query}
        onChange={handleChange}
      >
      </input>

      <div className='flex flex-wrap justify-center items-center pt-4'>
        {matchedResults?.map(movie => (
          <Movie movie={movie} key={movie?.id}/>
        ))}      
      </div>
    </main>
  )
}

export default Search