import React from 'react'
import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {BiSearchAlt} from 'react-icons/bi'

function Navbar() {

  const {user, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async ()=> {
    try {
      await logout()
      navigate('/')
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>

      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NEXTFLIX</h1>
      </Link>

      <div className='flex justify-center items-center gap-1 sm:gap-2'>
        <Link to='/search'>
          <BiSearchAlt size={30} color={'white'}/>
        </Link>

        {user?.email ? (
          <>
            <Link to='/account'>
              <button className='text-white'>Account</button>
            </Link>

            <button 
              className='bg-red-600 px-2 sm:px-4 py-2 rounded text-white'
              onClick={handleLogout}>Logout</button>
          </>
          ) : (
          <>
            <Link to='/login'>
              <button className='text-white'>Sign In</button>
            </Link>

            <Link to='/signup'>
              <button className='bg-red-600 px-2 sm:px-4 py-2 rounded text-white'>Sign Up</button>
            </Link>
          </>
        )}

      </div>

    </div>
  )
}

export default Navbar