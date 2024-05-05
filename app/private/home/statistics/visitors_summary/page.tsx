'use client'
import { Visitor, months } from '@/app/data'
import React, { useState } from 'react'

const VisitorsSummary = () => {
  const [visitors, setVisitors] = useState([])
  return (
    <div className='h-screen w-screen overflow-y-scroll'>
          <div className="flex flex-row justify-between  w-96 mx-32">
            <div>
              <label className="block" htmlFor="branch">Branch</label>
              <select name="branch" id="branch">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="month">Month</label>
              <select name="month" id="month">
                <option value="" hidden>
                  Select
                </option>
                {months.map((month, i) => (
                  <option value={month.label} key={i}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block" htmlFor="role">User Role</label>
              <select name="role" id="role">
                <option value="" hidden>
                  Select
                </option>
              </select>
            </div>
          </div>
          <table className="table border-2">
            <thead>

            <tr className="">
              {Visitor.map((visitor, i) => (
                <th
                key={i}
                className="border-2"
                >
                  {visitor.label}
                </th>
              ))}
            </tr>
              </thead>
          <tbody>
            <tr>
              <td className='border-2'>1</td>
              <td className='border-2'>Nitin Patel</td>
              <td className='border-2'>nitin@43gmail.com</td>
              <td className='border-2'>Engineering</td>
              <td className='border-2'>19/02/2024</td>
              <td className='border-2'>8128863575</td>
              <td className='border-2'>Admission</td>
            </tr>
          </tbody>
          </table>
        </div>
  )
}

export default VisitorsSummary