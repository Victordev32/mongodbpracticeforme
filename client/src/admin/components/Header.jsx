import {  faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [open, setOpen] = useState(true)
    

    const toggleButton=()=>{
        console.log(open)
        if(open){
         setOpen(false)
        }else{
            setOpen(true)
        }
    }
  return (
    <>
    
      <div className='w-full flex flex-row bg-green-400 h-10 item-center justify-between'>
        <div className="font-bold px-5 text-xl text-white">
           Simple school
        </div>
        <div className='flex md:flex-row flex-column justify-between item-center'>
           <Link to='' className='m-2 px-3 bg-blue-400 text-white rounded'><FontAwesomeIcon icon={faUser}/></Link>
          <Link to='' className='m-2 px-3 bg-red-400 text-white  rounded'><FontAwesomeIcon icon={faSignOut} /></Link>
           
        </div>
      </div>
    </>
  ) 
}

export default Header
