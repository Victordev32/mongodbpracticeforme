import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom"
import axios from 'axios'

const Signin = () => {
  const [user,setUser]=useState({});
  const [pass,setPass]=useState("")
   const [email,setEmail]=useState("")

const navigator=useNavigate();

   
async function fetchUser() {
   let response=await axios.post("http://localhost:3000/login",user);
   console.log(response.data)
   if(response.data.usertype=='admin'){
    navigator("/admin/")
   }
}
  
useEffect(()=>{
      fetchUser();
},[user])
 
 
const handleSubmit=(e)=>{
  e.preventDefault();
  setUser({email,pass});
  console.log(user)

}
  return (
    
  <div className='flex items-center flex-col  '>
        <h1 className='text-xl font-semibold text-center m-2'>Sign in</h1>
          <form className="flex flex-col justify-center mt-6" onSubmit={handleSubmit}>
             
              <input type="email" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}/>
  
              <input type="password" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Password' onChange={(e)=>setPass(e.target.value) }/>
              
               <button className='bg-blue-500 text-white rounded p-3' type='submit'>Sign in</button>
               
          </form>
          <div className='p-1 m-1 flex justify-between'>
            <Link to="/auth/signup" className='text-blue-400 underline mx-2'>Sign up</Link>
            <Link to="" className='text-blue-400 underline mx-2'>Reset password</Link>
          </div>
      </div>
  )
  }

export default Signin