'use client'
import { teaching_plan_summary } from '@/app/data'
import React, { useState } from 'react'

const TeachingPlan = () => {
  const [teachingPlan, setTeachingPlan] = useState([])
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
              <label className="block" htmlFor="fromDate">From Date</label>
             <input type="date" name="fromDate" id="fromDate" />
            </div>
            <div><label className="block" htmlFor="toDate">To Date</label><input type="date" name="toDate" id="toDate" /></div>
          </div>
          <table className="table border-2">
            <thead className="table-header-group">
              {teaching_plan_summary.map((teachingPlan, i) => (
                <tr
                  className="table-cell text-lg font-semibold border-2 text-center"
                  key={i}
                >
                  {teachingPlan.label}
                </tr>
              ))}
            </thead>
          </table>
        </div>
  )
}

export default TeachingPlan