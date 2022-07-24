import React from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import useApi from '../api/useApi'
import {FaImdb} from 'react-icons/fa'
import {SiThemoviedatabase} from 'react-icons/si'

function MovieID() {

  const params = useParams()

  const {data: movie, sendReq: reqData} = useApi({url: `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${process.env.REACT_APP_TMDBkey}&language=en-US&page=1`})

  const {data: videos, sendReq: reqVidos} = useApi({url: `https://api.themoviedb.org/3/movie/${params.movieID}/videos?api_key=${process.env.REACT_APP_TMDBkey}&language=en-US&page=1`})

  useEffect(()=>{
    reqData()
    reqVidos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const trailer = videos.results && videos.results.filter(vid=> vid.name.includes('Official Trailer' || 'trailer'))

  const genres = movie.genres?.map(gen => gen.name).join(' , ')

  function timeConverter(num) {
    let hours = Math.floor(num / 60)
    let minutes = num % 60
    return hours + ':' + minutes + 'm'
  }
  
  console.log(movie);

  return (
    <main className='relative w-full h-[510px] pt-[72px]'>

      <div className='relative top-0 left-0'>
        <img className='absolute w-full h-[510px] object-cover opacity-10' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movie"/>
      </div>

      <section className='w-full h-auto flex flex-col items-center justify-center gap-4 text-white p-4 md:flex-row md:h-[510px]'>

        <img 
          className='w-[300px] h-[450px]'
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='/'
        />

        <div className='z-20 flex flex-col gap-4'>

          <article>
            <h2 className='text-3xl md:text-5xl font-bold'>
              {movie?.title}
            </h2>

            <p className='text-xs md:text-sm text-gray-400 pt-2'>
              {movie?.release_date} &bull; {genres} &bull; {timeConverter(movie?.runtime)}
            </p>
          </article>

          <p className='italic text-gray-500'>{movie?.tagline}</p>

          <article className='py-4'>
            <h3 className='text-lg pb-2'>Overview</h3>
            <p className='lg:max-w-[70%] xl:max-w-[50%] text-gray-300'>{movie?.overview}</p>
          </article>

          <div className='flex gap-4'>
            <a href={movie?.homepage} target={'_blank'} rel={'noreferrer'}>
              <img 
                className='w-[60px] h-[60px] object-cover cursor-pointer rounded'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="/" 
                />
            </a>

            <a href={`https://www.imdb.com/title/${movie?.imdb_id}/`} target={'_blank'} rel={'noreferrer'}>
              <FaImdb size={60} color={'yellow'}/>
            </a>
            
            <a href={`https://www.themoviedb.org/movie/${movie?.id}`} target={'_blank'} rel={'noreferrer'}>
              <SiThemoviedatabase size={60} color={'green'}/>
            </a>
          </div>


        </div>

      </section>

      <section className='w-full h-auto flex justify-center items-center py-4'>

        {trailer && <iframe 
          title='videos'
          width="420" height="315" frameBorder="0"
          allowFullScreen
          src={`https://www.youtube.com/embed/${trailer[0]?.key}`}>
        </iframe>}

      </section>


    </main>
  )
}

export default MovieID