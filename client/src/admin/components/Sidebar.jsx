import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook,  faGroupArrowsRotate, faList, faMortarBoard, faNoteSticky, faPeopleArrows, faPeopleGroup, faPersonChalkboard, faShower } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const [show, setShow] = useState(false)

  function showSidebar(){
      if(show){
        setShow(false)
      }else{
        setShow(true)
      }
    }
  return (
    
    <>
    <aside className='bg-green-400    bottom-0 top-10 fixed  h-full'>
      <div className='text-start text-white text-lg m-1'>
          
      <button className='text-center md:hidden'onClick={showSidebar}><FontAwesomeIcon  icon={faBars}></FontAwesomeIcon></button>
     
      </div>
      <nav className='flex flex-col text-white'>
         <NavLink  to="/" className={`m-1 p-1 `}>< FontAwesomeIcon   icon={faList}/><span className={`${show?"inline":"hidden"} md:inline`}>Dashboard</span></NavLink>
         <Link to="/students" className='m-1 p-1'>< FontAwesomeIcon  icon={faMortarBoard}/><span className={`${show?"inline":"hidden"} md:inline`}>Students</span></Link>
        <Link to="/teachers" className='m-1 p-1'>< FontAwesomeIcon  icon={faPersonChalkboard}/><span className={`${show?"inline":"hidden"} md:inline`}>Teachers</span></Link>
         <Link to="/departments" className='m-1 p-1'>< FontAwesomeIcon  icon={faGroupArrowsRotate}/><span className={`${show?"inline":"hidden"} md:inline`}>Departments</span></Link>
          <Link to="/courses" className='m-1 p-1'>< FontAwesomeIcon  icon={faBook}/><span className={`${show?"inline":"hidden"} md:inline`}>Courses</span></Link>
    </nav>   
    </aside>
    
    </>
  )
}

export default Sidebar