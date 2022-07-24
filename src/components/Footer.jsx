import React from 'react'

function Footer() {
  return (
    <footer className='text-white z-20 flex flex-col justify-center items-center p-8 mt-auto bottom-[100px]'>
      <p className='z-20 font-["Josefin_Sans"]'>Powered by <a href='https://www.themoviedb.org/documentation/api' target={"_blank"} rel={"noreferrer"} className='font-["Poppins"]'>TMDB</a>
      </p>

      <div className='flex gap-2 text-base md:text-2xl z-20'>

        <img className='w-8 h-8' 
          alt='myLogo' src='https://www.mostafatawfik.com/images/logo.jpg'/>
        <a href='https://www.mostafatawfik.com/' target={"_blank"} rel={"noreferrer"}>
          <p className='font-[Redressed]'>Copyright <span className='font-["Mrs_Saint_Delafield"]'>Mostafa Tawfik</span> © 2022</p>
        </a>

      </div>
    </footer>
  )
}

export default Footer