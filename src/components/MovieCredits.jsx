import React, { useEffect } from 'react'
import useApi from '../api/useApi'
import { requestCredits } from '../api/apiRequests'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function MovieCredits({movieID}) {

  const {data, sendReq} = useApi({url: requestCredits(movieID)})

  const cast = data.cast?.filter(cast=>cast.profile_path !== null).slice(0, 10)

  useEffect(()=>{
    sendReq()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // manual scroll left function
  function scrollLeft() {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  // manual scroll right function
  function scrollRight() {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  // console.log(cast);

  return (
    <div>
      <h2 className='text-white font-bold p-4 md:text-xl'>Cast</h2>

      <div className='relative flex items-center group'>

        <MdChevronLeft size={40} className='left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={scrollLeft}/>

        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {cast?.map(person => (
            <div key={person?.cast_id} className='w-[120px] md:w-[160px] lg:w-[200px] inline-block relative p-2'>

              <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`} alt="movie"/>
      
      
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
      
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {person?.name}
                  <br/>
                  " {person?.character} "
                </p>
    
              </div>
            </div>
          ))}

        </div>

        <MdChevronRight size={40} className='right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={scrollRight}/>

      </div>
    </div>
  )
}

export default MovieCredits