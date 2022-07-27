import React from 'react'

function Footer() {
  return (
    <footer className='text-white z-20 flex flex-col justify-center items-center p-8 mt-auto bottom-[100px]'>
      <p className='z-20 font-["Josefin_Sans"]'>
        Powered by&nbsp;
        <a href='https://www.themoviedb.org/documentation/api' target={"_blank"} rel={"noreferrer"} className='font-["Poppins"]'>
          <img className='w-[40px] inline-block' 
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="/" />
        </a>
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