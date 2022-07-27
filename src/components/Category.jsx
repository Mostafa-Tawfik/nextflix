import React from 'react'
import { useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import ShowCard from './ShowCard'
import useApi from '../api/useApi'

function Category({title, fetchURL, id, mediaType}) {

  const {data, sendReq} = useApi({url:fetchURL})
  const shows = data.results?.slice(0, 10)

  useEffect(()=>{
    sendReq()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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
    <div>
      <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>

      <div className='relative flex items-center group'>

        <MdChevronLeft size={40} className='left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={scrollLeft}/>

        <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {shows?.map(show => (
            <ShowCard key={show?.id} show={show} mediaType={mediaType}/>
          ))}

        </div>

        <MdChevronRight size={40} className='right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={scrollRight}/>

      </div>
    </div>
  )
}

export default Category