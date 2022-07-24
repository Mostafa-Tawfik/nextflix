import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import useApi from '../api/useApi'
import Movie from '../components/Movie'
import { requestSearch } from '../api/apiRequests'

function Search() {

  const [query, setQuery] = useState('')
  const [value] = useDebounce(query, 800)
  
  function handleChange(event) {
    setQuery(event.target.value)
  }

  const {data, sendReq} = useApi({url: requestSearch(value)})

  const matchedResults = data.results?.filter(movie=>movie.poster_path !== null)


  useEffect(()=>{
    sendReq()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  // console.log(matchedResults);

  return (
    <main className='w-full min-h-[calc(100vh-130px)] pt-[120px] flex flex-col items-center justify-center'>
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