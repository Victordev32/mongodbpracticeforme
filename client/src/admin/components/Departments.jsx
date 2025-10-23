import React from 'react'

const Departments = () => {
  const departments=[{
    name:"Information Technology",
    HOD: "paul ms",
    students: "70",
    teachers: "7"
  }]
  let i=0;
  return (
        <div className='md:ms-35 ms-10'>
      <h2 className='text-xl font-semibold m-2'>Departments</h2>
      <div>
        <button className='m-2 bg-blue-500 p-1 text-white rounded'>Add department</button>
      </div>
      <div className='overflow-x-auto'>
        <table className='border-collapse border border-gray-400 w-full md:w-auto table-auto border-spacing-6 item-center md:table-fixed overflow-x-scroll'>
        <tr>
          <th className='border-gray-400 border p-0 md:p-2'>#</th>
          <th className='border-gray-400 border p-0 md:p-2'>Name</th>
          <th className='border-gray-400 border p-0 md:p-2 '>HOD</th>
          <th className='border-gray-400 border p-0 md:p-2'>Students</th>
          <th className='border-gray-400 border p-0 md:p-2'>Teachers</th>
          <th className='border-gray-400 border p-0 md:p-2'>Action</th>
          
        </tr>
        
        {
          departments.map((department,index)=>{
            i=i+1;
         return(
            <tr key={index}>
            <td className='border border-gray-400 p-1'>{i}</td>
            <td className='border border-gray-400 p-1'>{department.name}</td>
             <td className='border border-gray-400 p-1'>{department.HOD}</td>
            <td className='border border-gray-400 p-1'>{department.students}</td>
            <td className='border border-gray-400 p-1'>{department.teachers}</td>
            
            <td className='border border-gray-400 p-1'>
              <button className='bg-green-500 text-white p-1 rounded m-1'>Update</button>
              <button className='bg-red-500 text-white p-1 rounded m-1'>Delete</button>
              <button className='bg-blue-500 text-white p-1 rounded m-1'>Details</button>
            </td>
            </tr>
       
        )
        
        })}
        
      </table>
      </div>
      </div>
  )
}

export default Departments