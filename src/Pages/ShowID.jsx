import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import useApi from '../api/useApi'
import { requestShowDetails, requestvideos } from '../api/apiRequests'
import {FaImdb} from 'react-icons/fa'
import {SiThemoviedatabase} from 'react-icons/si'
import MovieCredits from '../components/ShowCredits';

function MovieID({ mediaType }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = useParams()

  const {data: show, sendReq: reqData} = useApi(
    {url: requestShowDetails(params.showID, mediaType)}
  )

  const {data: videos, sendReq: reqVidos} = useApi({url: requestvideos(params.showID, mediaType)})

  useEffect(()=>{
    reqData()
    reqVidos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // filter vidoes and return only trailers
  const trailer = videos.results && videos.results.filter(vid=> vid.name.includes('Official Trailer' || 'trailer'))

  const genres = show.genres?.map(gen => gen.name).join(' , ')

  function timeConverter(num) {
    let hours = Math.floor(num / 60)
    let minutes = num % 60
    return hours + ':' + minutes + 'm'
  }
  
  // console.log(show);

  return (
    <main>

      <section className='relative w-full h-full pt-[72px]'>

        <div className='relative top-0 left-0'>
          <img className='absolute w-full h-[600px] object-cover opacity-10' src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} alt="movie"/>
        </div>

        <section className='w-full h-auto flex flex-col items-center justify-center gap-8 text-white p-4 md:flex-row md:h-[600px]'>

          <img 
            className='w-[300px] h-[450px] md:ml-8'
            src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`} alt='/'
          />

          <div className='z-20 flex flex-col gap-4'>

            <article>
              <h2 className='text-3xl md:text-5xl font-bold'>
                {show?.title}
              </h2>

              <p className='text-xs md:text-sm text-gray-400 pt-2'>
                {show?.release_date || show?.first_air_date} &bull; {genres} &bull; {show?.runtime && timeConverter(show?.runtime)}
              </p>
            </article>

            <p className='italic text-gray-500'>{show?.tagline}</p>

            <article className='py-4'>
              <h3 className='text-lg pb-2'>Overview</h3>
              <p className='lg:max-w-[70%] xl:max-w-[50%] text-gray-300'>{show?.overview}</p>
            </article>

            <div className='flex gap-4'>
              <a href={show?.homepage} target={'_blank'} rel={'noreferrer'}>
                <img 
                  className='w-[60px] h-[60px] object-cover cursor-pointer rounded'
                  src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} alt="/" 
                  />
              </a>

              {show?.imdb_id && <a href={`https://www.imdb.com/title/${show?.imdb_id}/`} target={'_blank'} rel={'noreferrer'}>
                <FaImdb size={60} color={'yellow'}/>
              </a>}
              
              <a href={`https://www.themoviedb.org/${mediaType}/${show?.id}`} target={'_blank'} rel={'noreferrer'}>
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

        <section>
          <MovieCredits showID={params.showID} mediaType={mediaType}/>
        </section>

      </section>

    </main>
  )
}

export default MovieID