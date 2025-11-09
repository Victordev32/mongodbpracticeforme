import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('');
  const[cpassword,setCpassword]=useState('');
  const[user,setUser]=useState({});
  const[message,setMessage]=useState('');

  async function handleSubmit(e) {
    e.preventDefault()
    if(password==cpassword){
   setUser({username,email,password})
   console.log(user)
    }
    else{
      setMessage("Passwords must match");
    }
    
    let response=axios.post("http://localhost:3000/signup",user);
    console.log(response.data);
    
  }
  return (
   <div className='flex items-center flex-col  '>
      <h1 className='text-xl font-semibold text-center m-2'>Sign up</h1>
        <form className="flex flex-col justify-center mt-6" onSubmit={handleSubmit}>
            <input type="text" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
            <input type="email" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}/>

            <input type="password" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" className='my-3 p-2 bg-gray-300 focus:border-b outline-none w-full' placeholder='Confirm password' onChange={(e)=>setCpassword(e.target.value)}/>
             <button className='bg-blue-500 text-white rounded p-3'>Sign up</button>
             
        </form>
        <div className='p-1 m-1 flex justify-between'>
          <Link to="/auth/signin" className='text-blue-400 underline'>Sign in</Link>
          <Link to="" className='text-blue-400 underline'>Reset password</Link>
        </div>
    </div>
  )
}

export default Signup