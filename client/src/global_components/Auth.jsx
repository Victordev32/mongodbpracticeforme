import React from 'react'
import SignHeader from './SignHeader'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div>
    <SignHeader/>
   <Outlet/>
    </div>
  )
}

export default Auth