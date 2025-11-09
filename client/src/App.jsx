import React from 'react'

import Header from './admin/components/Header'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './admin/components/Home'
import Students from './admin/components/Students'
import Teachers from './admin/components/Teachers'
import Sidebar from './admin/components/Sidebar'
import Departments from './admin/components/Departments'
import Courses from './admin/components/Courses'
import Signin from './global_components/Signin'
import Auth from './global_components/Auth'
import Signup from './global_components/Signup'
import Dashboard from './admin/components/Dashboard'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
     <Route path='/' element={<Auth/>} >
           <Route index path='auth/signin' element={<Signin/>}/>
           <Route path='auth/signup' element={<Signup/>}/>
      </Route>
      
      <Route path='/admin/' element={<Dashboard/>}>
      
      <Route index path='dashboard' element={<Home/>}/>
      <Route path='departments' element={<Departments/>}/>
      <Route  path='students' element={<Students/>}/>
      <Route  path='teachers' element={<Teachers/>}/>
      <Route  path='courses' element={<Courses/>}/>
      </Route>
      </Routes>
    </Router>
       
    </>
  )
}

export default App
