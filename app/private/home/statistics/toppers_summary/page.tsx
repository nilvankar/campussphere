'use client'
import { Toppers } from '@/app/data'
import React, { useState } from 'react'

const ToppersSummary = () => {
  const [toppers, setToppers] = useState([])
  return (
    <div>
    <div className="flex flex-row justify-around">
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
    <table>
      <thead className="table border-2">
        {Toppers.map((topper, i) => (
          <tr
            key={i}
            className="table-cell text-lg font-semibold border-2 text-center"
          >
            {topper.label}
          </tr>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  </div>
  )
}

export default ToppersSummary