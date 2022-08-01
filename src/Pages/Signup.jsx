import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

function Signup() {

  const {signUp} = useContext(AuthContext)
  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async(e) => {

    e.preventDefault()
    // setErrorMsg('')

    try {
      await signUp(email, password)
      navigate('/')
    } catch(error) {
      console.log(error.message);
      // setErrorMsg(error.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    
    try {
      await googleSignIn()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full h-[calc(100vh-130px)]'>

      {/* background */}
      <img className='hidden sm:block absolute w-full h-full object-cover'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />

      {/* bg overlay */}
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[650px] mx-auto bg-black/75 text-white rounded-xl'>
          <div className='max-w-[320px] mx-auto py-16'>

            <h1 className='text-3xl font-bold'>Sign Up</h1>

            <p className='mt-4 text-slate-400'>
              Sign up to save your favorite shows.
            </p>

            <form 
              className='w-full flex flex-col py-4'
              onSubmit={handleSubmit}>

              <input 
                className='p-4 my-2 bg-white rounded text-black' 
                type="email" 
                placeholder='Enter your email' 
                autoComplete='email'
                onChange={e => setEmail(e.target.value)}/>

              <input 
                className='p-4 my-2 bg-white rounded text-black'
                type="password" 
                placeholder='Enter your password' 
                autoComplete='current-password'
                onChange={e => setPassword(e.target.value)}/>

              <button className='bg-red-600 py-3 my-6 rounded font-bold hover:bg-opacity-90 hover:-translate-y-0.5 transition'>
                Sign Up
              </button>

              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox'/>
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>

              <p className='mt-4 py-4 border-t-2 border-gray-600 text-slate-300 text-center'>
                or sign up with
              </p>

              <button onClick={handleGoogleSignIn}
                className='bg-white flex gap-2 justify-center items-center p-2 w-fit rounded mx-auto'>
                <FcGoogle size={40} className='inline-block'/>
                <p className='text-black'>Google</p>
              </button>

              <p className='py-8'>
                <span className='text-gray-600'>
                  Already subscribed to Nextflix?
                </span>
                <Link to='/login' className='text-sm'> Sign In</Link>
              </p>

            </form>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Signup