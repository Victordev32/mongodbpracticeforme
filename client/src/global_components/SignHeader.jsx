import React from 'react'
import { Link } from 'react-router-dom'

const SignHeader = ({route}) => {
  return (
    <div className='w-full flex flex-row bg-green-400 h-10 item-center justify-between'>
        <div className="font-bold px-5 text-xl text-white">
           Simple school
        </div>
        <div className='flex md:flex-row flex-column justify-between item-center'>
           {route=='/auth/signup'?<Link to='/auth/signin' className='m-2 px-3  text-white hover:border-b  '>Sign in</Link>:<Link to='/auth/signup' className='m-2 px-3  text-white  hover:border-b '>Sign up</Link>}
          
           
           
        </div>
      </div>
  )
}

export default SignHeader