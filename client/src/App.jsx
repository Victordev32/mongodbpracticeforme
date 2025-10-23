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

const App = () => {
  return (
    <>
    <Router>
      <Routes>
     <Route path='/auth' element={<Auth/>} >
           <Route index path='signin' element={<Signin/>}/>
           <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
        
    </Router>
       
    </>
  )
}

export default App
