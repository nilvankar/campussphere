'use client'
import { Visitor, months } from '@/app/data'
import React, { useState } from 'react'

const VisitorsSummary = () => {
  const [visitors, setVisitors] = useState([])
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
            <thead className="table-header-group">
              {Visitor.map((visitor, i) => (
                <tr
                  key={i}
                  className="table-cell text-lg font-semibold border-2 text-center"
                >
                  {visitor.label}
                </tr>
              ))}
            </thead>
          </table>
        </div>
  )
}

export default VisitorsSummary