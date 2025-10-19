import React from 'react'

const Teachers = () => {
  const teachers=[{
    name: "juan",
    gender: "male",
    age: "32",
    category: "Information technology",
    qualification: "Masters Degree",

  },{
    name: "Jane",
    gender: "female",
    age: "27",
    category: "Business studies",
    qualification: "Masters Degree"

  }];
  let i=0;
  return (
    <div className='md:ms-35 ms-10'>
      <h2 className='text-xl font-semibold m-2'>Teachers</h2>
      <div>
        <button className='m-2 bg-blue-500 p-1 text-white rounded'>Add teacher</button>
      </div>
      <div className='overflow-x-auto'>
        <table className='border-collapse border border-gray-400 w-full md:w-auto table-auto border-spacing-6 item-center md:table-fixed overflow-x-scroll'>
        <tr>
          <th className='border-gray-400 border p-0 md:p-2'>#</th>
          <th className='border-gray-400 border p-0 md:p-2'>Name</th>
          <th className='border-gray-400 border p-0 md:p-2 '>Gender</th>
          <th className='border-gray-400 border p-0 md:p-2'>Age</th>
          <th className='border-gray-400 border p-0 md:p-2'>Department</th>
          <th className='border-gray-400 border p-0 md:p-2'>Qualification</th>
          <th className='border-gray-400 border p-0 md:p-2'>Actions</th>
        </tr>
        
        {
          teachers.map(teacher=>{
            i=i+1;
  return(
            <tr>
            <td className='border border-gray-400 p-1'>{i}</td>
            <td className='border border-gray-400 p-1'>{teacher.name}</td>
             <td className='border border-gray-400 p-1'>{teacher.age}</td>
            <td className='border border-gray-400 p-1'>{teacher.gender}</td>
            <td className='border border-gray-400 p-1'>{teacher.category}</td>
            <td className='border border-gray-400 p-1'>{teacher.qualification}</td>
            <td className='border border-gray-400 p-1'>
              <button className='bg-green-500 text-white p-1 rounded m-1'>Update</button>
              <button className='bg-red-500 text-white p-1 rounded m-1'>Delete</button>
              <button className='bg-blue-500 text-white p-1 rounded m-1'>Details</button>
            </td>
            </tr>
       
        )
        i++;
        })}
        
      </table>
      </div>
      
    </div>
  )
}

export default Teachers
