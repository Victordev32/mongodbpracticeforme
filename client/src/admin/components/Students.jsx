import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Students = () => {
  let i=0;
   const students=[{
    name: "petr Malick",
    gender: "male",
    age: 22,
    category: "Information Technology",
   },{
    name:"Josh sitter",
    gender: "male",
    age: 23,
    category: "Education"
   }]

  


  return (
    <div className='md:ms-35 ms-10'>
      <h2 className='text-xl'>Students</h2>
     
      
      <div className='mt-6 overflow-x-auto'>
           <table  className='border border-gray-400 w-full md:w-auto table-auto border-spacing-6 item-center md:table-fixed overflow-x-scroll'>
             <tr >
              <th className='p-0 md:p-2 border border-gray-400'>#</th>
               <th className='p-0 md:p-2 border border-gray-400'>Name</th>
                <th className='p-0 md:p-2 border border-gray-400'>Gender</th>
                <th className='p-0 md:p-2 border border-gray-400'>Age</th>
                 <th className='p-0 md:p-2 border border-gray-400'>School/Category</th>
                  <th className='p-0 md:p-2 border border-gray-400'>
                    Actions
                  </th>
              </tr>
              
                {
                
                students.map((data,index)=>{
                  i=i+1;
                  return(
                    <tr key={index} className='text-sm'>
                      <td className='p-1 border border-gray-400'>{i}</td>
                      <td className='p-1 border border-gray-400'>{data.name}</td>

                      <td className='p-1 border border-gray-400'>{data.gender}</td>
                       <td className='p-1 border border-gray-400'>{data.age}</td>
                      <td className='p-1 border border-gray-400'>{data.category}</td>
                      <td className='p-1 border border-gray-400'>
                        <button className='bg-green-500 text-white p-1 rounded m-1'>Update</button>
                        <button className='bg-red-500 text-white p-1 rounded m-1 '>Delete</button>
                        <button className='bg-blue-500 text-white p-1 rounded m-1 '>Details</button>
                      </td>
                    </tr>
                  )
                  

                })}
              
           </table>
      </div>

    </div>
  )
}

export default Students
