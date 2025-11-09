import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default Dashboard
