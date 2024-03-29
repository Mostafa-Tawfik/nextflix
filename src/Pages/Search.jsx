import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import useApi from '../api/useApi'
import Movie from '../components/ShowCard'
import { requestSearch } from '../api/apiRequests'

function Search() {

  const [query, setQuery] = useState('')
  const [value] = useDebounce(query, 800)
  
  function handleChange(event) {
    setQuery(event.target.value)
  }

  const {data, sendReq} = useApi({url: requestSearch(value)})

  const matchedResults = data.results?.filter(show=>show.poster_path !== null)


  useEffect(()=>{
    query !== '' && sendReq()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  // console.log(matchedResults);

  return (
    <main className='w-full min-h-[calc(100vh-130px)] pt-[120px] flex flex-col items-center justify-center'>
      <input 
        className='rounded h-[50px] pl-4 w-[300px]'
        type='text'
        placeholder='Search by movie/show name'
        value={query}
        onChange={handleChange}
      >
      </input>

      <div className='flex flex-wrap justify-center items-center pt-4'>
        {matchedResults?.map(show => (
          <Movie show={show} key={show?.id} mediaType={show?.media_type}/>
        ))}      
      </div>
    </main>
  )
}

export default Search