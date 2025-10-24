import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <div className='md:w-100 w-full  relative md:top-50  md:left-70 md:right-70'>
      <h1 className='text-xl font-semibold text-center m-2'>Sign up</h1>
        <form className="flex flex-col md:w-full"action="" method="post">
            <input type="text" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Username'/>
            <input type="email" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Email address'/>

            <input type="password" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Password'/>
            <input type="password" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Confirm password'/>
             <button className='bg-blue-500 text-white rounded p-3'>Sign up</button>
             
        </form>
        <div className='p-1 m-1 flex justify-between'>
          <Link to="../signin" className='text-blue-400 underline'>Sign in</Link>
          <Link to="" className='text-blue-400 underline'>Reset password</Link>
        </div>
    </div>
  )
}

export default Signup