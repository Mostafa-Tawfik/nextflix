import React from 'react'
import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

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

  // console.log(user?.email);

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>

      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NEXTFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>

          <button 
            className='bg-red-600 px-4 py-2 rounded text-white'
            onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>

          <Link to='/signup'>
            <button className='bg-red-600 px-4 py-2 rounded text-white'>Sign Up</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Navbar