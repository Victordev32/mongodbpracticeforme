import React from 'react'

import Header from './admin/components/Header'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './admin/components/Home'
import Students from './admin/components/Students'
import Teachers from './admin/components/Teachers'
import Sidebar from './admin/components/Sidebar'
import Departments from './admin/components/Departments'
import Courses from './admin/components/Courses'

const App = () => {
  return (
    <>
    <Router>
        <Header/>
        <Sidebar/>
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/teachers'  element={<Teachers/>}/>
            <Route path='/departments' element={<Departments/>}/>
            <Route path='/courses' element={<Courses/>}/>
        </Routes>
    </Router>
       
    </>
  )
}

export default App
