'use client'
import { teaching_plan_summary } from '@/app/data'
import React, { useState } from 'react'

const TeachingPlan = () => {
  const [teachingPlan, setTeachingPlan] = useState([])
  return (
    <div>
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
              <label className="block" htmlFor="fromDate">From Date</label>
             <input type="date" name="fromDate" id="fromDate" />
            </div>
            <div><label className="block" htmlFor="toDate">To Date</label><input type="date" name="toDate" id="toDate" /></div>
          </div>
          <table className="table border-2">
            <thead className="">
              <tr>

              {teaching_plan_summary.map((teachingPlan, i) => (
                <th
                className="table-cell text-lg font-semibold border-2 text-center"
                key={i}
                >
                  {teachingPlan.label}
                </th>
              ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathamatics</td>
                <td>Statistics</td>
                <td>2</td>
                <td>11:20-12:20</td>
                <td>1</td>
                <td>22-02-2024</td>
                <td>22-02-2024</td>
                <td>complete</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default TeachingPlan