'use client'
import { Toppers } from '@/app/data'
import React, { useState } from 'react'

const ToppersSummary = () => {
  const [toppers, setToppers] = useState([])
  return (
    <div className='h-screen w-screen'>
    <div className="flex flex-row justify-between w-96 mx-32">
      <div>
        <label className="block" htmlFor="branch">Branch</label>
        <select name="branch" id="branch">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="degreeCode">DegreeCode</label>
        <select name="degreeCode" id="degreeCode">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="courseYear">courseYear</label>
        <select name="courseYear" id="courseYear">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
      <div>
        <label className="block" htmlFor="section">Section</label>
        <select name="section" id="section">
          <option value="" hidden>
            Select
          </option>
        </select>
      </div>
    </div>
    <table className='table'>
      <thead className="border-2">
        <tr>

        {Toppers.map((topper, i) => (
          <th
          key={i}
          className="border-2"
          >
            {topper.label}
          </th>
        ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border-2'>B.Tech.CSE(2021-22)</td>
          <td className='border-2'>2nd year 4th sem </td>
          <td className='border-2'>3</td>
          <td className='border-2'>Neel Vankar</td>
          <td className='border-2'>Male</td>
          <td className='border-2'>O</td>
          <td className='border-2'>9.5</td>
          <td className='border-2'>10</td>
          <td className='border-2'>87.23</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default ToppersSummary