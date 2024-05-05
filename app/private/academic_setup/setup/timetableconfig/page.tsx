import React from 'react'

const TimetableConfig = () => {
  return (
    <div>
      <div     className="flex flex-row justify-between  ml-24"
        style={{ width: "60rem" }}
    >
        <div className='mt-12 ml-80'>
          <label
            className="inline-block border-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="degreeCode"
          >
            DegreeCode
          </label>
          <select name="degreeCode" className='inline-block border-2' id="degreeCode">
            <option value="" hidden>
              Select
            </option>
          </select>
        </div>
        </div>
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th className='inline-block border-2'>Configuration</th>
                <th className='inline-block border-2'>CourseYear</th>
               </tr>
            </thead>
            <tbody>
              <tr>
                <td className='block border-2'>Day/Week</td>
                <td className='block border-2'>Shift Start time</td>
                <td className='block border-2'>Shift End time</td>
                <td className='block border-2'>Section Count</td>
                <td className='block border-2'>Subject Count</td>
                <td className='block border-2'>Primary Subject Faculty</td>
                <td className='block border-2'>Secondary Subject Faculty</td>
             
              </tr>
              <tr>
                
                <th className='block border-2'>Add Periods</th>
            
              </tr>
              <tr>
                <th className='block border-2'>Period Details</th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default TimetableConfig