import React, { useEffect, useState } from 'react'
import SignHeader from './SignHeader'
import { Outlet, useLocation } from 'react-router-dom'

const Auth = () => {
    const [route,setRoute]=useState('')
  const location=useLocation();
  useEffect(checkRoute,[location]);

  function checkRoute(){
    console.log(location.pathname)
    setRoute(location.pathname);
  }



  return (
    <div>
    <SignHeader route={route}/>
   <Outlet/>
    </div>
  )
}

export default Auth