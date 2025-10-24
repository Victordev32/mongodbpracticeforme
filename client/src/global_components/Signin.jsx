import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link, useLocation} from "react-router-dom"
import axios from 'axios'

const Signin = () => {
  const [user,setUser]=useState({});
  const [pass,setPass]=useState("")
   const [email,setEmail]=useState("")

  function  handleSubmit(e){
    e.preventDefault()
    setUser({email,pass})
    console.log(user)
const submitUser=async()=>{
  try {
    const response=await axios.post("http://localhost:3000/login",user)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
    
   }
   submitUser()
  }

  return (
    <div className='md:w-100 w-full  relative md:top-50  md:left-70 md:right-70'>
      <h1 className='text-xl font-semibold text-center m-2'>Sign in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col md:w-full"action="" method="post">
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Email address'/>
            <input onChange={(e)=>{setPass(e.target.value)}}type="password" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Password'/>
             <button className='bg-blue-500 text-white rounded p-3' >Sign in</button>
             
        </form>
        <div className='p-1 m-1 flex justify-between'>
          <Link to="../signup" className='text-blue-400 underline'>Sign up</Link>
          <Link to="" className='text-blue-400 underline'>Reset password</Link>
        </div>
    </div>
  )
  }

export default Signin